<view class="uni-section data-v-0ac9e752" nvue><block wx:if="{{type}}"><view class="uni-section__head data-v-0ac9e752"><view class="{{['uni-section__head-tag data-v-0ac9e752',type]}}"></view></view></block><view class="uni-section__content data-v-0ac9e752"><text class="{{['uni-section__content-title data-v-0ac9e752',(!subTitle)?'distraction':'']}}">{{title}}</text><block wx:if="{{subTitle}}"><text class="uni-section__content-sub data-v-0ac9e752">{{subTitle}}</text></block></view><slot></slot></view>