(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details"],{"0672":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"_cpimg"},[n("v-uni-canvas",{style:{width:t.cWidth+"px",height:t.cHeight+"px"},attrs:{id:"_myCanvas","canvas-id":"_myCanvas"}})],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},"1b01":function(t,e,n){"use strict";n.r(e);var i=n("a50b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},2384:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"._cpimg[data-v-6a922808]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""])},3462:function(t,e,n){"use strict";n.r(e);var i=n("69bc"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},3684:function(t,e,n){var i=n("2384");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1ac6b22a",i,!0,{sourceMap:!1,shadowMode:!1})},"69bc":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("92af"),r=i(n("b1d2")),o=i(n("1060")),s=i(n("7e1f")),u={components:{uniSection:o.default,cpimg:s.default,chunLeiModal:r.default},data:function(){return{model_value:!1,model_type:"default",model_data:{},model_defaultData:{title:"发布",content:"猪猪写完啦?那我发布咯！？",cancelText:"还没有！",confirmColor:"#3CC51F"},array:["秀恩爱","记事","心情","不知道什么类型","装逼"],index:0,fontNums:0,src:[],JSESSIONID:"",content:"",imgBase64:""}},onLoad:function(t){},methods:{setJSESSIONID:function(t){this.JSESSIONID=t},setTextAreaValues:function(t){this.content=t.detail.value,this.fontNums=t.detail.value.length},publicMsg:function(){var t=this;if(""==this.content)uni.showToast({title:"写几句话才能发布哦!不能太敷衍!",icon:"none",duration:1500});else{var e="";uni.request({url:"http://zjhwork.xyz:8080/newMsg",method:"POST",data:{type:t.array[t.index],content:this.content,base64:t.imgBase64,clientName:e},header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},success:function(e){1==e.data.code?(uni.showToast({title:"发表成功!请稍等~",duration:1500}),setTimeout(function(){uni.redirectTo({url:"../index/index?jsd="+t.JSESSIONID})},1500)):uni.showToast({title:"发表失败,请检查网络设置,或者赶紧叫猪猪看看!",icon:"none",duration:2e3})}})}},urlTobase64:function(t){var e=this;(0,a.pathToBase64)(t).then(function(t){e.imgBase64=t}).catch(function(t){})},cancel:function(){uni.showToast({title:"那看来要仔细斟酌斟酌!",duration:2e3,icon:"none"})},onConfirm:function(t){var e=this;switch(this.model_type){case"default":e.publicMsg();break}},tapBtn:function(t){switch(this.model_type=t,this.model_value=!this.model_value,this.model_type){case"default":this.model_data=this.model_defaultData;break}},addPhoto:function(){this.$refs.cpimg._changImg()},cpimgOk:function(t){var e=this;e.src=t,this.urlTobase64(t[0])},cpimgErr:function(t){console.log(t)},preImg:function(t){uni.previewImage({current:t,urls:this.src,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}})},change:function(t){this.index=t.detail.value}}};e.default=u},"74dc":function(t,e,n){"use strict";n.r(e);var i=n("c3fa"),a=n("3462");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0e666eb1",null,!1,i["a"],o);e["default"]=u.exports},"7e1f":function(t,e,n){"use strict";n.r(e);var i=n("0672"),a=n("1b01");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("bbc4");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6a922808",null,!1,i["a"],o);e["default"]=u.exports},"92af":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.pathToBase64=s,e.base64ToPath=u,n("a481");var a=i(n("0a0d"));n("34ef"),n("4917"),n("28a5");var r=i(n("795b"));function o(t){if(0===t.indexOf("_www")||0===t.indexOf("_doc")||0===t.indexOf("_documents")||0===t.indexOf("_downloads"))return t;if(0===t.indexOf("file://"))return t;if(0===t.indexOf("/storage/emulated/0/"))return t;if(0===t.indexOf("/")){var e=plus.io.convertAbsoluteFileSystem(t);if(e!==t)return e;t=t.substr(1)}return"_www/"+t}function s(t){return new r.default(function(e,n){if("object"===typeof window&&"document"in window){if("function"===typeof FileReader){var i=new XMLHttpRequest;return i.open("GET",t,!0),i.responseType="blob",i.onload=function(){if(200===this.status){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=n,t.readAsDataURL(this.response)}},i.onerror=n,void i.send()}var a=document.createElement("canvas"),r=a.getContext("2d"),s=new Image;return s.onload=function(){a.width=s.width,a.height=s.height,r.drawImage(s,0,0),e(a.toDataURL()),a.height=a.width=0},s.onerror=n,void(s.src=t)}"object"!==typeof plus?"object"===typeof wx&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){e("data:image/png;base64,"+t.data)},fail:function(t){n(t)}}):n(new Error("not support")):plus.io.resolveLocalFileSystemURL(o(t),function(t){t.file(function(t){var i=new plus.io.FileReader;i.onload=function(t){e(t.target.result)},i.onerror=function(t){n(t)},i.readAsDataURL(t)},function(t){n(t)})},function(t){n(t)})})}function u(t){return new r.default(function(e,n){if("object"===typeof window&&"document"in window){t=t.split(",");var i=t[0].match(/:(.*?);/)[1],r=atob(t[1]),o=r.length,s=new Uint8Array(o);while(o--)s[o]=r.charCodeAt(o);return e((window.URL||window.webkitURL).createObjectURL(new Blob([s],{type:i})))}var u=t.match(/data\:\S+\/(\S+);/);u?u=u[1]:n(new Error("base64 error"));var c=(0,a.default)()+"."+u;if("object"!==typeof plus)if("object"===typeof wx&&wx.canIUse("getFileSystemManager")){var l=wx.env.USER_DATA_PATH+"/"+c;wx.getFileSystemManager().writeFile({filePath:l,data:t.replace(/^data:\S+\/\S+;base64,/,""),encoding:"base64",success:function(){e(l)},fail:function(t){n(t)}})}else n(new Error("not support"));else{var d=new plus.nativeObj.Bitmap("bitmap"+(0,a.default)());d.loadBase64Data(t,function(){var t="_doc/uniapp_temp/"+c;d.save(t,{},function(){d.clear(),e(t)},function(t){d.clear(),n(t)})},function(t){d.clear(),n(t)})}})}},a50b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i=[],a="",r=0,o={name:"cpimg",props:{maxWidth:{type:Number,default:750},type:{type:String,default:"url"},ql:{type:Number,default:.92},src:{type:String,default:""},number:{type:Number,default:1},fixOrientation:{type:Boolean,default:!0},size:{type:Number,default:5e5}},data:function(){return{cWidth:750,cHeight:750}},onUnload:function(){},methods:{_changImg:function(){var t=this;""==t.src?uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){i=[],a=e.tempFilePaths,r=0,t._cpImg()},fail:function(e){t._err(e)}}):_cpImg(t.src)},_cpImg:function(){var t=this,e=a[r];function n(n,i){if(n.type.indexOf("png")>=0)return t._result(e),!1;var a,r,o=n.width,s=n.height,u=1,c=1;(i/1024>=t.size||n.width>=t.maxWidth)&&(n.width>=n.height&&n.width>=t.maxWidth?(n.height=t.maxWidth*n.height/n.width,n.width=t.maxWidth):n.width<n.height&&n.height>=t.maxWidth&&(n.width=t.maxWidth*n.width/n.height,n.height=t.maxWidth),u=n.width/o,c=n.height/s),a=o*u,r=s*c;var l=uni.createCanvasContext("_myCanvas",t);if(t.cWidth=n.width,t.cHeight=n.height,t.fixOrientation){var d=n.orientation;[5,6,7,8,"right","left","right-mirrored","left-mirrored"].indexOf(d)>-1&&(t.cWidth=n.height,t.cHeight=n.width),2==d||"up-mirrored"==d?(l.translate(a,0),l.scale(-1,1)):3==d||"down"==d?(l.translate(a,r),l.rotate(Math.PI)):4==d||"down-mirrored"==d?(l.translate(0,r),l.scale(1,-1)):5==d||"right-mirrored"==d?(l.rotate(.5*Math.PI),l.scale(1,-1)):6==d||"right"==d?(l.rotate(.5*Math.PI),l.translate(0,-r)):7==d||"left-mirrored"==d?(l.rotate(.5*Math.PI),l.translate(a,-r),l.scale(-1,1)):8==d||"left"==d?(l.rotate(-.5*Math.PI),l.translate(-a,0)):l.translate(0,0)}var f=0;function h(){var e=t.maxWidth/5;return e>=600?600:e<=100?100:e}f=h(),setTimeout(function(){l.drawImage(e,0,0,a,r),l.draw(!1,function(){var e=0;e=10,setTimeout(function(){uni.canvasToTempFilePath({width:Number(t.cWidth),height:Number(t.cHeight),destWidth:Number(t.cWidth),destHeight:Number(t.cHeight),canvasId:"_myCanvas",fileType:"jpg",quality:Number(t.ql),success:function(e){if("base64"==t.type){t._result(e.tempFilePath)}else t._result(e.tempFilePath)},fail:function(e){t._err(e)}},t)},e)})},f)}uni.showLoading({title:"图片压缩中 ".concat(r+1,"/").concat(a.length),mask:!0}),t._getH5ImageInfo(e,function(t){n(t,t.size)})},_reverseImgData:function(t){for(var e=t.width,n=t.height,i=0,a=0;a<n/2;a++)for(var r=0;r<4*e;r++)i=t.data[a*e*4+r],t.data[a*e*4+r]=t.data[(n-a-1)*e*4+r],t.data[(n-a-1)*e*4+r]=i;return t},_getH5ImageInfo:function(t,e){var n=new Image;n.src=t,n.onload=function(n){var i=this,a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="blob",a.onload=function(t){var n=this;if(200==n.status||0===n.status){var a=new FileReader;a.onload=function(t){var a=new DataView(this.result);if(65496!=a.getUint16(0,!1))return e({size:n.response.size,type:n.response.type,width:i.width,height:i.height,orientation:-1});var r=a.byteLength,o=2;while(o<r){var s=a.getUint16(o,!1);if(o+=2,65505==s){if(1165519206!=a.getUint32(o+=2,!1))return e({size:n.response.size,type:n.response.type,width:i.width,height:i.height,orientation:-1});var u=18761==a.getUint16(o+=6,!1);o+=a.getUint32(o+4,u);var c=a.getUint16(o,u);o+=2;for(var l=0;l<c;l++)if(274==a.getUint16(o+12*l,u))return e({size:n.response.size,type:n.response.type,width:i.width,height:i.height,orientation:a.getUint16(o+12*l+8,u)})}else{if(65280!=(65280&s))break;o+=a.getUint16(o,!1)}}return e({size:n.response.size,type:n.response.type,width:i.width,height:i.height,orientation:-1})},a.readAsArrayBuffer(n.response)}},a.send()}},_result:function(t,e){i.push(t),r+=1,a.length-1>=r?this._cpImg():(uni.hideLoading(),this.$emit("result",i))},_err:function(t){uni.hideLoading(),this.$emit("err",t)}}};e.default=o},bbc4:function(t,e,n){"use strict";var i=n("3684"),a=n.n(i);a.a},c3fa:function(t,e,n){"use strict";var i={"uni-section":n("1060").default,cpimg:n("7e1f").default,"chunLei-modal":n("b1d2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"type"},[n("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("uni-section",{attrs:{title:"选择发布类型:"+t.array[t.index],type:"line"}})],1)],1),n("v-uni-view",{staticClass:"content",staticStyle:{"min-height":"300rpx","margin-top":"100rpx"}},[n("v-uni-view",{},[n("v-uni-textarea",{staticStyle:{"min-height":"130rpx",border:"#555555 10px double",padding:"5rpx",margin:"0 auto","border-radius":"10%"},attrs:{maxlength:"-1","placeholder-style":"","auto-height":!0,value:"",placeholder:"",placeholder:"写下你的心里话吧!"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.setTextAreaValues.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticStyle:{"text-align":"center"}},[n("v-uni-text",{staticStyle:{"font-size":"20rpx","text-align":"center"}},[t._v("猪猪码了"+t._s(t.fontNums)+"个字,还有想说的吗!")])],1)],1),n("v-uni-view",{staticStyle:{"text-align":"center"}},[n("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addPhoto.apply(void 0,arguments)}}},[t._v("上传一张相关图片")]),n("cpimg",{ref:"cpimg",attrs:{number:2,fixOrientation:!0,size:500,maxWidth:1e3,ql:.9,type:"url"},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.cpimgOk.apply(void 0,arguments)},err:function(e){arguments[0]=e=t.$handleEvent(e),t.cpimgErr.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"img",staticStyle:{"text-align":"center","margin-top":"40rpx"}},t._l(t.src,function(e,i){return n("v-uni-image",{key:i,staticClass:"showimg",staticStyle:{width:"250rpx",height:"300rpx"},attrs:{src:e,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preImg(i)}}})}),1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapBtn("default")}}},[t._v("发布")])],1),n("v-uni-view",{staticClass:"model"},[n("chunLei-modal",{attrs:{mData:t.model_data,type:t.model_type,navHeight:0},on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}},model:{value:t.model_value,callback:function(e){t.model_value=e},expression:"model_value"}})],1)],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})}}]);