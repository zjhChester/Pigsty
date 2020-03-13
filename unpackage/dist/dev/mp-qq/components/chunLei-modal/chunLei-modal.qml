<view data-event-opts="{{[['tap',[['tapMask',['$event']]]],['touchmove',[['',['$event']]]]]}}" class="{{['mask',!value?'':'mask-show']}}" style="{{'background-color:'+(value?'rgba(0,0,0,'+opacity+')':'rgba(0,0,0,0)')+';'}}" bindtap="__e" catchtouchmove="__e"><block wx:if="{{type=='default'}}"><block><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="default-view" catchtap="__e"><view class="title">{{mData.title}}</view><view class="content word-break">{{mData.content}}</view><view class="btn"><view data-event-opts="{{[['tap',[['tapCancel',['$event']]]]]}}" class="cancel" style="{{'color:'+(mData.cancelColor?mData.cancelColor:'')+';'}}" bindtap="__e">{{mData.cancelText?mData.cancelText:'取消'}}</view><view data-event-opts="{{[['tap',[['tapConfirm',['$event']]]]]}}" class="confirm" style="{{'color:'+(mData.confirmColor?mData.confirmColor:'')+';'}}" bindtap="__e">{{mData.confirmText?mData.confirmText:'确认'}}</view></view></view></block></block><block wx:if="{{type=='select'}}"><block><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="select-view" catchtap="__e"><block wx:for="{{mData}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['tapConfirm',['$0'],[[['mData','',index]]]]]]]}}" class="select-box" bindtap="__e"><view><block wx:if="{{item.icon}}"><image class="image" src="{{item.icon}}"></image></block>{{item.title}}</view><view class="select-content">{{item.content}}</view></view></block></view></block></block><block wx:if="{{type=='multiSelect'}}"><block><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="select-view" catchtap="__e"><checkbox-group data-event-opts="{{[['change',[['checkboxChange',['$event']]]]]}}" bindchange="__e"><block wx:for="{{mData}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view class="select-box"><view><block wx:if="{{item.icon}}"><image class="image" src="{{item.icon}}"></image></block>{{item.title}}</view><view class="select-content"><checkbox value="{{item.title}}" color="{{item.radioColor?item.radioColor:'#001AFF'}}" checked="{{item.flag}}"></checkbox></view></view></block></checkbox-group></view></block></block><block wx:if="{{type=='advert'}}"><block><view class="advert-view"><image class="image confirm" style="{{'width:'+(mData.width?mData.width:'500rpx')+';'+('height:'+(mData.height?mData.height:'700rpx')+';')}}" src="{{mData.src}}" data-event-opts="{{[['tap',[['tapConfirm',['$event']]]]]}}" catchtap="__e"></image><image class="image cancel" src="../../static/chunLei-modal/close.png" data-event-opts="{{[['tap',[['tapCancel',['$event']]]]]}}" catchtap="__e"></image></view></block></block><block wx:if="{{type=='notify'}}"><block><view class="notify-view"><block wx:if="{{mData.title}}"><view class="title">{{mData.title}}</view></block><block wx:if="{{mData.src}}"><image class="image" src="{{mData.src}}"></image></block><view class="content word-break">{{mData.content}}</view><view data-event-opts="{{[['tap',[['tapCancel',['$event']]]]]}}" class="cancel" style="{{'color:'+(mData.cancelColor?mData.cancelColor:'')+';'}}" bindtap="__e">{{mData.cancelText?mData.cancelText:'我知道了'}}</view></view></block></block><block wx:if="{{type=='share'}}"><block><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="share-view" catchtap="__e"><block wx:for="{{mData}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['tapConfirm',['$0'],[[['mData','',index]]]]]]]}}" class="share-box" bindtap="__e"><block wx:if="{{item.icon}}"><image class="image" src="{{item.icon}}"></image></block>{{item.title+''}}</view></block></view></block></block><block wx:if="{{type=='input'&&value}}"><block><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="input-view" catchtap="__e"><view class="title">{{mData.title}}</view><view class="content"><block wx:for="{{mData.content}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view class="input-box"><view class="view">{{item.title}}</view><block wx:if="{{item.type=='number'}}"><block><input class="input" type="number" password="{{item.type=='password'}}" placeholder="{{item.placeholder}}" data-event-opts="{{[['input',[['__set_model',['$0','content','$event',[]],[[['mData.content','',index]]]]]]]}}" value="{{item.content}}" bindinput="__e"/></block></block><block wx:if="{{item.type=='password'}}"><block><input class="input" password="{{item.type=='password'}}" placeholder="{{item.placeholder}}" data-event-opts="{{[['input',[['__set_model',['$0','content','$event',[]],[[['mData.content','',index]]]]]]]}}" value="{{item.content}}" bindinput="__e"/></block></block><block wx:if="{{item.type=='digit'}}"><block><input class="input" type="digit" password="{{item.type=='password'}}" placeholder="{{item.placeholder}}" data-event-opts="{{[['input',[['__set_model',['$0','content','$event',[]],[[['mData.content','',index]]]]]]]}}" value="{{item.content}}" bindinput="__e"/></block></block><block wx:if="{{item.type=='idcard'}}"><block><input class="input" type="idcard" password="{{item.type=='password'}}" placeholder="{{item.placeholder}}" data-event-opts="{{[['input',[['__set_model',['$0','content','$event',[]],[[['mData.content','',index]]]]]]]}}" value="{{item.content}}" bindinput="__e"/></block></block><block wx:if="{{!item.type||item.type=='text'}}"><block><input class="input" type="text" password="{{item.type=='password'}}" placeholder="{{item.placeholder}}" data-event-opts="{{[['input',[['__set_model',['$0','content','$event',[]],[[['mData.content','',index]]]]]]]}}" value="{{item.content}}" bindinput="__e"/></block></block></view></block></view><view class="btn"><view data-event-opts="{{[['tap',[['tapCancel',['$event']]]]]}}" class="cancel" style="{{'color:'+(mData.cancelColor?mData.cancelColor:'')+';'}}" bindtap="__e">{{mData.cancelText?mData.cancelText:'取消'}}</view><view data-event-opts="{{[['tap',[['inputConfirm',['$event']]]]]}}" class="confirm" style="{{'color:'+(mData.confirmColor?mData.confirmColor:'')+';'}}" bindtap="__e">{{mData.confirmText?mData.confirmText:'确认'}}</view></view></view></block></block><block wx:if="{{type=='custom'}}"><block><slot></slot></block></block></view>