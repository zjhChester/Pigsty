<view><uni-section vue-id="1" title="账号" type="line" bind:__l="__l"></uni-section><input type="text" value="" placeholder="此处输入账号信息" data-event-opts="{{[['input',[['usernameSetValue',['$event']]]]]}}" bindinput="__e"/><uni-section vue-id="2" title="密码" type="line" bind:__l="__l"></uni-section><input type="password" value="" placeholder="此处输入密码信息" data-event-opts="{{[['input',[['passwordSetValue',['$event']]]]]}}" bindinput="__e"/><button type="primary" data-event-opts="{{[['tap',[['checkUserInfo',['$event']]]]]}}" bindtap="__e">登陆</button></view>