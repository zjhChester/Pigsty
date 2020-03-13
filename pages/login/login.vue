<template>
	<view>
		<uni-section title="账号" type="line"></uni-section>
		<input @input="usernameSetValue" type="text" value="" placeholder="此处输入账号信息"/>
		<uni-section title="密码" type="line"></uni-section>
		<input @input="passwordSetValue" type="password" value="" placeholder="此处输入密码信息"/>
		<button type="primary" @click="checkUserInfo">登陆</button>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		components: {
			uniSection
		},
		data() {
			return {
				user:{username:'',password:''}
			}
		},
		methods: {
			usernameSetValue(e){
				this.user.username = e.detail.value
			},
			passwordSetValue(e){
				this.user.password = e.detail.value
			},
			checkUserInfo(){
				if(this.user.username!="" && this.user.password!=""){
					this.loginRequest(this.user.username,this.user.password)
				}else{
					uni.showToast({
						title:"请输入完整的账号密码信息！",
						duration:1500,
						position:'bottom',
						icon:'none'
					})
				}
			},
			loginRequest(username,password){
				const that = this;
				uni.showLoading({
					title:'正在登陆'
				})
				uni.request({
				    url: 'http://zjhwork.xyz:8080/checkUser',
					method:'POST',
					dataType: 'json',
					header:{
						//发送表单数据   否则默认请求是json数据
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data:{"username":username,"password":password},
					success: (res) => {
						
				        if(res.data.code == 1){
							//隐藏加载框
							uni.hideLoading()
							//保存会话sessionId
							uni.showToast({ 
								title:"登陆成功！",
								duration:1500,
								position:'bottom',
							})
							setTimeout(function(){
								uni.redirectTo({
									url:"../index/index?jsd="+res.data.desc+'&login=1',
								})
							},1500)
						}else{
							uni.hideLoading()
							uni.showToast({
								title:"账号或密码错误！",
								duration:1500,
								position:'bottom',
								icon:'none'
							})
						}
				    }
				});
			}
		}
	}
</script>

<style>
	
	input{
		outline: none;
		height: 35px;
		padding: 2%;
	}
	button{
		margin-top: 100rpx;
		background: #33CCCC;
	}
</style>
