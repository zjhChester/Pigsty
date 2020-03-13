<template>
	<!-- qqid 1110251339 -->
	<view>
		<view v-if="reminderCount!=0" class="noticeAboutMe" style="margin-top: 10rpx;text-align: center;">
			<text @click="clickAboutMeTag" style="padding-left:30rpx;padding-right:30rpx;border: 1px solid #F1F1F1;background-color: #F8F8F8;border-radius: 10rpx;padding: 10rpx;font-size: 20rpx;font-weight: 800;" space="nbsp">猪猪！这里有<text space="nbsp" style="color: red;">({{reminderCount}})</text>   条与你相关  ></text>
		</view>
		<view class="main_content">
			<view class="example-box" v-for="(msg,i) in msgArr" :key="i">
				<uni-card :is-shadow="true" :title="msg.nickName" mode="title" :thumbnail="'http://zjhwork.xyz:8080/images/'+msg.username+'.png'"
				 :extra="msg.username" note="true">
					<view>
						<view class="image-box" v-if="msg.imgUrl != null">
							<image style="" class="image" mode="aspectFill" @click="pressImg(msg.imgUrl)" :src="msg.imgUrl" />
						</view>
						<view class="content-box" style="margin-top: 40rpx;min-height: 100rpx;font-weight: 400;font-size: 30rpx;font-style: 微软雅黑;">
							<rich-text :nodes="msg.content" class="content-box-text"></rich-text>
						</view>
						<view class="">
							<audio :poster="'http://zjhwork.xyz:8080/images/'+msg.username+'.png'" style="text-align: left" :src="'https://tts.baidu.com/text2audio?tex='+msg.content+'&cuid=baike&lan=ZH&ctp=1&pdt=301&vol=9&rate=32&per=0&qq-pf-to=pcqq.c2c'"  name="文章" :author="msg.nickName"   controls></audio>
						</view> 
					</view> 
					<template slot="footer">
						<view class="">
							<text style="font-size: 20rpx;position: absolute;right: 10rpx;">{{msg.createTime}}</text>
						</view> 
						<view class="font-style">  
							<text style="font-size: 20rpx;color: #2C405A;font-weight: 800;" v-if="msg.clientName != null">来自于{{msg.clientName}}</text>
							<text style="font-size: 20rpx;color: #2C405A;font-weight: 800;" v-if="msg.clientName == null">来自于h5版/老版猪窝</text>
						</view>
						<view class="tag-view" style="margin: 30rpx auto;">
							<uni-tag style="width: 40%;" :inverted="msg.type=='记事'?true:false"  :text="msg.type" :type="msg.type=='记事'?'success':msg.type=='秀恩爱'?'error':msg.type=='心情'?'primary':msg.type=='装逼'?'warning':'default'" />
						</view>
						<view class="footer-box" style="border-top: 1px solid #F1F1F1;padding: 5rpx;">
									<view @click.stop="likeIt()"><text class="footer-box__item" style="color: red;"> ❥</text></view>
									<view @click.stop="commentIt(msg.id,msg)"><text class="footer-box__item">评论(<text style="color: red;">{{msg.commentsCount}}</text>)</text></view>
									<view ><text class="footer-box__item"> 暂留</text></view>
						</view>
					</template>
				</uni-card>
				
			</view>
		</view>
		<!-- 抽屉  -->
		<view class="drawer">
			<uni-drawer :visible="showMyInfo" mode="left" @close="closeDrawer('left')">
				<view class="" style="text-align: center;margin-top: 10%;">
					<image style="width: 150rpx;height: 150rpx;border-radius: 50%;border: 1px double #2C405A;" :src="'http://zjhwork.xyz:8080/images/'+user.username+'.png'"
					 mode="aspectFit"></image>
				</view>
				<view class="text-center">
					<uni-section :title="'昵称:'+user.nickName" type="line"></uni-section>
				</view>
				<view class="text-center" style="margin-top: 3%;">
					<uni-section :title="'账号:'+user.username" type="line"></uni-section>
				</view>
				<view class="weatherInfo" v-if="weather.code==1" style="color: #333333;padding: 2%;margin: 3% auto;">
					<view class="text-center" style="margin-top: 0%;">
						<uni-section title="天气状况" type="line"></uni-section>
					</view>
					<view class="location font-style text-center" style="">
						<text>目前猪猪在:{{location}}</text>
					</view>
					<view class="future font-style" style="width: 98%;margin: 0 auto;">
						<view class="tag-view">
							<uni-tag style="width: 80%;" :circle="true" text="天气预报这样说" type="warning"/>
						</view>
						<view class="">
							<text class="date">日期：{{weather.future.date}}</text>
						</view>
						<view class="">
							<text class="temperature">温度：{{weather.future.temperature}}</text>
						</view>
						<view class="">
							<text class="weather">天气：{{weather.future.weather}}</text>
						</view>
						<view class="">
							<text class="direct">风向：{{weather.future.direct}}</text>
						</view>
					</view>
					<view class="realtime font-style"style="border-top: 1px solid #555555;width: 98%;margin: 0 auto;">
						<view class="tag-view">
							<uni-tag style="width: 80%;" :circle="true" text="此时此刻是这样" type="success"/>
						</view>
						<view class="">
							<text space="nbsp">实时天气 ：{{weather.realtime.info}}</text>
						</view>
						<view class="">
							<text space="nbsp">实时温度 ：{{weather.realtime.temperature}}</text>
						</view>
						<view class="">
							<text space="nbsp">实时湿度 ：{{weather.realtime.humidity}}</text>
						</view>
						<view class="">
							<text space="nbsp">风力/风向：{{weather.realtime.power}}/{{weather.realtime.direct}}</text>
						</view>
						<view class="">
							<text space="nbsp">空气指数 ：{{weather.realtime.aqi}}</text>
						</view>
						
					</view>
				</view>
				<view class="text-center" style="position: absolute;left: 10rpx;bottom: 3rpx;">
					<button type="primary" size="mini" @tap="tapBtn('default')">重新登陆</button>
				</view>
			</uni-drawer>
			<uni-drawer :visible="showVersion" mode="right" @close="closeDrawer('right')">
				<view class="" style="text-align: center;margin-top: 30%;">
					<image style="width: 200rpx;height: 100rpx;border: 1px double #2C405A;" src="../../static/images/logo.png" mode="aspectFill"></image>
				</view>
				<view class="text-left" style="margin-top: 30%;border-top: #333333 1px solid;margin-right: 20rpx;">
					<text style="font-size: 20rpx;" space="nbsp">编译环境:基于uni-app</text>
				</view>
				<view class="text-left">
					<text style="font-size: 20rpx;" space="nbsp">版本编号:version 1.2.0</text>
				</view>
				<view class="text-left">
					<text style="font-size: 20rpx;" space="nbsp">编码时间:9hours</text>
				</view>
				<view class="text-left">
					<text style="font-size: 20rpx;" space="nbsp">发布时间:2020.03.12</text>
				</view>
				<view class="text-left">
					<text style="font-size: 20rpx;" space="nbsp">作者:zjhChester</text>
				</view>
				<view class="about-me" style="margin-top: 10rpx;border-top: #CCCCCC 1px solid;">
					<uni-list>
						<uni-list-item @click="toAboutMe" :badgeType="reminderCount==0?'success':'error'" class="last-list-item" :show-badge="true" title="与我相关" :badge-text="reminderCount+''" />
					</uni-list>
				</view>
			</uni-drawer>
		</view>
		<!-- 分页 -->
		<view class="pager" v-if="totalPage != ''" style="margin-bottom: 2%;text-align: center;">
			<uni-pagination title="页码" :total="totalPage*5" :pageSize='5' currPage="1" @change="changePage"></uni-pagination>
			<text style="font-size: 20rpx;" space="nbsp">数据总量{{totalPage*5}}条，每页数据5条</text>
			<view class="">
				<text style="font-size: 20rpx;" space="nbsp">Copy right zjhChester All rights reverse</text>
			</view>
			<view class="">
				<text style="font-size: 20rpx;" space="nbsp">http://zjhwork.xyz提供数据支持服务</text>
			</view>
		</view>
		<!-- 浮动按钮 -->
		<view class="add">
			<template>
				<view>
					<uni-fab :pattern="add_pattern" :content="add_content" :horizontal="add_horizontal" :vertical="add_vertical"
					 :direction="add_direction" @trigger="add_trigger"></uni-fab>
				</view>
			</template>
		</view>
		<!-- 模态框 -->
		<view class="model">
			<chunLei-modal  v-model="model_value" :mData="model_data" :type="model_type" @onConfirm="onConfirm" @cancel="cancel"
			 :navHeight="0">

			</chunLei-modal>
		</view>
	</view>
