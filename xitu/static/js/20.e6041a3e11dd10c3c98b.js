webpackJsonp([20],{138:/*!*******************************************************!*\
  !*** ./src/components/database/DataJiFenDownLoad.vue ***!
  \*******************************************************/
function(e,t,n){function i(e){n(/*! !../../../~/_extract-text-webpack-plugin@2.1.0@extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"sourceMap":true}!../../../~/_vue-loader@12.2.1@vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-de7a4e3c","scoped":true,"hasInlineConfig":true}!../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=styles&index=0!./DataJiFenDownLoad.vue */446)}var a=n(/*! ../../../~/_vue-loader@12.2.1@vue-loader/lib/component-normalizer */39)(n(/*! !babel-loader!../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=script&index=0!./DataJiFenDownLoad.vue */328),n(/*! !../../../~/_vue-loader@12.2.1@vue-loader/lib/template-compiler/index?{"id":"data-v-de7a4e3c"}!../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=template&index=0!./DataJiFenDownLoad.vue */528),i,"data-v-de7a4e3c",null);e.exports=a.exports},169:/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
function(e,t,n){var i,a,o,i,a,o;!function(n,r){a=[t],i=r,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(t){"use strict";!function(n,r){a=[t],i=r,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={GETCODE:"/sendcode/",REG:"/signup/",LOGIN:"/api-token-auth/",TOKENVERIFY:"/api-token-verify/",RESETCODE:"/requestPasswordResetBySmsCode/",RERESTPASSWORD:"/passwordrest/",NEWS:"/api1.0/articles/",ARTICLES:"/api1.0/articles/",CATEGORYS:"/api1.0/categorys/",ARTICLESDETAIL:"/api1.0/articles/",COMMENTNEWS:"/api1.0/comments/",COLLECTIONS:"/api1.0/collections/",NEWSVIEW:"/api1.0/views/",NEWSZAN:"/api1.0/likes/",COMMENTREPLY:"/api1.0/replys/",NEWSCOMMENTINFOS:"/api1.0/articles",REPLYTOREPLY:"/api1.0/replys/",JUBAONEWS:"/api1.0/informs/",ONECOMMENTS:"/api1.0/articles",USERINFOS:"/api1.0/profiles/",USERPLOADSINFOS:"/api1.0/profiles/",UPLOADAVATORINFOS:"/api1.0/profiles/",TAGS:"/api1.0/tags/",MYTIEZI:"/api1.0/users/",ADS:"/api1.0/ads/",SUGGESTBACK:"/api1.0/suggestions/",USERCOMMENTS:"/api1.0/usercomments/",USERJIFEN:"/api1.0/credititems/",TOPBANNER:"/api1.0/articleranks/",FILES:"/api1.0/files/",FILESDETAIL:"/api1.0/filecredits/",SEARCH:"api1.0/search/",SEARCHCATEGORY:"api1.0/search/lists/",SIGN:"/api1.0/signatures/",AllLook:"api1.0/articleorders/"}})})},172:/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
function(e,t,n){var i,a,o,i,a,o;!function(n,r){a=[t],i=r,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(t){"use strict";!function(n,r){a=[t],i=r,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t={flag:!0,printLog:function(){if(this.flag){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}}};e.default=t})})},180:/*!*******************************************************!*\
  !*** ./~/_weixin-js-sdk@1.2.0@weixin-js-sdk/index.js ***!
  \*******************************************************/
