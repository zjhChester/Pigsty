<template>
	<view>
		<view class="msg_info">
			<uni-card v-if="msgInfo!=''" :is-shadow="true" :title="msgInfo.nickName" mode="title" :thumbnail="'http://zjhwork.xyz:8080/images/'+msgInfo.username+'.png'"
			 :extra="msgInfo.username" note="true">
			<view>
				<view class="image-box" v-if="msgInfo.imgUrl != null">
					<image style="" class="image" mode="aspectFill" @click="pressImg(msgInfo.imgUrl)" :src="msgInfo.imgUrl" />
				</view>
				<view class="content-box" style="margin-top: 40rpx;min-height: 100rpx;font-weight: 400;font-size: 30rpx;font-style: 微软雅黑;">
					<rich-text :nodes="msgInfo.content" class="content-box-text"></rich-text>
				</view>
			</view>
			<template slot="footer">
				<view class="footer-box">
					
				</view>
			</template> 
		</uni-card>	
		</view> 
		<view  class="box_comments" style="display: inline;">
		<!-- #ifndef MP-QQ -->
		<button @tap="tapBtn('default')" style="position: absolute;right: 30rpx;min-height: 60rpx;line-height: 60rpx;margin-top: 5rpx;" type="primary" size="mini">评论</button>
		<!-- #endif -->
		<!-- #ifdef MP-QQ -->
		<button @tap="tapBtn('default')" style="position: absolute;right: 30rpx;min-height: 40rpx;line-height: 40rpx;" type="primary" size="mini">评论</button>
		<!-- #endif -->
			<textarea v-model="usingCleanValue"  maxlength="-1" @input="setTextAreaValues"  style="min-height: 60rpx;line-height: 60rpx;background-color: #F5F5F5;padding: 5rpx;margin-left: 30rpx;width: 500rpx;border-radius: 1rpx;border: 1px solid #D3D3D3;" auto-height placeholder="评论点啥!"  />
		</view>
		 
		<view class="msg_comments" v-if="commentArr != []">
			<uni-card v-for="(comment,i) in commentArr" :key="i" :title="comment.fromNickName" :is-shadow="true" :note="comment.createTime"  :thumbnail="'http://zjhwork.xyz:8080/images/'+comment.fromUsername+'.png'"><text class="content-box-text">{{comment.content}}</text></uni-card>
		</view> 
		<view class="model">
			<chunLei-modal v-model="model_value" :mData="model_data" :type="model_type" @onConfirm="onConfirm" @cancel="cancel" :navHeight="0">
			</chunLei-modal>
		</view>
	</view>
	
</template>

<script>
	import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue';
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {
			uniSection,
			uniCard,
			chunLeiModal
			
		},
		data() {
			return {
				usingCleanValue:'',
				JSESSIONID:'',
				msgId:'',
				msgInfo:'',
				commentArr:[],
				commentContent:'',
				/*模态框*/
				model_value:false,
				model_type:'default',
				model_data:{},
				model_defaultData:{title:'评论',content:'猪有没有认真写？我发了哦！',cancelText:'还没有！',confirmColor:'#3CC51F'}
			}
		},
		onLoad(opt) {
			//#ifdef MP-WEIXIN || MP-QQ
			if(opt.jsd!=undefined){
				this.JSESSIONID = opt.jsd;
			}
			//#endif
			
			if(opt.msgId != undefined){
				this.msgId = opt.msgId;
				this.loadingComments()
				this.loadingMsgInfo();
			}
			
		},
		onPullDownRefresh() {
			this.loadingComments()
			this.loadingMsgInfo();
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			/*模态框*/
			cancel(){
				//点击取消函数
				uni.showToast({
					title:"可不能瞎评论,猪要打屁股!",
					duration:2000,
					icon:'none'
				})
			},
			onConfirm(e){
				const that = this;
				switch(this.model_type){
					case 'default':
						//确认发布
						that.addComment()
						break;
				}
			},
			tapBtn(type){
				this.model_type = type
				this.model_value = !this.model_value
				switch(this.model_type){
					case 'default':
						this.model_data = this.model_defaultData
						break;
				}
			},
			loadingMsgInfo(){
				const that = this;
				uni.request({
					url: 'http://zjhwork.xyz:8080/findMsg?msgId='+that.msgId,
					method: 'GET',
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: res => { 
						for (var i = 0; i < res.data.result.length; i++) {
							//本地小表情
							res.data.result[i].content = res.data.result[i].content.replace(new RegExp('images/', 'g'),
								'http://zjhwork.xyz:8080/images/')
							//服务器图片
							if (res.data.result[i].imgUrl != undefined) {
								res.data.result[i].imgUrl = res.data.result[i].imgUrl.replace(new RegExp('/getImgById', 'g'),
									'http://zjhwork.xyz:8080/getImgById')
							} 
						}
						if(res.data.code != 0){ 
							this.msgInfo = res.data.result[0];
						}else{
							uni.showToast({
								title: '加载失败，快联系猪猪看看',
								icon:"none",
								duration:2000
							});
						}
					},
				});
			},
			setTextAreaValues(e){
				this.commentContent = e.detail.value
			},
			addComment(){
				const that = this;
				if(this.commentContent == ''){
					uni.showToast({
						title:'总要说点啥呀,啥都不说就要评论咯！',
						icon:'none',
						duration:2000
					})
				}else{
					uni.request({
						url: 'http://zjhwork.xyz:8080/addComment',
						header: {
							//#ifdef MP-WEIXIN || MP-QQ
							"Cookie": "JSESSIONID=" + that.JSESSIONID,
							//#endif
							'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
						},
						method: 'POST',
						data: {content:that.commentContent,msgId:that.msgId},
						success: res => {
							if(res.data.code == 1){
								that.loadingComments()
								that.usingCleanValue = '';
							}else{
								uni.showToast({
									title: '发表失败，快联系猪猪看看',
									icon:"none",
									duration:2000
								});
							}
						}
						
					});
				}
			},
			pressImg(current) {
				let arr=[]
				arr.push(current)
				uni.previewImage({
					current:0,
					urls: arr,
					
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			loadingComments(){
				uni.showLoading({
					title: '正在加载评论~猪猪稍等！'
				});
				const that = this;
				uni.request({
					url:"http://zjhwork.xyz:8080/queryComments?id="+that.msgId,
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: (res) => {
						uni.hideLoading()
						if(res.data.code == 1){
							that.commentArr = res.data.result;
						}else{
							uni.showToast({
								title: '加载失败，快联系猪猪看看',
								icon:"none",
								duration:2000
							});
						}
					}
				})
			}
			
		}
	}
</script>

<style>
	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350rpx;
		overflow: hidden;
	}
	
	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}
	
	.content-box {
		padding-top: 20rpx;
	}
	
	.content-box-text {
		font-size: 30rpx;
	}
page{
	background: pink;
}
</style>
