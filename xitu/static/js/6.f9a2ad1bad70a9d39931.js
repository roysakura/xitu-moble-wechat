webpackJsonp([6],{156:/*!***************************************************!*\
  !*** ./src/components/user/register/Register.vue ***!
  \***************************************************/
function(e,t,n){function a(e){n(/*! !../../../../~/_extract-text-webpack-plugin@2.1.0@extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"sourceMap":true}!../../../../~/_vue-loader@12.2.1@vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0833971a","scoped":true,"hasInlineConfig":true}!../../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=styles&index=0!./Register.vue */417)}var s=n(/*! ../../../../~/_vue-loader@12.2.1@vue-loader/lib/component-normalizer */39)(n(/*! !babel-loader!../../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=script&index=0!./Register.vue */348),n(/*! !../../../../~/_vue-loader@12.2.1@vue-loader/lib/template-compiler/index?{"id":"data-v-0833971a"}!../../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=template&index=0!./Register.vue */498),a,"data-v-0833971a",null);e.exports=s.exports},169:/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
function(e,t,n){var a,s,o,a,s,o;!function(n,i){s=[t],a=i,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(t){"use strict";!function(n,i){s=[t],a=i,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={GETCODE:"/sendcode/",REG:"/signup/",LOGIN:"/api-token-auth/",TOKENVERIFY:"/api-token-verify/",RESETCODE:"/requestPasswordResetBySmsCode/",RERESTPASSWORD:"/passwordrest/",NEWS:"/api1.0/articles/",ARTICLES:"/api1.0/articles/",CATEGORYS:"/api1.0/categorys/",ARTICLESDETAIL:"/api1.0/articles/",COMMENTNEWS:"/api1.0/comments/",COLLECTIONS:"/api1.0/collections/",NEWSVIEW:"/api1.0/views/",NEWSZAN:"/api1.0/likes/",COMMENTREPLY:"/api1.0/replys/",NEWSCOMMENTINFOS:"/api1.0/articles",REPLYTOREPLY:"/api1.0/replys/",JUBAONEWS:"/api1.0/informs/",ONECOMMENTS:"/api1.0/articles",USERINFOS:"/api1.0/profiles/",USERPLOADSINFOS:"/api1.0/profiles/",UPLOADAVATORINFOS:"/api1.0/profiles/",TAGS:"/api1.0/tags/",MYTIEZI:"/api1.0/users/",ADS:"/api1.0/ads/",SUGGESTBACK:"/api1.0/suggestions/",USERCOMMENTS:"/api1.0/usercomments/",USERJIFEN:"/api1.0/credititems/",TOPBANNER:"/api1.0/articleranks/",FILES:"/api1.0/files/",FILESDETAIL:"/api1.0/filecredits/",SEARCH:"api1.0/search/",SEARCHCATEGORY:"api1.0/search/lists/",SIGN:"/api1.0/signatures/",AllLook:"api1.0/articleorders/"}})})},189:/*!*****************************************!*\
  !*** ./src/assets/js/customValidate.js ***!
  \*****************************************/
function(e,t,n){var a,s,o,a,s,o;!function(i,c){s=[t,n(/*! vee-validate */12)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(t){"use strict";!function(i,c){s=[t,n(/*! vee-validate */12)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),t.Validator.extend("phone",{messages:{zh_CN:function(e){return"手机号码输入不正确"}},validate:function(e){return 11==e.length&&/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(e)}}),t.Validator.extend("myPhoneNumeric",{messages:{zh_CN:function(e){return"手机号码只能是数字"}},validate:function(e){return/^([0-9]+)$/.test(e)}}),t.Validator.extend("myNumeric",{messages:{zh_CN:function(e){return"验证码只能是数字"}},validate:function(e){return/^([0-9]+)$/.test(e)}}),t.Validator.extend("code",{messages:{zh_CN:function(e){return"验证码必须4位或6位"}},validate:function(e){return/^(\d{4}){1}(\d{2})?$/.test(e)}}),t.Validator.extend("pwd",{messages:{zh_CN:function(e){return"密码必须是6到13位数字或字母组成"}},validate:function(e){return/^[a-zA-Z0-9]{6,13}$/.test(e)}}),e.default=t.Validator})})},192:/*!********************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/user/TimeBtn.vue ***!
  \********************************************************************************************************************************************************/
function(e,t,n){var a,s,o;!function(n,i){s=[t],a=i,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{time:0,second:60,disabled:!1}},methods:{run:function(){this.$emit("run")},start:function(){this.time=this.second,this.timer()},stop:function(){this.time=0,this.disabled=!1},setDisabled:function(e){this.disabled=e},timer:function(){this.time>0?(this.time--,setTimeout(this.timer,1e3)):this.disabled=!1}},computed:{text:function(){return this.time>0?this.time+"s 后重获取":"获取验证码"}}}})},196:/*!*****************************!*\
  !*** ./src/api/register.js ***!
  \*****************************/