function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(n),function(e){s(t,e,i)}):u(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)}):i?u(t,i):u(t,n)}function a(e){return e=e||{},e.appId=L.appId,e.verifyAppId=L.appId,e.verifySignType="sha1",e.verifyTimestamp=L.timestamp+"",e.verifyNonceStr=L.nonceStr,e.verifySignature=L.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",L.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,i=m[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");a=t.substring(o+1),"confirm"==a&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),a=a.replace(/_/g," "),a=a.toLowerCase(),("access denied"==a||"no permission to execute"==a)&&(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=n+":"+a}function d(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],a=h[i];a&&(e[t]=a)}return e}}function u(e,t){if(!(!L.debug||t&&t.isInnerInvoke)){var n=m[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(e){if(!(_||y||L.debug||"6.0.2">E||M.systemType<0)){var t=new Image;M.appId=L.appId,M.initTime=k.initEndTime-k.initStartTime,M.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,N.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=n}})}}function f(){return(new Date).getTime()}function p(t){A&&(e.WeixinJSBridge?t():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){N.invoke||(N.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(n),i)},N.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),S=e.document,v=S.title,I=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),_=!(!w.match("mac")&&!w.match("win")),y=-1!=I.indexOf("wxdebugger"),A=-1!=I.indexOf("micromessenger"),T=-1!=I.indexOf("android"),C=-1!=I.indexOf("iphone")||-1!=I.indexOf("ipad"),E=function(){var e=I.match(/micromessenger\/(\d+\.\d+\.\d+)/)||I.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:C?1:T?2:-1,clientVersion:E,url:encodeURIComponent(location.href)},L={},O={_completes:[]},b={state:0,data:{}};p(function(){k.initEndTime=f()});var x=!1,B=[],N={config:function(e){L=e,u("config",e);var t=!1!==L.check;p(function(){if(t)n(h.config,{verifyJsApiList:d(L.jsApiList)},function(){O._complete=function(e){k.preVerifyEndTime=f(),b.state=1,b.data=e},O.success=function(e){M.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):b.state=-1};var e=O._completes;return e.push(function(){l()}),O.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();O._completes=[]},O}()),k.preVerifyStartTime=f();else{b.state=1;for(var e=O._completes,i=0,a=e.length;a>i;++i)e[i]();O._completes=[]}}),L.beta&&g()},ready:function(e){0!=b.state?e():(O._completes.push(e),!A&&L.debug&&e())},error:function(e){"6.0.2">E||(-1==b.state?e(b.data):O._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=m[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(T){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(x=!1,B.length>0){var t=B.shift();wx.getLocalImgData(t)}},e}())):B.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(C){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){n(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}n(h.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:L.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,code:r.code};i.push(s)}n(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},R=1,P={};return S.addEventListener("error",function(e){if(!T){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=R++,t["wx-id"]=a),P[a])return;P[a]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),S.addEventListener("load",function(e){if(!T){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(P[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=N),N}}(t)}(window)},182:/*!********************************!*\
  !*** ./src/api/tiezidetail.js ***!
  \********************************/