</template>

<script>
	import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue';
	import uniSection from '@/components/uni-section/uni-section.vue';
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import uniCard from '@/components/uni-card/uni-card.vue';
	import uniTag from '@/components/uni-tag/uni-tag.vue';
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue';
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniCard,
			uniTag,
			uniFab,
			uniPagination,
			uniSection,
			chunLeiModal,
			uniList,
			uniListItem
		},
		data() {
			return {
				reminderCount:0,
				/*天气*/
				weather: {
					code: 0,
					realtime: {
						"temperature": "",
						"humidity": "",
						"info": "",
						"wid": "",
						"direct": "",
						"power": "",
						"aqi": ""
					},
					future: {
						"date": "",
						"temperature": "",
						"weather": "",
						"wid": {
							"day": "",
							"night": ""
						},
						"direct": ""
					}
				},
				location: '',
				/*模态框*/
				model_value: false,
				model_type: 'default',
				model_data: {},
				model_defaultData: {
					title: '注销',
					content: '是否退出?',
					cancelText: '取消',
					confirmColor: '#3CC51F'
				},
				/*抽屉*/
				showMyInfo: false,
				showVersion: false,
				/*悬浮按钮模块*/
				add_title: 'uni-fab',
				add_directionStr: '垂直',
				add_horizontal: 'left',
				add_vertical: 'bottom',
				add_direction: 'vertical',
				add_pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'
				},
				add_content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/images/newMsg.png',
						text: '写文章',
						active: true
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/images/user.png',
						text: '我的',
						active: true
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/images/version.png',
						text: '版本信息',
						active: true
					}
				],
				imageUrlsArr: [],
				msgArr: [],
				user: {
					username: "zjh",
					nickName: ''
				},
				JSESSIONID: '',
				//分页组件
				totalPage: ''
			}
		},
		onLoad(opt) {
			//#ifdef MP-WEIXIN || MP-QQ
			if (opt.jsd != undefined) {
				this.setJSESSIONID(opt.jsd)
				opt.jsd = '';
			}
			//#endif
			const that = this;
			setTimeout(function() {
				that.userStatus()
			}, 200)
			//判断是从登录页过来的
			//加载天气
			if(opt.login != undefined)
			this.getLocation()
			
		},
		onPullDownRefresh() {

			setTimeout(() => {
				this.userStatus();
				//关闭下拉刷新 
				
			}, 500)

		},
		methods: {
			toAboutMe(){
				uni.navigateTo({ 
					url: '../aboutMe/aboutMe?jsd='+this.JSESSIONID+'&count='+this.reminderCount
				});
			},
			loadingReminderCount(){
				const that = this;
				uni.request({
					url: 'http://zjhwork.xyz:8080/getReminderCount',
					method: 'GET',
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: res => {
						that.reminderCount = res.data;
					}
				});
			},
			commentIt(msgId){
				const that = this;
				uni.navigateTo({
					url: '../msgDetail/msgDetail?jsd='+that.JSESSIONID+'&msgId='+msgId
				});
			},
			/*模态框*/
			cancel() {
				//点击取消函数
			},
			onConfirm(e) {
				const that = this;
				switch (this.model_type) {
					case 'default':
						that.userLogout()
						break;
				}
			},
			tapBtn(type) {

				this.model_type = type 
				this.model_value = !this.model_value
				switch (this.model_type) {
					case 'default':
						this.model_data = this.model_defaultData
						break;
				}
			},
			/*用户退出*/
			userLogout() {
				const that = this;
				uni.showLoading({
					title: "正在注销~"
				})
				uni.request({
					url: "http://zjhwork.xyz:8080/userLogOut",
					success: () => {
						//清空JSESSIONID号
						that.JSESSIONID = '';
						uni.hideLoading()
						that.userStatus()
					}
				})
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showMyInfo = false
				} else {
					this.showVersion = false
				}
			},
			clickAboutMeTag(){
				this.showVersion = true;
			},
			add_trigger(e) {
				/*监听浮动按钮*/
				if (e.index == 1) {
					this.showMyInfo = true;
				} else if (e.index == 2) {
					this.showVersion = true;
				} else {
					uni.navigateTo({
						url: '../details/details?jsd=' + this.JSESSIONID
					})
				}
			},
			//加载页码
			getTotallyPage() {
				const that = this;
				uni.request({
					url: "http://zjhwork.xyz:8080/msgCount",
					//#ifdef MP-WEIXIN || MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					
					success: (res) => {
						that.totalPage = res.data;
					}
				})
			},
			changePage(e) {
				this.loadingMsg(e.current)
			},
			setJSESSIONID(jsd) {
				this.JSESSIONID = jsd;
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
			userStatus() {
				uni.showLoading({
					title: "正在加载",
				})
				const that = this;
				uni.request({
					url: "http://zjhwork.xyz:8080/status",
					//#ifdef MP-WEIXIN
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					//#ifdef MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: (res) => {
						if (res.data.code == 1) {
							that.user.username = res.data.result[0].username;
							
							that.loadingReminderCount()
							that.loadingMsg(1)
						} else {
							uni.hideLoading()
							that.toLogin()
						}
						uni.stopPullDownRefresh();
					}
				})
			},
			getLocation() {
				
				const that = this;
				//初始化定位和天气信息
				that.weather.code = 0;
				uni.getLocation({
					type: 'wgs84',
					success: (res) => {
						uni.request({
							url: 'http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=' + res.latitude + ',' + res.longitude +
								'&output=json&pois=1&ak=lwLh9Z2DLncf1uqymwtQTuAIYWwISgP1',
							success: (weather) => {
								that.loadingWeather(JSON.parse(weather.data.substr(29, weather.data.length - 30)).result.addressComponent
									.city)
								that.location = JSON.parse(weather.data.substr(29, weather.data.length - 30)).result.formatted_address;
							}
						})
					}
				})
			},
			loadingWeather(city) {
				const that = this;
				uni.request({
					url: "http://apis.juhe.cn/simpleWeather/query?city=" + city.substr(0, city.length - 1) +
						"&key=93115b9570227d60a64ddabb4ad2123f",
					success: (res) => {
						
						if(res.data.result == null){
							uni.showToast({
								title:'今日天气api已经超过次数啦',
								icon:'none',
								duration:1000,
								position:'bottom'
							})
						}else{
							that.weather.code = 1;
							//实况天气
							that.weather.realtime = res.data.result.realtime;
							// //今日天气
							 that.weather.future = res.data.result.future[0];
						}
						
					}

				})


			},
			loadingMsg(currPage) {
				
				//加载页码
				this.getTotallyPage();
				const that = this;
				that.imageUrlsArr = [];
				//获取第一页信息
				uni.request({
					url: 'http://zjhwork.xyz:8080/loadingMsg?currPage=' + currPage,
					method: 'Get',
					dataType: 'json',
					//#ifdef MP-WEIXIN
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					//#ifdef MP-QQ
					header: {
						"Cookie": "JSESSIONID=" + that.JSESSIONID
					},
					//#endif
					success: (res) => {   
						for (var i = 0; i < res.data.result.length; i++) {
							//本地小表情
							res.data.result[i].content = res.data.result[i].content.replace(new RegExp('images/', 'g'),
								'http://zjhwork.xyz:8080/images/')
							//服务器图片
							if (res.data.result[i].imgUrl != undefined) {
								that.imageUrlsArr.push("http://zjhwork.xyz:8080/" + res.data.result[i].imgUrl)
								res.data.result[i].imgUrl = res.data.result[i].imgUrl.replace(new RegExp('/getImgById', 'g'),
									'http://zjhwork.xyz:8080/getImgById')
							} else {
								that.imageUrlsArr.push("http://zjhwork.xyz:8080/images/noPng.png");
							}
						}
						if (res.data.code == 1) {
							that.msgArr = res.data.result;
						} else {
							uni.showToast({
								title: '您还尚未登录，请登录',
								duration: 2000,
								position: 'bottom',
								icon: 'none'
							})
						}
						uni.hideLoading()
					}
				})
				//加载个人信息
				uni.request({
					url: 'http://zjhwork.xyz:8080/findNickNameByUsername?username=' + that.user.username,
					method: 'Get',
					header: {
						//#ifdef MP-WEIXIN
						"Cookie": "JSESSIONID=" + that.JSESSIONID,
						//#endif
						//#ifdef MP-QQ
						"Cookie": "JSESSIONID=" + that.JSESSIONID,
						//#endif
						//发送表单数据   否则默认请求是json数据
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					dataType: 'json',
					success: function(res) {
						that.user.nickName = res.data.result[0].username;
					}
				});

			},
			toLogin() {
				uni.showToast({
					title: "还未登陆哦！请先登录~",
					duration: 2000,
					icon: 'none'
				})
				//重定向到登陆页面
				setTimeout(function() {
					uni.redirectTo({
						url: "../login/login"
					})
				}, 1500)
			}
		}
	}
</script>

<style>
	.tag-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		margin: 10rpx 15rpx;
		justify-content: center;
	}

	.text-center {
		text-align: center;
		margin: 2% auto;
	}

	.text-left {
		margin-left: 30rpx;
	}

	.font-style {
		font-size: 22rpx;
		font-style: 微软雅黑;
	}
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
	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;
	
	}
	
	.footer-box__item {
		align-items: center;
		padding: 10rpx 0;
		font-size: 30rpx;
		color: #666;
	}
	
</style>