function(e,t,n){var a,s,o,a,s,o;!function(i,c){s=[t,n(/*! babel-runtime/core-js/promise */10),n(/*! axios */9)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(t){"use strict";!function(i,c){s=[t,n(/*! babel-runtime/core-js/promise */10),n(/*! axios */9)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return r.default.post(e,{mobile:t}).then(function(e){return c.default.resolve(e)},function(e){return c.default.reject(e)})}function o(e,t,n,a,s,o,i,u,l){return r.default.post(e,{mobile:t,veri_code:n,password1:a,password2:s,role_type:o,company:i,username:u,card:l}).then(function(e){return c.default.resolve(e)},function(e){return c.default.reject(e)})}function i(e){return r.default.get("/api1.0/search/company/?name="+e).then(function(e){return c.default.resolve(e)},function(e){return c.default.reject(e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.getVerCode=s,e.dealRegister=o,e.getCompanyName=i;var c=a(t),r=a(n)})})},201:/*!*****************************************!*\
  !*** ./src/components/user/TimeBtn.vue ***!
  \*****************************************/
function(e,t,n){var a=n(/*! ../../../~/_vue-loader@12.2.1@vue-loader/lib/component-normalizer */39)(n(/*! !babel-loader!../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=script&index=0!./TimeBtn.vue */192),n(/*! !../../../~/_vue-loader@12.2.1@vue-loader/lib/template-compiler/index?{"id":"data-v-251c6a1a"}!../../../~/_vue-loader@12.2.1@vue-loader/lib/selector?type=template&index=0!./TimeBtn.vue */202),null,null,null);e.exports=a.exports},202:/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@12.2.1@vue-loader/lib/template-compiler?{"id":"data-v-251c6a1a"}!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/user/TimeBtn.vue ***!
  \**************************************************************************************************************************************************************************************************/
function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{attrs:{disabled:e.disabled||e.time>0},on:{click:function(t){e.run()}}},[e._v(e._s(e.text))])},staticRenderFns:[]}},348:/*!******************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/user/register/Register.vue ***!
  \******************************************************************************************************************************************************************/
