<template>
	<view >
		<view v-for="(r,i) in reminderArr" :key="i" class="" @click="toMsgDetail(r.msgId)">
			<uni-card :note="'来自'+r.nickName" :title="(r.type=='comment')?'评论了你的文章':'喜欢了你的文章'" :is-shadow="true" :extra="r.createTime">
				<text class="content-box-text">{{r.preContent}}</text>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {
			uniSection,
			uniCard
		},
		data() {
			return {
				JSESSIONID:'',
				reminderArr:[]
			}
		},
		onLoad(opt) {
			if(opt.jsd!=undefined){
				this.JSESSIONID = opt.jsd;
			}
			this.loadingReminders()
			if(opt.count != 0){
				this.readReminder()
			}
		},
		onPullDownRefresh() {
			this.loadingReminders()
			this.readReminder();
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			loadingReminders(){
				const that = this;
				uni.request({
					url: 'http://zjhwork.xyz:8080/queryReminder',
					method: 'GET',
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: res => {
						if(res.data.code==1){
							that.reminderArr = res.data.result;
						}else{
							uni.showToast({
								title: '加载与我相关模块失败，快去联系猪猪！',
								icon:'none',
								duration:2000
							});
						}
					}
				});
			},
			readReminder(){
				const that = this;
				uni.request({
					url: 'http://zjhwork.xyz:8080/readReminder',
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: res => {
						uni.showToast({ 
							title: '已读！',
							icon:'none',
							duration:1500
						});
					}
				});
			},
			toMsgDetail(msgId){
				uni.navigateTo({
					url: '../msgDetail/msgDetail?jsd='+this.JSESSIONID+'&msgId='+msgId
					
				});
			}
		}
	}
</script>

<style>
	.content-box {
		padding-top: 20rpx;
	}
	
	.content-box-text {
		font-size: 30rpx;
	}
</style>