function(e,t,n){var i,a,o,i,a,o;!function(r,s){a=[t,n(/*! babel-runtime/core-js/promise */10),n(/*! axios */9)],i=s,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(t){"use strict";!function(r,s){a=[t,n(/*! babel-runtime/core-js/promise */10),n(/*! axios */9)],i=s,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return l.default.post(e,{url:t}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}function o(e,t){return l.default.post(e,{post_id:t}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}function r(e,t){return l.default.delete(e,{data:{post_id:t}}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}function s(e,t){return l.default.post(e,{post_id:t}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}function c(e,t){return l.default.delete(e,{data:{post_id:t}}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}function d(e,t){return l.default.post(e,{post_id:t}).then(function(e){return u.default.resolve(e)},function(e){return u.default.reject(e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.getSignInfo=a,e.dealColl=o,e.delColl=r,e.dealLike=s,e.cancLike=c,e.getViewsInfo=d;var u=i(t),l=i(n)})})},328:/*!**********************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/database/DataJiFenDownLoad.vue ***!
  \**********************************************************************************************************************************************************************/
function(e,t,n){var i,a,o;!function(r,s){a=[t,n(/*! ../../api/api */169),n(/*! ../../utils/log */172),n(/*! ../../api/tiezidetail */182),n(/*! weixin-js-sdk */180)],i=s,void 0!==(o="function"==typeof i?i.apply(t,a):i)&&(e.exports=o)}(0,function(e,t,n,i,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(t),s=o(n),c=o(a);e.default={data:function(){return{id:-1,abstract:"",credit:0,currentCredit:0,uploader:-1,downloadCount:0,url:"",isShowDataBase:!1,isShowBak:!0}},mounted:function(){this.$nextTick(function(){this.isWeiXin()?(this.isShowBak=!1,this.getAsign()):(this.isShowBak=!0,this.getUserJIfen(),this.getDatumById(this.$route.params.fileId))})},watch:{$route:function(e){if(/datajifendl\/\d+/.test(e.path)){var t=this.$route.params.fileId||0;this.getDatumById(t)}}},methods:{goPage:function(){this.isShowDataBase?window.location.href="http://m.ciyigou.com/mobile/index#/database":window.history.go(-1)},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},getAsign:function(){var e=this,t=encodeURIComponent(window.location.href.split("#")[0]);(0,i.getSignInfo)(r.default.SIGN,t).then(function(t){e.initAsign(t)},function(e){})},initAsign:function(e){var t=this;if(200===e.status){var n=e.data.data.detail;c.default.config({debug:!1,appId:n.appId,timestamp:n.timestamp.toString(),nonceStr:n.nonceStr,signature:n.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareQZone"]}),c.default.ready(function(){t.getUserJIfen(),t.getDatumById(t.$route.params.fileId)})}},getDatumById:function(e){var t=this;this.$http.get(""+r.default.FILES+e+"/").then(function(e){var n=t;s.default.printLog("获取到:",e),t.id=e.data.data.detail.id,t.abstract=e.data.data.detail.abstract,t.credit=e.data.data.detail.credit,t.uploader=e.data.data.detail.uploader,t.downloadCount=e.data.data.detail.download_count,t.url=e.data.data.detail.file_url;var i=window.location.href;/[?]/im.test(i)&&(i=i.split("?")[0]+"#"+i.split("?")[1].split("#")[1]);c.default.onMenuShareTimeline({title:e.data.data.detail.file_name,link:i,imgUrl:e.data.data.detail.file_image,success:function(e){n.isShowDataBase=!0,n.showMsg("分享成功!")},cancel:function(e){s.default.printLog("取消分享到朋友圈返回的信息为:",e)}}),c.default.onMenuShareAppMessage({title:e.data.data.detail.file_name,link:i,imgUrl:e.data.data.detail.file_image,desc:"来自：磁易购"+e.data.data.detail.abstract,type:"",dataUrl:"",success:function(e){n.isShowDataBase=!0},cancel:function(e){s.default.printLog("取消分享给朋友返回的信息为:",e)}}),c.default.onMenuShareQQ({title:e.data.data.detail.file_name,link:i,imgUrl:e.data.data.detail.file_image,desc:"来自：磁易购"+e.data.data.detail.abstract,success:function(e){n.isShowDataBase=!0},cancel:function(e){s.default.printLog("取消分享给QQ好友返回的信息为:",e)}}),c.default.onMenuShareQZone({title:e.data.data.detail.file_name,link:i,imgUrl:e.data.data.detail.file_image,desc:"来自：磁易购"+e.data.data.detail.abstract,success:function(e){n.isShowDataBase=!0},cancel:function(e){s.default.printLog("取消分享到QQ空间返回的信息为:",e)}})},function(e){})},goGetJiFenPage:function(e){this.$router.push({path:"/gjifen",replace:!0}),e.preventDefault()},getUserJIfen:function(){var e=this;this.$http.get(""+r.default.MYTIEZI+localStorage.getItem("userId")+"/credits/").then(function(t){e.initJiFenData(t)},function(e){})},openwin:function(e){var t=localStorage.getItem("token");if(null!==t&&""!==t||this.$router.push({path:"/login",replace:!0}),this.currentCredit<this.credit)return void this.showMsg("很抱歉，您当前积分不足，不能下载该文件！");var n=this;this.$http.post(r.default.FILESDETAIL,{file_id:n.id}).then(function(e){},function(e){});var i=document.createElement("a");i.setAttribute("href",e+"?date="+(new Date).getTime()),i.setAttribute("target","_blank"),i.setAttribute("id","openwin"),document.body.appendChild(i),i.click()},initJiFenData:function(e){console.log("返回需要下载的积分信息是:",e),200===e.status&&null!==e.data.data&&(this.currentCredit=e.data.data.detail.current_credit)},newWin:function(e){var t=this;this.$http.post(r.default.FILESDETAIL,{file_id:t.id}).then(function(e){},function(e){t.showMsg("抱歉，下载失败，请重试!")});var n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("target","_blank"),n.setAttribute("id","openwindow"),document.getElementById("openwindow")||document.body.appendChild(n),n.click()},downLoad:function(){this.uploader===localStorage.getItem("userId")?this.dealFile():this.currentCredit>=this.credit?this.dealFile():this.showMsg("很抱歉，您当前积分不足，不能下载该文件！")},s4:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},JsGuid:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()},dealFile:function(){var e=this;this.$http.post(r.default.FILESDETAIL,{file_id:e.id}).then(function(t){var n=localStorage.getItem("url");window.open("about:blank");e.newWin(n)},function(t){e.showMsg("抱歉，下载失败，请重试!")})},showMsg:function(e){this.$toast({message:e,duration:2e3})}},beforeRouteLeave:function(e,t,n){console.log("哈哈"),localStorage.removeItem("url"),n()}}})},446:/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_extract-text-webpack-plugin@2.1.0@extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!./~/_vue-style-loader@3.0.1@vue-style-loader!./~/_css-loader@0.28.4@css-loader?{"minimize":true,"sourceMap":true}!./~/_vue-loader@12.2.1@vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-de7a4e3c","scoped":true,"hasInlineConfig":true}!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=styles&index=0!./src/components/database/DataJiFenDownLoad.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function(e,t){},467:/*!*******************************************************!*\
  !*** ./src/assets/images/datajifen-download-icon.png ***!
  \*******************************************************/
function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAVFBMVEUAAAD///+qqqqcnJyZmZmXl5ecnJyYmJiampqampqampqYmJiYmJiYmJiYmJiXl5eXl5eYmJiXl5eXl5eXl5eYmJiYmJiXl5eYmJiYmJiXl5eXl5dM8qBaAAAAG3RSTlMAAQYSFCAkND9OWGFtiJKxs9DR293e6Oz1+f1iN76TAAAAS0lEQVQI123KOwJEQADA0DAM6zPssn65/z0VU2i8KkUAghrIXruclr+6LnMJ9abqHgGaQz3b/H8u7QFiBYMjVBET0BWQxG/KfuLjBljABga/NBJ0AAAAAElFTkSuQmCC"},528:/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@12.2.1@vue-loader/lib/template-compiler?{"id":"data-v-de7a4e3c"}!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/database/DataJiFenDownLoad.vue ***!
  \****************************************************************************************************************************************************************************************************************/
function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"data-content-layout"},[i("header",{staticClass:"data-content-topbar clearfix"},[i("a",{directives:[{name:"show",rawName:"v-show",value:e.isShowBak,expression:"isShowBak"}],staticClass:"datadl-content-back",on:{click:function(t){e.goPage()}}}),e._v(" "),i("h4",{staticClass:"data-content-title"},[e._v("\n            文档阅览\n        ")])]),e._v(" "),i("article",{staticClass:"data-content-article"},[i("h2",{staticClass:"article-title"},[e._v("\n            内容摘要\n        ")]),e._v(" "),i("div",{staticClass:"article-content"},[i("p",{staticClass:"article-paragraph"},[e._v("\n                "+e._s(e.abstract)+"\n            ")])]),e._v(" "),i("div",{staticClass:"datajifen-download"},[i("div",{staticClass:"datajifen-dialog"},[i("h2",{staticClass:"datajifen-need-title"},[e._v("您当前的积分为"+e._s(e.currentCredit)+"积分")]),e._v(" "),i("h2",{staticClass:"datajifen-need-title"},[e._v("如需要观看全文，需使用 "+e._s(e.credit)+"积分")]),e._v(" "),i("a",{staticClass:"datajifen-how-get",on:{click:function(t){e.goGetJiFenPage(t)}}},[e._v("\n                    如何获得积分？\n                ")]),e._v(" "),i("a",{staticClass:"datajifen-download-btn",attrs:{id:"dow"},on:{click:function(t){e.openwin(e.url)}}},[e._v("\n                    下载\n                ")]),e._v(" "),i("div",{staticClass:"datajifen-watch clearfix"},[i("div",{staticClass:"watch-l"}),e._v(" "),i("div",{staticClass:"watch-r"},[i("img",{staticClass:"datajifen-d",attrs:{src:n(/*! ../../../src/assets/images/datajifen-download-icon.png */467),alt:""}}),e._v(" "),i("span",{staticClass:"download-num"},[e._v("\n                            "+e._s(e.downloadCount)+"\n                        ")])])])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=20.e6041a3e11dd10c3c98b.js.map