function(e,t,n){(function(a){var s,o,i;!function(a,c){o=[t,n(/*! ../TimeBtn.vue */201),n(/*! ../../../assets/js/customValidate */189),n(/*! ../../../assets/js/customErrMsg */460),n(/*! ../../../api/api */169),n(/*! ../../../api/register */196)],s=c,void 0!==(i="function"==typeof s?s.apply(t,o):s)&&(e.exports=i)}(0,function(e,t,n,s,o,i){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=c(t),u=(c(n),c(s),c(o));e.default={data:function(){return{companyName:"",phone:"",code:"",pwd:"",repwd:"",account_type:1,src_base64:"",chenghu:"",isChecked:!0,showCompany:!1,compData:[]}},mounted:function(){this.changeSym()},methods:{showStyle:function(){this.isChecked=!this.isChecked},changeSym:function(){var e=this;a("#account_company").click(function(){e.account_type=1,a(this).removeClass("account_company_no").addClass("account_company"),a("#account_person").removeClass("account_person_have").addClass("account_person"),a("#account_tec").removeClass("account_tec_have").addClass("account_tec")}),a("#account_person").click(function(){e.account_type=2,a(this).removeClass("account_person").addClass("account_person_have"),a("#account_company").removeClass("account_company").addClass("account_company_no"),a("#account_tec").removeClass("account_tec_have").addClass("account_tec")}),a("#account_tec").click(function(){e.account_type=3,a(this).removeClass("account_tec").addClass("account_tec_have"),a("#account_person").removeClass("account_person_have").addClass("account_person"),a("#account_company").removeClass("account_company").addClass("account_company_no")}),a("#company").bind("input propertychange",function(){e.watchCompany(e.companyName)}),a("#fileImg").change(function(){var t=this.files[0];if(!/image\/\w+/.test(t.type))return alert("请确保文件为图像类型"),!1;var n=new FileReader;n.readAsDataURL(t),n.onload=function(t){this.result.split(",")[1];a(".preview-img")[0].src=this.result,e.src_base64=this.result}})},watchCompany:function(e){var t=this;a("#company_list").show(),(0,i.getCompanyName)(e).then(function(e){200===e.data.code&&(t.compData=e.data.data.detail.hits.hits,t.showCompany=!0),t.selectCompany()},function(e){console.log("获取公司信息失败:",e)})},selectCompany:function(){var e=this;a("#company_list li").bind("click",function(){e.companyName=a(this).text(),e.watchCompany()})},autoStyle:function(e){e.focus(),e.focus&&a(e).css({border:"2px solid #20a0ff"})},register_user:function(e){var t=this;return""===t.phone||""===t.code||""===t.pwd||""===t.repwd||""===t.companyName||""===t.chenghu?void t.showMsg("请填完注册信息!"):t.pwd!==t.repwd?void t.showMsg("两次输入密码不一致"):((0,i.dealRegister)(u.default.REG,t.phone,t.code,t.pwd,t.repwd,t.account_type,t.companyName,t.chenghu,t.src_base64).then(function(e){201===e.status&&null!==e.data&&(t.showMsg("恭喜您注册成功!"),t.$router.push({path:"/login",replace:!0}))},function(e){t.$store.dispatch("hideLoading"),t.showMsg("注册失败，稍后请重试!")}),void e.preventDefault())},showMsg:function(e){this.$toast({message:e,duration:2e3})},changeInStyle:function(){var e=a(".reg-common");a(e).each(function(e,t){a(t).focus(function(){a(this).css({border:"2px solid #20a0ff"})}),a(t).blur(function(){a(this).css({border:"1px solid #d6d6d6"})})})},sendCode:function(){var e=this;if(""===e.phone||null===e.phone)e.showMsg("手机号不能为空!");else if(/^1[34578]\d{9}$/.test(e.phone)){e.$refs.timerbtn.setDisabled(!0);var t=a("#get-code");t.css({"background-color":"#20a0ff",color:"#ffffff"}),e.$refs.timerbtn.start(),(0,i.getVerCode)(u.default.GETCODE,e.phone).then(function(t){201===t.status&&null!==t.data&&e.showMsg("获取验证码成功!")},function(t){e.$store.dispatch("hideLoading"),101===parseInt(t.code)?e.showMsg("该手机号已经被注册了!"):104===parseInt(t.code)?e.showMsg("获取验证码超过次数上限,请1小时后再尝试!"):e.showMsg("注册失败!"),e.$refs.timerbtn.stop()})}else e.showMsg("手机号格式不对!")},getContent:function(){a("#reg-code-number").css({border:"2px solid #20a0ff"})},blurContent:function(){a("#reg-code-number").css({border:"1px solid #d6d6d6"})}},components:{"timer-btn":r.default}}})}).call(t,n(/*! jquery */11))},417:/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_extract-text-webpack-plugin@2.1.0@extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!./~/_vue-style-loader@3.0.1@vue-style-loader!./~/_css-loader@0.28.4@css-loader?{"minimize":true,"sourceMap":true}!./~/_vue-loader@12.2.1@vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0833971a","scoped":true,"hasInlineConfig":true}!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=styles&index=0!./src/components/user/register/Register.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function(e,t){},460:/*!***************************************!*\
  !*** ./src/assets/js/customErrMsg.js ***!
  \***************************************/
