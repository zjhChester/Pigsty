<template>
	<view>
		<view class="type">
			<picker  :value="index" :range="array" @change="change">
				<uni-section :title="'选择发布类型:'+array[index]" type="line"></uni-section>
			</picker>
		</view>
		<view class="content" style="min-height: 300rpx;margin-top: 100rpx;">
			<view class="">
				<textarea maxlength="-1"  @input="setTextAreaValues" placeholder-style="" auto-height value="" placeholder="" style="min-height: 130rpx;border: #555555 10px double;padding: 5rpx;margin: 0 auto;border-radius: 10%;" placeholder="写下你的心里话吧!"/>
			</view>
			<view class="" style="text-align: center;">
				<text style="font-size: 20rpx;text-align: center;">猪猪码了{{fontNums}}个字,还有想说的吗!</text>
			</view>
		</view> 
		<view class="" style="text-align: center;">
			<button type="primary" size="mini" @tap="addPhoto">上传一张相关图片</button>
			<cpimg ref="cpimg" @result="cpimgOk" @err="cpimgErr" :number="2" :fixOrientation="true" :size="500" :maxWidth="1000" :ql="0.9" type="url" />
			<view class="img" style="text-align: center;margin-top: 40rpx;">
				<image style="width: 250rpx;height: 300rpx;" v-for="(v,i) in src" :key="i" :src="v" class="showimg" @click="preImg(i)" mode="aspectFill" />
			</view>
		</view>
		<view class="footer">
			<button type="primary"  @tap="tapBtn('default')">发布</button>
		</view>
		<view class="model">
			<chunLei-modal v-model="model_value" :mData="model_data" :type="model_type" @onConfirm="onConfirm" @cancel="cancel" :navHeight="0">
			</chunLei-modal>
		</view>
	</view>
</template> 
 
<script>  
	import { pathToBase64, base64ToPath } from '../../components/js_sdk/gsq-image-tools/image-tools/index.js';
	import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue';
	import uniSection from '@/components/uni-section/uni-section.vue';
	import cpimg from "../../components/cpimg/cpimg.vue";
	export default {
		components: {
			uniSection,
			cpimg,
			chunLeiModal
		},
		data() {
			return {
				/*模态框*/
				model_value:false,
				model_type:'default',
				model_data:{},
				model_defaultData:{title:'发布',content:'猪猪写完啦?那我发布咯！？',cancelText:'还没有！',confirmColor:'#3CC51F'},
				/*数据绑定*/
				array:['秀恩爱','记事','心情','不知道什么类型','装逼'],
				index:0,
				fontNums:0,
				src: [],
				JSESSIONID:'',
				content:'',
				imgBase64:''
			}
		},
		onLoad(opt) {
			//#ifdef MP-WEIXIN || MP-QQ
			if(opt.jsd!=undefined){
				this.setJSESSIONID(opt.jsd)
			}
			//#endif
			
		},
		methods: {
			setJSESSIONID(jsd) {
				this.JSESSIONID = jsd;
			},
			setTextAreaValues(e){
				this.content = e.detail.value
				this.fontNums = e.detail.value.length
			},
			/*发布文章*/
			publicMsg(){
				const that = this;
				if(this.content ==''){
					uni.showToast({
						title:"写几句话才能发布哦!不能太敷衍!",
						icon:'none',
						duration:1500
					})
				}else{
					let pigStyClientName = '';
					//#ifdef APP-PLUS 
					pigStyClientName = '安卓客户端猪窝';
					//#endif
					//#ifdef MP-WEIXIN
					pigStyClientName = 'wx小程序版猪窝';
					//#endif
					//#ifdef MP-QQ
					pigStyClientName = 'QQ小程序版猪窝';
					//#endif
					uni.request({
						url:'http://zjhwork.xyz:8080/newMsg',
						method:'POST',
						data:{"type":that.array[that.index],"content":this.content,"base64":that.imgBase64,"clientName":pigStyClientName},
						header:{
							//#ifdef MP-WEIXIN
							"Cookie":"JSESSIONID="+that.JSESSIONID,
							//#endif
							//#ifdef MP-QQ
							"Cookie":"JSESSIONID="+that.JSESSIONID,
							//#endif
							//发送表单数据   否则默认请求是json数据
							'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
						},success: (res) => {
							if(res.data.code == 1){
								uni.showToast({
									title:"发表成功!请稍等~", 
									duration:1500
								})
								setTimeout(function(){
									uni.redirectTo({
										url:'../index/index?jsd='+that.JSESSIONID
									})
								},1500)
							}else{
								uni.showToast({
									title:"发表失败,请检查网络设置,或者赶紧叫猪猪看看!",
									icon:'none',
									duration:2000
								})
							}
						}
						
					})
				}
			},
			urlTobase64(url) {
				const that = this;
				pathToBase64(url).then(base64 =>{
					that.imgBase64 = base64;
				}).catch(error =>{
				})
			},
			/*模态框*/
			cancel(){
				//点击取消函数
				uni.showToast({
					title:"那看来要仔细斟酌斟酌!",
					duration:2000,
					icon:'none'
				})
			},
			onConfirm(e){
				const that = this;
				switch(this.model_type){
					case 'default':
						//确认发布
						that.publicMsg()
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
			// 添加图片 图片压缩
			addPhoto() {
				let that = this;
				this.$refs.cpimg._changImg()
			},
			cpimgOk(file) {
				let that = this
				that.src = file
				this.urlTobase64(file[0])
			},
			cpimgErr(e) {
				console.log(e)
			},
			preImg(current){
				uni.previewImage({
					current,
					urls:this.src,
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
			//type参数绑定
			change(e){
				this.index = e.detail.value
			}
		}
	}
</script>

<style>

</style>
