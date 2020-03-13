<view><block wx:if="{{reminderCount!=0}}"><view class="noticeAboutMe" style="margin-top:10rpx;text-align:center;"><text style="padding-left:30rpx;padding-right:30rpx;border:1px solid #F1F1F1;background-color:#F8F8F8;border-radius:10rpx;padding:10rpx;font-size:20rpx;font-weight:800;" space="nbsp" data-event-opts="{{[['tap',[['clickAboutMeTag',['$event']]]]]}}" bindtap="__e">猪猪！这里有<text style="color:red;" space="nbsp">{{"("+reminderCount+")"}}</text>条与你相关  ></text></view></block><view class="main_content"><block wx:for="{{msgArr}}" wx:for-item="msg" wx:for-index="i" wx:key="i"><view class="example-box"><uni-card vue-id="{{'1-'+i}}" is-shadow="{{true}}" title="{{msg.nickName}}" mode="title" thumbnail="{{'http://zjhwork.xyz:8080/images/'+msg.username+'.png'}}" extra="{{msg.username}}" note="true" bind:__l="__l" vue-slots="{{['default','footer']}}"><view><block wx:if="{{msg.imgUrl!=null}}"><view class="image-box"><image class="image" mode="aspectFill" src="{{msg.imgUrl}}" data-event-opts="{{[['tap',[['pressImg',['$0'],[[['msgArr','',i,'imgUrl']]]]]]]}}" bindtap="__e"></image></view></block><view class="content-box" style="margin-top:40rpx;min-height:100rpx;font-weight:400;font-size:30rpx;font-style:微软雅黑;"><rich-text class="content-box-text" nodes="{{msg.content}}"></rich-text></view><view><audio style="text-align:left;" poster="{{'http://zjhwork.xyz:8080/images/'+msg.username+'.png'}}" src="{{'https://tts.baidu.com/text2audio?tex='+msg.content+'&cuid=baike&lan=ZH&ctp=1&pdt=301&vol=9&rate=32&per=0&qq-pf-to=pcqq.c2c'}}" name="文章" author="{{msg.nickName}}" controls></audio></view></view><view slot="footer"><view><text style="font-size:20rpx;position:absolute;right:10rpx;">{{msg.createTime}}</text></view><view class="font-style"><block wx:if="{{msg.clientName!=null}}"><text style="font-size:20rpx;color:#2C405A;font-weight:800;">{{"来自于"+msg.clientName}}</text></block><block wx:if="{{msg.clientName==null}}"><text style="font-size:20rpx;color:#2C405A;font-weight:800;">来自于h5版/老版猪窝</text></block></view><view class="tag-view" style="margin:30rpx auto;"><uni-tag style="width:40%;" vue-id="{{('2-'+i)+','+('1-'+i)}}" inverted="{{msg.type=='记事'?true:false}}" text="{{msg.type}}" type="{{msg.type=='记事'?'success':msg.type=='秀恩爱'?'error':msg.type=='心情'?'primary':msg.type=='装逼'?'warning':'default'}}" bind:__l="__l"></uni-tag></view><view class="footer-box" style="border-top:1px solid #F1F1F1;padding:5rpx;"><view data-event-opts="{{[['tap',[['likeIt']]]]}}" catchtap="__e"><text class="footer-box__item" style="color:red;">❥</text></view><view data-event-opts="{{[['tap',[['commentIt',['$0','$1'],[[['msgArr','',i,'id']],[['msgArr','',i]]]]]]]}}" catchtap="__e"><text class="footer-box__item">评论(<text style="color:red;">{{msg.commentsCount}}</text>)</text></view><view><text class="footer-box__item">暂留</text></view></view></view></uni-card></view></block></view><view class="drawer"><uni-drawer vue-id="3" visible="{{showMyInfo}}" mode="left" data-event-opts="{{[['^close',[['closeDrawer',['left']]]]]}}" bind:close="__e" bind:__l="__l" vue-slots="{{['default']}}"><view style="text-align:center;margin-top:10%;"><image style="width:150rpx;height:150rpx;border-radius:50%;border:1px double #2C405A;" src="{{'http://zjhwork.xyz:8080/images/'+user.username+'.png'}}" mode="aspectFit"></image></view><view class="text-center"><uni-section vue-id="{{('4')+','+('3')}}" title="{{'昵称:'+user.nickName}}" type="line" bind:__l="__l"></uni-section></view><view class="text-center" style="margin-top:3%;"><uni-section vue-id="{{('5')+','+('3')}}" title="{{'账号:'+user.username}}" type="line" bind:__l="__l"></uni-section></view><block wx:if="{{weather.code==1}}"><view class="weatherInfo" style="color:#333333;padding:2%;margin:3% auto;"><view class="text-center" style="margin-top:0%;"><uni-section vue-id="{{('6')+','+('3')}}" title="天气状况" type="line" bind:__l="__l"></uni-section></view><view class="location font-style text-center"><text>{{"目前猪猪在:"+location}}</text></view><view class="future font-style" style="width:98%;margin:0 auto;"><view class="tag-view"><uni-tag style="width:80%;" vue-id="{{('7')+','+('3')}}" circle="{{true}}" text="天气预报这样说" type="warning" bind:__l="__l"></uni-tag></view><view><text class="date">{{"日期："+weather.future.date}}</text></view><view><text class="temperature">{{"温度："+weather.future.temperature}}</text></view><view><text class="weather">{{"天气："+weather.future.weather}}</text></view><view><text class="direct">{{"风向："+weather.future.direct}}</text></view></view><view class="realtime font-style" style="border-top:1px solid #555555;width:98%;margin:0 auto;"><view class="tag-view"><uni-tag style="width:80%;" vue-id="{{('8')+','+('3')}}" circle="{{true}}" text="此时此刻是这样" type="success" bind:__l="__l"></uni-tag></view><view><text space="nbsp">{{"实时天气 ："+weather.realtime.info}}</text></view><view><text space="nbsp">{{"实时温度 ："+weather.realtime.temperature}}</text></view><view><text space="nbsp">{{"实时湿度 ："+weather.realtime.humidity}}</text></view><view><text space="nbsp">{{"风力/风向："+weather.realtime.power+"/"+weather.realtime.direct}}</text></view><view><text space="nbsp">{{"空气指数 ："+weather.realtime.aqi}}</text></view></view></view></block><view class="text-center" style="position:absolute;left:10rpx;bottom:3rpx;"><button type="primary" size="mini" data-event-opts="{{[['tap',[['tapBtn',['default']]]]]}}" bindtap="__e">重新登陆</button></view></uni-drawer><uni-drawer vue-id="9" visible="{{showVersion}}" mode="right" data-event-opts="{{[['^close',[['closeDrawer',['right']]]]]}}" bind:close="__e" bind:__l="__l" vue-slots="{{['default']}}"><view style="text-align:center;margin-top:30%;"><image style="width:200rpx;height:100rpx;border:1px double #2C405A;" src="../../static/images/logo.png" mode="aspectFill"></image></view><view class="text-left" style="margin-top:30%;border-top:#333333 1px solid;margin-right:20rpx;"><text style="font-size:20rpx;" space="nbsp">编译环境:基于uni-app</text></view><view class="text-left"><text style="font-size:20rpx;" space="nbsp">版本编号:version 1.2.0</text></view><view class="text-left"><text style="font-size:20rpx;" space="nbsp">编码时间:9hours</text></view><view class="text-left"><text style="font-size:20rpx;" space="nbsp">发布时间:2020.03.12</text></view><view class="text-left"><text style="font-size:20rpx;" space="nbsp">作者:zjhChester</text></view><view class="about-me" style="margin-top:10rpx;border-top:#CCCCCC 1px solid;"><uni-list vue-id="{{('10')+','+('9')}}" bind:__l="__l" vue-slots="{{['default']}}"><uni-list-item class="last-list-item" vue-id="{{('11')+','+('10')}}" badgeType="{{reminderCount==0?'success':'error'}}" show-badge="{{true}}" title="与我相关" badge-text="{{reminderCount+''}}" data-event-opts="{{[['^click',[['toAboutMe']]]]}}" bind:click="__e" bind:__l="__l"></uni-list-item></uni-list></view></uni-drawer></view><block wx:if="{{totalPage!=''}}"><view class="pager" style="margin-bottom:2%;text-align:center;"><uni-pagination vue-id="12" title="页码" total="{{totalPage*5}}" pageSize="{{5}}" currPage="1" data-event-opts="{{[['^change',[['changePage']]]]}}" bind:change="__e" bind:__l="__l"></uni-pagination><text style="font-size:20rpx;" space="nbsp">{{"数据总量"+totalPage*5+"条，每页数据5条"}}</text><view><text style="font-size:20rpx;" space="nbsp">Copy right zjhChester All rights reverse</text></view><view><text style="font-size:20rpx;" space="nbsp">http://zjhwork.xyz提供数据支持服务</text></view></view></block><view class="add"><view><uni-fab vue-id="13" pattern="{{add_pattern}}" content="{{add_content}}" horizontal="{{add_horizontal}}" vertical="{{add_vertical}}" direction="{{add_direction}}" data-event-opts="{{[['^trigger',[['add_trigger']]]]}}" bind:trigger="__e" bind:__l="__l"></uni-fab></view></view><view class="model"><chun-lei-modal vue-id="14" mData="{{model_data}}" type="{{model_type}}" navHeight="{{0}}" value="{{model_value}}" data-event-opts="{{[['^onConfirm',[['onConfirm']]],['^cancel',[['cancel']]],['^input',[['__set_model',['','model_value','$event',[]]]]]]}}" bind:onConfirm="__e" bind:cancel="__e" bind:input="__e" bind:__l="__l"></chun-lei-modal></view></view>