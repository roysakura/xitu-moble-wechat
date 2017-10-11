webpackJsonp([1],{"09af":function(t,a){t.exports={name:"vue-chartjs",version:"2.8.6",description:"vue.js wrapper for chart.js",author:"Jakub Juszczak <jakub@posteo.de>",homepage:"http://vue-chartjs.org",license:"MIT",contributors:[{name:"Thorsten Lünborg",web:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",web:"https://github.com/jcalonso"}],maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",web:"http://www.jakubjuszczak.de"}],repository:{type:"git",url:"git+ssh://git@github.com:apertureless/vue-chartjs.git"},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],main:"dist/vue-chartjs.js",unpkg:"dist/vue-chartjs.full.min.js",module:"es/index.js","jsnext:main":"es/index.js",files:["src","dist","es"],scripts:{dev:"node build/dev-server.js",build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",unit:"karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",prepublish:"yarn run lint && yarn run test && yarn run build"},dependencies:{"lodash.merge":"^4.6.0"},peerDependencies:{"chart.js":"^2.6.0",vue:"^2.4.2"},devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.25.0","babel-loader":"^7.0.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.6.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.4.2","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.2.2","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.4.2",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},engines:{node:">=6.9.0"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},_from:"vue-chartjs@2.8.6",_resolved:"http://registry.npm.taobao.org/vue-chartjs/download/vue-chartjs-2.8.6.tgz"}},"24At":function(t,a,e){"use strict";function s(t){e("4qJ/")}var i=e("A/lS"),n=e("L/tQ"),r=e("J0+h"),o=s,c=r(i.a,n.a,o,"data-v-7d4975ff",null);a.a=c.exports},"4qJ/":function(t,a){},"87e4":function(t,a){},"A/lS":function(t,a,e){"use strict";(function(t){var s=e("acZd"),i=e("c3o8");a.a={components:{LineExample:s.a},data:function(){return{mData:{},options:{tooltips:{intersect:!0},animation:{duration:1e3},responsive:!0,maintainAspectRatio:!1},mPriceData:{},month:"1",mLabels:[],mMonthDatas:[],isShowMap:!1,allLookData:[],gradient:null}},watch:{$route:function(t){var a=this;/pricedetail\/\u4e00-\u9fa5/.test(t.path)&&(a.getDetailData(a.$route.params.priceName),a.getMonthMoreData(a.month,a.$route.params.priceName))}},mounted:function(){var a=this;a.getDetailData(a.$route.params.priceName),a.getMonthMoreData(this.month,a.$route.params.priceName),a.getAllLookData(),t("#sort .col").click(function(e){switch(t(this).addClass("on").siblings().removeClass("on"),t(this).html()){case"一月":a.month="1";break;case"三月":a.month="3";break;case"半年":a.month="6";break;case"一年":a.month="12"}a.getMonthMoreData(a.month,a.$route.params.priceName)})},methods:{goNewDetail:function(t){window.location.href="http://m.ciyigou.com/mobile/index#/newsdetail/"+t},getAllLookData:function(){var t=this;e.i(i.a)().then(function(a){t.allLookData=a.data.data.detail},function(t){})},goBackPage:function(){window.history.go(-1)},getMonthMoreData:function(t,a){var s=this;e.i(i.b)(a,t).then(function(t){s.mMonthDatas=[],s.mLabels=[],s.mMonthDatas=t.data.data.detail;var a=s.mMonthDatas.length;s.isShowMap=a>0;var e={};e.labels=[],e.datasets=[];var i=s.$refs.mycanvas.$refs.canvas.getContext("2d");s.gradient=i.createLinearGradient(0,0,0,450),s.gradient.addColorStop(0,"rgba(30,144,255,1)"),s.gradient.addColorStop(.1,"rgba(151,187,205,1)"),s.gradient.addColorStop(.2,"rgba(151,187,205,0.1)"),s.gradient.addColorStop(.3,"rgba(151,187,205,0.2)"),s.gradient.addColorStop(.4,"rgba(151,187,205,0.2)"),s.gradient.addColorStop(.5,"rgba(30,144,255,0.2)"),s.gradient.addColorStop(.6,"rgba(30,144,255,0.1)"),s.gradient.addColorStop(.7,"rgba(30,144,255,0.1)"),s.gradient.addColorStop(.8,"rgba(30,144,255,0.1)"),s.gradient.addColorStop(.9,"rgba(30,144,255,0.1)"),s.gradient.addColorStop(1,"rgba(30,144,255,0.1)");for(var n={label:"稀土日均价",data:[],backgroundColor:s.gradient,borderWidth:1},r=0;r<a;r++)s.mLabels.push(s.mMonthDatas[r].quote_date),n.data.push(s.mMonthDatas[r].avg_quote);e.datasets.push(n),e.labels=s.mLabels,s.mData=e},function(t){})},getDetailData:function(t){var a=this;e.i(i.c)(t).then(function(t){a.mPriceData=t.data.data.detail},function(t){})}}}}).call(a,e("tra3"))},C0lc:function(t,a,e){"use strict";function s(t){e("p86L")}var i=e("kelJ"),n=e("lhgX"),r=e("J0+h"),o=s,c=r(i.a,n.a,o,"data-v-302de568",null);a.a=c.exports},GTtC:function(t,a){},"L/tQ":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"price-detail-container"},[e("div",{staticClass:"m-top"},[e("span",{staticClass:"go_back",on:{click:function(a){t.goBackPage()}}},[t._v("返回")]),t._v(" "),e("span",{staticClass:"m-top-text"},[t._v(t._s(t.mPriceData.name))])]),t._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"top1"},[e("p",{staticClass:"name"},[t._v(t._s(t.mPriceData.name))]),t._v(" "),e("p",{staticClass:"from"},[t._v("数据来源：磁易购")])]),t._v(" "),e("div",{staticClass:"top2"},[e("div",{staticClass:"col col-xs-3"},[e("p",{staticClass:"tt"},[t._v("最高价格")]),t._v(" "),e("p",{staticClass:"fb"},[t._v(t._s(t.mPriceData.max_quote__max))])]),t._v(" "),e("div",{staticClass:"col col-xs-3"},[e("p",{staticClass:"tt"},[t._v("最低价格")]),t._v(" "),e("p",{staticClass:"fb"},[t._v(t._s(t.mPriceData.min_quote__min))])]),t._v(" "),e("div",{staticClass:"col col-xs-3"},[e("p",{staticClass:"tt"},[t._v("均价")]),t._v(" "),e("p",{staticClass:"fb"},[t._v(t._s(t.mPriceData.avg_quote__avg))])]),t._v(" "),e("div",{staticClass:"col col-xs-3"},[e("p",{staticClass:"tt"},[t._v("单位")]),t._v(" "),e("p",{},[t._v(t._s(t.mPriceData.unit))])])])]),t._v(" "),e("div",{staticClass:"chart-wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"canvas-area"},[e("div",{attrs:{id:"c-container"}},[e("line-example",{directives:[{name:"show",rawName:"v-show",value:t.isShowMap,expression:"isShowMap"}],ref:"mycanvas",attrs:{data:t.mData,options:t.options,width:400,height:200}})],1)])]),t._v(" "),e("div",{staticClass:"news-wrap"},[e("div",{staticClass:"tt"},[t._v("资讯")]),t._v(" "),e("div",{staticClass:"news-list"},t._l(t.allLookData,function(a){return e("a",{on:{click:function(e){t.goNewDetail(a.id)}}},[e("p",{staticClass:"cont"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(a.created_at))])])}))])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sort",attrs:{id:"sort"}},[e("div",{staticClass:"col-xs-3 col on"},[t._v("一月")]),t._v(" "),e("div",{staticClass:"col-xs-3 col"},[t._v("三月")]),t._v(" "),e("div",{staticClass:"col-xs-3 col"},[t._v("半年")]),t._v(" "),e("div",{staticClass:"col-xs-3 col"},[t._v("一年")])])}],n={render:s,staticRenderFns:i};a.a=n},M93x:function(t,a,e){"use strict";function s(t){e("87e4")}var i=e("h8+N"),n=e("YgT7"),r=e("J0+h"),o=s,c=r(i.a,n.a,o,null,null);a.a=c.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("2HEv"),i=e("M93x"),n=e("u28b"),r=e("YaEn"),o=e("tra3"),c=(e.n(o),e("GTtC")),l=(e.n(c),e("Y3Gt")),u=(e.n(l),e("BMa3")),d=e.n(u);s.default.config.productionTip=!1,d.a.defaults.baseURL="http://m.ciyigou.com:80",d.a.defaults.headers["Content-Type"]="application/json;charset=utf-8",s.default.use(n.a);var p=new n.a({mode:"history",base:"/rare/",scorllBehavior:function(){return{y:0}},routes:r.a});new s.default({el:"#app",router:p,template:"<App/>",components:{App:i.a}})},Q6YL:function(t,a,e){"use strict";a.a=function(){var t=new Date,a=t.getMonth()+1,e=t.getDate();return a>=1&&a<=9&&(a="0"+a),e>=0&&e<=9&&(e="0"+e),t.getFullYear()+"-"+a+"-"+e}},WLIv:function(t,a,e){function s(t){return e(i(t))}function i(t){var a=n[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var n={"./af":"MZ/r","./af.js":"MZ/r","./ar":"2SrI","./ar-dz":"5K7w","./ar-dz.js":"5K7w","./ar-kw":"685M","./ar-kw.js":"685M","./ar-ly":"XmPa","./ar-ly.js":"XmPa","./ar-ma":"rSD6","./ar-ma.js":"rSD6","./ar-sa":"KHlb","./ar-sa.js":"KHlb","./ar-tn":"8IHL","./ar-tn.js":"8IHL","./ar.js":"2SrI","./az":"YOCL","./az.js":"YOCL","./be":"4aDo","./be.js":"4aDo","./bg":"hVm5","./bg.js":"hVm5","./bn":"3SLs","./bn.js":"3SLs","./bo":"5qzm","./bo.js":"5qzm","./br":"1+vN","./br.js":"1+vN","./bs":"CLFx","./bs.js":"CLFx","./ca":"tQa5","./ca.js":"tQa5","./cs":"CVPH","./cs.js":"CVPH","./cv":"WjBq","./cv.js":"WjBq","./cy":"6fEV","./cy.js":"6fEV","./da":"dA0k","./da.js":"dA0k","./de":"PmB6","./de-at":"RX7Q","./de-at.js":"RX7Q","./de-ch":"eoKO","./de-ch.js":"eoKO","./de.js":"PmB6","./dv":"/2GC","./dv.js":"/2GC","./el":"dqCQ","./el.js":"dqCQ","./en-au":"9tLW","./en-au.js":"9tLW","./en-ca":"aVgu","./en-ca.js":"aVgu","./en-gb":"ZmRN","./en-gb.js":"ZmRN","./en-ie":"a0aM","./en-ie.js":"a0aM","./en-nz":"avAl","./en-nz.js":"avAl","./eo":"F/Pz","./eo.js":"F/Pz","./es":"Pklo","./es-do":"fu1J","./es-do.js":"fu1J","./es.js":"Pklo","./et":"E0Es","./et.js":"E0Es","./eu":"DAAj","./eu.js":"DAAj","./fa":"l8vI","./fa.js":"l8vI","./fi":"oHAo","./fi.js":"oHAo","./fo":"i5zi","./fo.js":"i5zi","./fr":"itWY","./fr-ca":"r8ui","./fr-ca.js":"r8ui","./fr-ch":"F+fs","./fr-ch.js":"F+fs","./fr.js":"itWY","./fy":"SWEK","./fy.js":"SWEK","./gd":"6z9i","./gd.js":"6z9i","./gl":"uII7","./gl.js":"uII7","./gom-latn":"lZMt","./gom-latn.js":"lZMt","./he":"rHed","./he.js":"rHed","./hi":"B9Ct","./hi.js":"B9Ct","./hr":"Kscr","./hr.js":"Kscr","./hu":"0+t1","./hu.js":"0+t1","./hy-am":"7uVc","./hy-am.js":"7uVc","./id":"fKUc","./id.js":"fKUc","./is":"X6sm","./is.js":"X6sm","./it":"yT5j","./it.js":"yT5j","./ja":"yBT0","./ja.js":"yBT0","./jv":"Pbao","./jv.js":"Pbao","./ka":"z24t","./ka.js":"z24t","./kk":"PNoM","./kk.js":"PNoM","./km":"sx5x","./km.js":"sx5x","./kn":"KEXE","./kn.js":"KEXE","./ko":"Mpd7","./ko.js":"Mpd7","./ky":"0Owf","./ky.js":"0Owf","./lb":"TJQU","./lb.js":"TJQU","./lo":"/XLp","./lo.js":"/XLp","./lt":"V4m7","./lt.js":"V4m7","./lv":"fnIC","./lv.js":"fnIC","./me":"ERFu","./me.js":"ERFu","./mi":"XWYz","./mi.js":"XWYz","./mk":"ta5z","./mk.js":"ta5z","./ml":"9CN6","./ml.js":"9CN6","./mr":"jAG7","./mr.js":"jAG7","./ms":"2IbP","./ms-my":"dvkb","./ms-my.js":"dvkb","./ms.js":"2IbP","./my":"smKJ","./my.js":"smKJ","./nb":"UJSw","./nb.js":"UJSw","./ne":"sMpF","./ne.js":"sMpF","./nl":"pCCv","./nl-be":"Kdoe","./nl-be.js":"Kdoe","./nl.js":"pCCv","./nn":"qp9e","./nn.js":"qp9e","./pa-in":"iv9Z","./pa-in.js":"iv9Z","./pl":"B0bw","./pl.js":"B0bw","./pt":"VITF","./pt-br":"k2Hi","./pt-br.js":"k2Hi","./pt.js":"VITF","./ro":"6Xwq","./ro.js":"6Xwq","./ru":"5wIR","./ru.js":"5wIR","./sd":"e8j/","./sd.js":"e8j/","./se":"f8oB","./se.js":"f8oB","./si":"cYbR","./si.js":"cYbR","./sk":"79e1","./sk.js":"79e1","./sl":"nI9g","./sl.js":"nI9g","./sq":"GhpG","./sq.js":"GhpG","./sr":"4SnW","./sr-cyrl":"qZQ+","./sr-cyrl.js":"qZQ+","./sr.js":"4SnW","./ss":"sAlL","./ss.js":"sAlL","./sv":"mrBI","./sv.js":"mrBI","./sw":"Sa/j","./sw.js":"Sa/j","./ta":"tcza","./ta.js":"tcza","./te":"tg83","./te.js":"tg83","./tet":"1uDJ","./tet.js":"1uDJ","./th":"yGpx","./th.js":"yGpx","./tl-ph":"HlKL","./tl-ph.js":"HlKL","./tlh":"LieX","./tlh.js":"LieX","./tr":"T4CU","./tr.js":"T4CU","./tzl":"scLB","./tzl.js":"scLB","./tzm":"JHAD","./tzm-latn":"IRrX","./tzm-latn.js":"IRrX","./tzm.js":"JHAD","./uk":"AfJp","./uk.js":"AfJp","./ur":"t4nw","./ur.js":"t4nw","./uz":"87iJ","./uz-latn":"C630","./uz-latn.js":"C630","./uz.js":"87iJ","./vi":"LqeL","./vi.js":"LqeL","./x-pseudo":"iHgk","./x-pseudo.js":"iHgk","./yo":"pXNo","./yo.js":"pXNo","./zh-cn":"xL1n","./zh-cn.js":"xL1n","./zh-hk":"TjCN","./zh-hk.js":"TjCN","./zh-tw":"lejb","./zh-tw.js":"lejb"};s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="WLIv"},YaEn:function(t,a,e){"use strict";var s=e("C0lc"),i=e("24At");a.a=[{path:"/pricelist",name:"PriceList",component:s.a},{path:"/pricedetail/:priceName",name:"PriceDetail",component:i.a},{path:"/",redirect:"/pricelist"}]},YgT7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],n={render:s,staticRenderFns:i};a.a=n},acZd:function(t,a,e){"use strict";var s=e("MyyY");e.n(s);a.a=s.Line.extend({props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)},watch:{options:function(){this.renderChart(this.data,this.options)},data:function(){console.log("数据的变化：",this.data),this.renderChart(this.data,this.options)}}})},c3o8:function(t,a,e){"use strict";function s(t){return c.a.get("/magnet/materialquotes/",{params:{quote_date:t}})}function i(t){return c.a.get("/magnet/detail/materialquotes/",{params:{name:t}})}function n(t,a){return c.a.get("/magnet/month/materialquotes/",{params:{name:t,quote_date_month:a}})}function r(){return c.a.get("http://m.ciyigou.com/api1.0/articleorders/")}a.d=s,a.c=i,a.b=n,a.a=r;var o=e("BMa3"),c=e.n(o)},"h8+N":function(t,a,e){"use strict";a.a={name:"app"}},kelJ:function(t,a,e){"use strict";var s=e("c3o8"),i=e("Q6YL");a.a={name:"PriceList",data:function(){return{priceList:[]}},mounted:function(){this.getPriceListData()},methods:{getPriceListData:function(){var t=this;e.i(s.d)(e.i(i.a)()).then(function(a){t.priceList=a.data.data.detail},function(t){})},goPriceDetailPage:function(t){this.$router.push({path:"/pricedetail/"+t,replace:!0})}}}},lhgX:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"price-list-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"price-list-title"},[e("span",{staticClass:"go_m-back",on:{click:function(a){t.goBackPage()}}},[t._v("返回")]),t._v("\n    稀土行情\n  ")]),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",{attrs:{id:"price_list"}},t._l(t.priceList,function(a){return e("tr",{staticClass:"title-thread",on:{click:function(e){t.goPriceDetailPage(a.name)}}},[e("td",[e("span",{staticClass:"xitu-name"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"my-t-info m-t-first-info",class:{up:"up"===a.flag,down:"down"===a.flag}},[t._v(t._s(a.min_quote)+"～"+t._s(a.max_quote)),e("span",{directives:[{name:"show",rawName:"v-show",value:"up"===a.flag,expression:"item.flag==='up'"}]},[t._v("↑")]),e("span",{directives:[{name:"show",rawName:"v-show",value:"down"===a.flag,expression:"item.flag==='down'"}]},[t._v("↓")])])]),t._v(" "),e("td",{staticClass:"my-t-info",class:{up:"up"===a.flag,down:"down"===a.flag}},[t._v(t._s(a.avg_quote)),e("span",{directives:[{name:"show",rawName:"v-show",value:"up"===a.flag,expression:"item.flag==='up'"}]},[t._v("↑")]),e("span",{directives:[{name:"show",rawName:"v-show",value:"down"===a.flag,expression:"item.flag==='down'"}]},[t._v("↓")])]),t._v(" "),e("td",{staticClass:"my-t-info"},[t._v(t._s(a.unit))]),t._v(" "),e("td",{staticClass:"my-t-info"},[t._v(t._s(a.quote_date))])])}))])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"xitu-name-info"},[t._v("名称")]),t._v(" "),e("th",[t._v("均价")]),t._v(" "),e("th",[t._v("单位")]),t._v(" "),e("th",[t._v("日期")])])])}],n={render:s,staticRenderFns:i};a.a=n},p86L:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.409267c43c5eaffbc254.js.map