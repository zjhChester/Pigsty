<view class="uni-pagination data-v-9d7bb7c0"><view class="{{['uni-pagination__btn data-v-9d7bb7c0',currentIndex===1?'uni-pagination--disabled':'uni-pagination--enabled']}}" hover-class="{{currentIndex===1?'':'uni-pagination--hover'}}" hover-start-time="{{20}}" hover-stay-time="{{70}}" data-event-opts="{{[['tap',[['clickLeft',['$event']]]]]}}" bindtap="__e"><block wx:if="{{showIcon===true||showIcon==='true'}}"><uni-icons vue-id="1" color="#000" size="20" type="arrowleft" class="data-v-9d7bb7c0" bind:__l="__l"></uni-icons></block><block wx:else><text class="uni-pagination__child-btn data-v-9d7bb7c0">{{prevText}}</text></block></view><view class="uni-pagination__num data-v-9d7bb7c0"><view class="uni-pagination__num-current data-v-9d7bb7c0"><text class="uni-pagination__num-current-text data-v-9d7bb7c0" style="color:#007aff;">{{currentIndex}}</text><text class="uni-pagination__num-current-text data-v-9d7bb7c0">{{"/"+(maxPage||0)}}</text></view></view><view class="{{['uni-pagination__btn data-v-9d7bb7c0',currentIndex===maxPage?'uni-pagination--disabled':'uni-pagination--enabled']}}" hover-class="{{currentIndex===maxPage?'':'uni-pagination--hover'}}" hover-start-time="{{20}}" hover-stay-time="{{70}}" data-event-opts="{{[['tap',[['clickRight',['$event']]]]]}}" bindtap="__e"><block wx:if="{{showIcon===true||showIcon==='true'}}"><uni-icons vue-id="2" color="#000" size="20" type="arrowright" class="data-v-9d7bb7c0" bind:__l="__l"></uni-icons></block><block wx:else><text class="uni-pagination__child-btn data-v-9d7bb7c0">{{nextText}}</text></block></view></view>