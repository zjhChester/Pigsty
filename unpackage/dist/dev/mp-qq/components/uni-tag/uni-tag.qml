<block wx:if="{{text}}"><view data-event-opts="{{[['tap',[['onClick']]]]}}" class="{{['uni-tag data-v-7039df3c','uni-tag--'+type,disabled===true||disabled==='true'?'uni-tag--disabled':'',inverted===true||inverted==='true'?type+'-uni-tag--inverted':'',circle===true||circle==='true'?'uni-tag--circle':'',mark===true||mark==='true'?'uni-tag--mark':'','uni-tag--'+size]}}" bindtap="__e"><text class="{{['data-v-7039df3c',type==='default'?'uni-tag--default':'uni-tag-text',inverted===true||inverted==='true'?'uni-tag-text--'+type:'',size==='small'?'uni-tag-text--small':'']}}">{{text}}</text></view></block>