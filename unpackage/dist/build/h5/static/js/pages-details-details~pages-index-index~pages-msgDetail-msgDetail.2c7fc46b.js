(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details~pages-index-index~pages-msgDetail-msgDetail"],{1060:function(t,e,i){"use strict";i.r(e);var n=i("4818"),a=i("8cff");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c81f");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"4c3af866",null,!1,n["a"],c);e["default"]=s.exports},"3e8a":function(t,e,i){var n=i("6d67");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("dd36348c",n,!0,{sourceMap:!1,shadowMode:!1})},4022:function(t,e,i){"use strict";i.r(e);var n=i("5bb3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},4818:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},"5bb3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6762"),i("2fdb"),i("c5f6");var n={props:{type:{type:String,default:"default"},value:{type:Boolean,default:!1},maskEnable:{type:Boolean,default:!0},mData:{type:[Object,Array],default:function(){}},tabbarHeight:{type:Number,default:null},navHeight:{type:Number,default:null},opacity:{type:Number,default:.6}},data:function(){return{}},mounted:function(){},methods:{checkboxChange:function(t){for(var e=this.mData,i=t.detail.value,n=0,a=e.length;n<a;++n){var o=e[n];i.includes(o.title)?this.$set(o,"flag",!0):this.$set(o,"flag",!1)}},inputConfirm:function(){this.$emit("onConfirm",this.mData.content),this.$emit("input",!1)},tapCancel:function(){this.$emit("cancel"),this.$emit("input",!1)},tapConfirm:function(t){this.$emit("onConfirm",t),this.$emit("input",!1)},tapMask:function(){this.maskEnable&&("multiSelect"==this.type?this.$emit("onConfirm",this.mData):this.$emit("cancel",this.mData),this.$emit("input",!1))}},watch:{value:{immediate:!0,handler:function(t,e){}}}};e.default=n},"5db5":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-09d5f81d]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;-webkit-transition:background .3s linear;transition:background .3s linear;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;opacity:0;visibility:hidden;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.mask.mask-show[data-v-09d5f81d]{visibility:visible;opacity:1}.hover[data-v-09d5f81d]{background:#f2f2f2}.default-view[data-v-09d5f81d]{width:%?600?%;font-weight:400;font-size:18px;background-color:#fff;border-radius:%?6?%}.default-view .title[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.default-view .content[data-v-09d5f81d]{padding:%?40?% %?48?%;min-height:40px;font-size:15px;line-height:1.4;color:#999;text-align:center}.default-view .btn[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-top:1px solid #ccc}.default-view .btn .cancel[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-right:1px solid #ccc}.default-view .btn .confirm[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#007aff}.select-view[data-v-09d5f81d]{width:%?600?%;background-color:#fff;border-radius:%?6?%}.select-view .select-box[data-v-09d5f81d]{height:%?100?%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:.5px solid #ddd}.select-view .select-box .select-content[data-v-09d5f81d]{color:#aaa;font-size:12px}.select-view .image[data-v-09d5f81d]{display:inline-block;vertical-align:middle;width:%?40?%;height:%?40?%;margin-right:%?20?%}.select-view .select-box[data-v-09d5f81d]:last-child{border:none}.notify-view[data-v-09d5f81d]{width:%?600?%;background-color:#fff;border-radius:%?6?%}.notify-view .image[data-v-09d5f81d]{width:%?600?%;height:%?150?%}.notify-view .title[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notify-view .content[data-v-09d5f81d]{padding:%?40?% %?48?%;min-height:40px;font-size:15px;line-height:1.4;color:#999;text-align:center}.notify-view .cancel[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px solid #e7e7e7}.advert-view[data-v-09d5f81d]{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.advert-view .confirm[data-v-09d5f81d]{width:%?500?%;height:%?700?%;border-radius:%?6?%}.advert-view .cancel[data-v-09d5f81d]{margin-top:%?150?%;width:%?60?%;height:%?60?%}.share-view[data-v-09d5f81d]{width:%?600?%;background-color:#fff;border-radius:%?6?%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:18px}.share-view .share-box[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:33.33%;padding:%?40?% 0}.share-view .image[data-v-09d5f81d]{width:%?80?%;height:%?80?%;margin-bottom:%?20?%}.input-view[data-v-09d5f81d]{width:%?600?%;font-weight:400;font-size:18px;background-color:#fff;border-radius:%?6?%}.input-view .title[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #ccc}.input-view .content[data-v-09d5f81d]{padding:%?40?% %?48?%;min-height:40px;font-size:18px;text-align:left}.input-view .input-box[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%}.input-view .input-box .view[data-v-09d5f81d]{margin-right:%?20?%;min-width:%?150?%}.input-view .input-box .input[data-v-09d5f81d]{font-size:18px}.input-view .btn[data-v-09d5f81d]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-top:1px solid #ccc}.input-view .btn .cancel[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-right:1px solid #ccc}.input-view .btn .confirm[data-v-09d5f81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#007aff}.word-break[data-v-09d5f81d]{word-wrap:break-word;word-break:break-all;white-space:pre-wrap}',""])},"6a2f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"6d67":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-section[data-v-4c3af866]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-4c3af866]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-4c3af866]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-4c3af866]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-4c3af866]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-4c3af866]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-4c3af866]{font-size:%?28?%;color:#333}.distraction[data-v-4c3af866]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-4c3af866]{font-size:%?24?%;color:#999}',""])},"8cff":function(t,e,i){"use strict";i.r(e);var n=i("6a2f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},b1d2:function(t,e,i){"use strict";i.r(e);var n=i("e7e5"),a=i("4022");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("cb3a");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"09d5f81d",null,!1,n["a"],c);e["default"]=s.exports},c81f:function(t,e,i){"use strict";var n=i("3e8a"),a=i.n(n);a.a},cb3a:function(t,e,i){"use strict";var n=i("d6dd"),a=i.n(n);a.a},d6dd:function(t,e,i){var n=i("5db5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5ce1f5be",n,!0,{sourceMap:!1,shadowMode:!1})},e7e5:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mask",class:t.value?"mask-show":"",style:{backgroundColor:t.value?"rgba(0,0,0,"+t.opacity+")":"rgba(0,0,0,0)"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapMask.apply(void 0,arguments)}}},["default"==t.type?[i("v-uni-view",{staticClass:"default-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.mData.title))]),i("v-uni-view",{staticClass:"content word-break"},[t._v(t._s(t.mData.content))]),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"cancel",style:{color:t.mData.cancelColor?t.mData.cancelColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapCancel.apply(void 0,arguments)}}},[t._v(t._s(t.mData.cancelText?t.mData.cancelText:"取消"))]),i("v-uni-view",{staticClass:"confirm",style:{color:t.mData.confirmColor?t.mData.confirmColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapConfirm.apply(void 0,arguments)}}},[t._v(t._s(t.mData.confirmText?t.mData.confirmText:"确认"))])],1)],1)]:t._e(),"select"==t.type?[i("v-uni-view",{staticClass:"select-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},t._l(t.mData,function(e,n){return i("v-uni-view",{key:n,staticClass:"select-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tapConfirm(e)}}},[i("v-uni-view",[e.icon?i("v-uni-image",{staticClass:"image",attrs:{src:e.icon}}):t._e(),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"select-content"},[t._v(t._s(e.content))])],1)}),1)]:t._e(),"multiSelect"==t.type?[i("v-uni-view",{staticClass:"select-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.mData,function(e,n){return i("v-uni-view",{key:n,staticClass:"select-box"},[i("v-uni-view",[e.icon?i("v-uni-image",{staticClass:"image",attrs:{src:e.icon}}):t._e(),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"select-content"},[i("v-uni-checkbox",{attrs:{value:e.title,color:e.radioColor?e.radioColor:"#001AFF",checked:e.flag}})],1)],1)}),1)],1)]:t._e(),"advert"==t.type?[i("v-uni-view",{staticClass:"advert-view"},[i("v-uni-image",{staticClass:"image confirm",style:{width:t.mData.width?t.mData.width:"500rpx",height:t.mData.height?t.mData.height:"700rpx"},attrs:{src:t.mData.src},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tapConfirm.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"image cancel",attrs:{src:"../../static/chunLei-modal/close.png"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tapCancel.apply(void 0,arguments)}}})],1)]:t._e(),"notify"==t.type?[i("v-uni-view",{staticClass:"notify-view"},[t.mData.title?i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.mData.title))]):t._e(),t.mData.src?i("v-uni-image",{staticClass:"image",attrs:{src:t.mData.src}}):t._e(),i("v-uni-view",{staticClass:"content word-break"},[t._v(t._s(t.mData.content))]),i("v-uni-view",{staticClass:"cancel",style:{color:t.mData.cancelColor?t.mData.cancelColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapCancel.apply(void 0,arguments)}}},[t._v(t._s(t.mData.cancelText?t.mData.cancelText:"我知道了"))])],1)]:t._e(),"share"==t.type?[i("v-uni-view",{staticClass:"share-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},t._l(t.mData,function(e,n){return i("v-uni-view",{key:n,staticClass:"share-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tapConfirm(e)}}},[e.icon?i("v-uni-image",{staticClass:"image",attrs:{src:e.icon}}):t._e(),t._v(t._s(e.title))],1)}),1)]:t._e(),"input"==t.type&&t.value?[i("v-uni-view",{staticClass:"input-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.mData.title))]),i("v-uni-view",{staticClass:"content"},t._l(t.mData.content,function(e,n){return i("v-uni-view",{key:n,staticClass:"input-box"},[i("v-uni-view",{staticClass:"view"},[t._v(t._s(e.title))]),"number"==e.type?[i("v-uni-input",{staticClass:"input",attrs:{type:"number",password:"password"==e.type,placeholder:e.placeholder},model:{value:e.content,callback:function(i){t.$set(e,"content",i)},expression:"item.content"}})]:t._e(),"password"==e.type?[i("v-uni-input",{staticClass:"input",attrs:{password:"password"==e.type,placeholder:e.placeholder},model:{value:e.content,callback:function(i){t.$set(e,"content",i)},expression:"item.content"}})]:t._e(),"digit"==e.type?[i("v-uni-input",{staticClass:"input",attrs:{type:"digit",password:"password"==e.type,placeholder:e.placeholder},model:{value:e.content,callback:function(i){t.$set(e,"content",i)},expression:"item.content"}})]:t._e(),"idcard"==e.type?[i("v-uni-input",{staticClass:"input",attrs:{type:"idcard",password:"password"==e.type,placeholder:e.placeholder},model:{value:e.content,callback:function(i){t.$set(e,"content",i)},expression:"item.content"}})]:t._e(),e.type&&"text"!=e.type?t._e():[i("v-uni-input",{staticClass:"input",attrs:{type:"text",password:"password"==e.type,placeholder:e.placeholder},model:{value:e.content,callback:function(i){t.$set(e,"content",i)},expression:"item.content"}})]],2)}),1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"cancel",style:{color:t.mData.cancelColor?t.mData.cancelColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapCancel.apply(void 0,arguments)}}},[t._v(t._s(t.mData.cancelText?t.mData.cancelText:"取消"))]),i("v-uni-view",{staticClass:"confirm",style:{color:t.mData.confirmColor?t.mData.confirmColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.inputConfirm.apply(void 0,arguments)}}},[t._v(t._s(t.mData.confirmText?t.mData.confirmText:"确认"))])],1)],1)]:t._e(),"custom"==t.type?[t._t("default")]:t._e()],2)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})}}]);