function(e,t,n){var a,s,o,a,s,o;!function(i,c){s=[t,n(/*! vee-validate */12)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(t){"use strict";!function(i,c){s=[n(/*! vee-validate */12)],a=c,void 0!==(o="function"==typeof a?a.apply(t,s):a)&&(e.exports=o)}(0,function(e){var t={en:{messages:{numeric:function(){return"Some English Message"}}},cn:{messages:{numeric:function(){return"电话号码只能是数字"}}}};e.Validator.updateDictionary(t),new e.Validator({first_name:"numeric"}).setLocale("cn")})})},498:/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@12.2.1@vue-loader/lib/template-compiler?{"id":"data-v-0833971a"}!./~/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/user/register/Register.vue ***!
  \************************************************************************************************************************************************************************************************************/
function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reg-layer"},[e._m(0),e._v(" "),n("main",{staticClass:"reg-info-box"},[n("div",{staticClass:"reg-phone"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"reg-phone-number reg-common",attrs:{placeholder:"您的手机号",name:"phone",type:"tel"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"reg-code"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"reg-code-number reg-common",attrs:{type:"text",placeholder:"请输入验证码",id:"reg-code-number",name:"code"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),n("timer-btn",{ref:"timerbtn",staticClass:"g-code",attrs:{id:"get-code"},on:{run:e.sendCode}})],1),e._v(" "),n("div",{staticClass:"reg-password"},[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],staticClass:"reg-password-number reg-common",attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off",name:"pwd"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"reg-password"},[e._m(4),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.repwd,expression:"repwd"}],staticClass:"reg-password-number-again reg-common",attrs:{type:"password",placeholder:"请再次输入密码",name:"pwd"},domProps:{value:e.repwd},on:{input:function(t){t.target.composing||(e.repwd=t.target.value)}}})]),e._v(" "),e._m(5),e._v(" "),n("div",{staticClass:"reg-password"},[e._m(6),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.chenghu,expression:"chenghu"}],staticClass:"reg-password-number-again reg-common",attrs:{type:"text",placeholder:"您的称呼",autocomplete:"off",name:"pwd"},domProps:{value:e.chenghu},on:{input:function(t){t.target.composing||(e.chenghu=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"reg-password choice_company"},[e._m(7),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.companyName,expression:"companyName"}],staticClass:"reg-password-number-again reg-common",attrs:{type:"text",placeholder:"您的公司",name:"company",id:"company"},domProps:{value:e.companyName},on:{input:function(t){t.target.composing||(e.companyName=t.target.value)}}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showCompany,expression:"showCompany"}],staticClass:"company-list",attrs:{id:"company_list"}},e._l(e.compData,function(t){return n("li",[e._v(e._s(t._source.name))])}))]),e._v(" "),e._m(8),e._v(" "),n("div",{staticClass:"agree",attrs:{id:"Agree"}},[n("div",{class:{"bg-default":!e.isChecked,"bg-red":e.isChecked},on:{click:e.showStyle}}),e._v(" "),e._m(9)]),e._v(" "),n("div",{staticClass:"reg-btn"},[n("a",{staticClass:"reg-btn-info",on:{click:function(t){e.register_user(t)}}},[e._v("注册")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"reg-title-box"},[n("a",{staticClass:"reg-back",attrs:{onclick:"window.history.go(-1);"}}),e._v(" "),n("h2",{staticClass:"reg-title"},[e._v("注册磁易购社区")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("手机"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("验证码"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("密码"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("确认密码"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"who"},[n("div",{staticClass:"my-namee",staticStyle:{display:"inline-block"}},[e._v("我是")]),e._v(" "),n("div",{staticClass:"who-am"},[n("div",{staticClass:"who-box"},[n("span",{staticClass:"radio-img account_company",attrs:{id:"account_company"}})]),e._v(" "),n("div",{staticClass:"who-box"},[n("span",{staticClass:"radio-img account_person",attrs:{id:"account_person"}})]),e._v(" "),n("div",{staticClass:"who-box",staticStyle:{display:"none"}},[n("span",{staticClass:"radio-img account_tec",attrs:{id:"account_tec"}})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("名称"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("公司"),n("span",{staticStyle:{color:"red"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fileee"},[n("div",{staticClass:"card_n"},[e._v("名片")]),e._v(" "),n("div",{staticClass:"upload-file"},[n("label",{staticClass:"select-file"},[n("input",{staticClass:"docfile",attrs:{type:"file",name:"docfile",id:"fileImg"}})]),e._v(" "),n("img",{staticClass:"preview-img",attrs:{src:""}}),e._v(" "),n("div",{staticClass:"close"},[e._v("x")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agreement"},[e._v("本人同意并接受"),n("a",{attrs:{href:"http://www.xxx.com"}},[e._v("《平台注册声明》")])])}]}}});
//# sourceMappingURL=6.f9a2ad1bad70a9d39931.js.map