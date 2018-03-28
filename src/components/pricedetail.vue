<template>
  <div class="price-detail-container">
    <div class="m-top">
      <span class="go_back" @click="goBackPage()">返回</span>
      <span class="m-top-text">{{mPriceData.name}}</span>
    </div>
    <div class="top">
      <div class="top1">
        <p class="name">{{mPriceData.name}}</p>
        <p class="from guige">规格：{{mPriceData.specifications}}</p>
        <p class="from">数据来源：{{mPriceData.source}}</p>
      </div>
      <div class="top2">
        <div class="col col-xs-3">
          <p class="tt">最高价格</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down' ,'detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down')}">{{mPriceData.max_quote}}</p>
        </div>
        <div class="col col-xs-3">
          <p class="tt">最低价格</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.min_quote}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">均价</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.avg_quote}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">跌涨</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.change}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">单位</p>
          <p class="tt">{{mPriceData.unit}}</p>
        </div>
      </div>
    </div>

    <div class="chart-wrap">
      <div class="sort" id="sort">
        <div class="col-xs-3 col on">一月</div>
        <div class="col-xs-3 col">三月</div>
        <div class="col-xs-3 col">半年</div>
        <div class="col-xs-3 col">一年</div>
      </div>
      <div class="canvas-area">
        <div id="c-container">
          <line-example
            :data="mData"
            :options="options"
            :width="400"
            :height="200"
            ref="mycanvas"
            v-show="isShowMap"
          >
          </line-example>
        </div>
      </div>
    </div>
    <div class="news-wrap">
      <div class="tt">资讯</div>
      <div class="news-list">
        <a @click="goNewDetail(item.id)" v-for="item in allLookData">
          <p class="cont">{{item.title}}</p>
          <p class="time">{{item.created_at}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入chart组件模拟数据
//  import options from '../api/data';
  import LineExample from './lineMarker.js'
  import {getMonthData} from '../api/pricelist'
  import {getMonthDataByMonthName} from '../api/pricelist'
  import {getLookAll} from '../api/pricelist'
  import timeUtil from '../utils/timeutil'
  import wx from 'weixin-js-sdk';
  import {getSignInfo} from '../api/pricelist'
  export default{
    components: {
      LineExample
    },
    data() {
      return {
       /* id: 'test',
        option: options.bar*/
        mData: {
         /* labels: ['2017-8-10','2017-8-11'],
          datasets: [{
            label: '稀土日均价',
            data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
            backgroundColor: '#f87979',
//            backgroundColor: '#0295f2',
            borderWidth: 1
          }]*/
        },
        options: {
          title : {
            //是否显示，默认否          --》 Boolean
            display : true,
            //标题显示位置                --》 String
            //'top', 'left', 'bottom', 'right'.
            position : "top",
            //宽屏布局  TODO            --》 Boolean
            //标题是否贴边显示、全屏居中
            fullWidth : true,
            //标题样式
            fontSize : 12,
            fontFamily : "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontColor : "bold",
            //标题上下边距                --》 Number
            //            padding : 10,
            //标题文本内容                --》 String
            text : "手指移至下方曲线上，可查看近日均价(元)"
          },
          legend : {
            labels : {
              //图例框宽度         --》 Number
              boxWidth : 40,
              //图例字体样式
              fontSize : 12,
              fontStyle : "normal",
              fontColor : "#666",
              fontFamily : "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              //图例上下边距            --》 Number
//              padding : 10,
              //图例生成时触发       --》 function
              generateLabels : function(chart) {},
              //是否以点显示图例      --》 Boolean
              //设置为true时boxWidth无效
              usePointStyle : false
            },
          },
          /*scales : {
            yAxes : [
                {
                  ticks : {
                    /!*beginAtZero: true,
                    steps: 100,
                    stepValue: 5,
                    max: 1000000*!/
                    min: 0,
                    max: 15000,
                    stepSize: 10000
                  }
                }
            ]
          },*/
          tooltips: {
            intersect: true
          },
          animation: {
            duration: 1000
          },
          responsive: true,
          maintainAspectRatio: false
        },
        mPriceData:{},
        month:"1",
        mLabels:[],//显示的标签
        mMonthDatas:[],//用来显示在图表是上的数据
        isShowMap:false,
        allLookData:[],
        gradient:null,
        flag:"",
        xituIcon:"http://chuantu.biz/t6/99/1508145943x2890208931.jpg"
      }
    },
    watch:{
      $route(to){
        //对传递的id进行验证(防止篡改)
        const _this = this;
        let reg=/pricedetail\/\d+/;
        if(reg.test(to.path)){
          if(_this.isWeiXin()){
            _this.getAsign();
          }else{
            _this.getDetailData(_this.$route.params.priceName);
            _this.getAllLookData();
          }
        }
      }
    },
    mounted(){
      const _this = this;
      if(this.isWeiXin()){
        this.getAsign();
      }else{
        _this.getDetailData(_this.$route.params.priceName);
        _this.getAllLookData();
      }
      $('#sort .col').click(function(event) {
        $(this).addClass('on').siblings().removeClass('on');
        switch ($(this).html()){
          case "一月":
            _this.month = "1";
              break;
          case "三月":
            _this.month = "3";
            break;
          case "半年":
            _this.month = "6";
            break;
          case "一年":
            _this.month = "12";
            break;
        }
        _this.getMonthMoreData(_this.month,_this.mPriceData.name,_this.mPriceData.specifications);
      });
    },
    methods:{
      /**
       * 判断是否是微信浏览器打开
       * */
      isWeiXin(){
        //判断是否是微信浏览器
        let ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          return true;
        } else {
          return false;
        }
      },
      getAsign(){
        const _this = this;
        //将这个动态的url传递给后端(便于后端进行签名操作)
        let url = encodeURIComponent(window.location.href.split('#')[0]);
        //请求分享获取到的签名信息
        getSignInfo("/api1.0/signatures/",url).then((res)=>{
          _this.initAsign(res);
        },(err)=>{
        });
      },
      /**
       * 初始化签名信息
       * */
      initAsign(res){
        const _this = this;
        if(res.status === 200){
          //从服务器端获取到必要的参数,将必要的信息进行初始化赋值
          let sinObj = res.data.data.detail;
          wx.config({
            debug: false,
            appId: sinObj.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
            timestamp:sinObj.timestamp.toString(), // 必填，生成签名的时间戳
            nonceStr: sinObj.nonceStr, // 必填，生成签名的随机串
            signature: sinObj.signature,// 必填，签名，见附录1
            //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
            jsApiList: [
              'onMenuShareAppMessage','onMenuShareTimeline',
              'onMenuShareQQ','onMenuShareQZone'
            ]
          });
          wx.ready(function () {
            _this.getDetailData(_this.$route.params.priceName);
            _this.getAllLookData();
          });
        }
      },
      goNewDetail(newsId){
          window.location.href = `http://m.ciyigou.com/mobile/index#/newsdetail/${newsId}`;
      },
      getAllLookData(){
        getLookAll().then((res)=>{
          this.allLookData = res.data.data.detail;
        },(err)=>{

        });
      },
      goBackPage(){
        window.history.go(-1);
      },
      /**
       * 获取当月更多的稀土数据
       * @param date：月份
       * @param name:对应的关键字
       */
      getMonthMoreData(date,name,spec){
        const _this = this;
        getMonthDataByMonthName(name,date,spec).then((res)=>{
          this.mMonthDatas = [];
          this.mLabels = [];
          this.mMonthDatas = res.data.data.detail;
          let len = this.mMonthDatas.length;
          len > 0 ? this.isShowMap = true : this.isShowMap = false;
          var mObj = {};
          mObj.labels = [];
          mObj.datasets = [];
          var mBackObj = this.$refs.mycanvas.$refs.canvas.getContext('2d');
          this.gradient = mBackObj.createLinearGradient(0, 0, 0, 450);
          this.gradient.addColorStop(0, 'rgba(0,144,255, 0.9)');
          this.gradient.addColorStop(0.5, 'rgba(0,144,255, 0.25)');
          this.gradient.addColorStop(1, 'rgba(0,144,255, 0)');
          //对数据进行设置
          var mRealData = {
              label: '日均价(元)',
              data: [],
              scaleOverride: true, //是否用硬编码重写y轴网格线
              scaleSteps: 6, //y轴刻度的个数
              scaleStepWidth: 20, //y轴每个刻度的宽度
              scaleStartValue: 0, //y轴的起始值
              pointDot: true, //是否显示点
              pointDotRadius: 3, //点的半径
              pointDotStrokeWidth: 2, //点的线宽
              datasetStrokeWidth: 1, //数据线的线宽
              //设置图标显示的颜色,这里下面三句可以不要
              borderWidth: 1,
              backgroundColor: this.gradient,
              //点的颜色                      --》 Color or Array<Color>
              pointBackgroundColor : "rgba(0,144,255, 0.5)",
              //点外圈宽度                 --》 Number or Array<Number>
              pointBorderWidth : 2,
              //点半径                       --》 Number or Array<Number>
              pointRadius : 2,
              // TODO                         --》 Number or Array<Number>
              pointHitRadius : 2,
              //鼠标悬浮时点半径              --》 Number or Array<Number>
              pointHoverRadius : 2,
              //鼠标悬浮时点的颜色         --》 Color or Array<Color>
              pointHoverBackgroundColor : "rgba(0,144,255, 0.5)",
              //鼠标悬浮时点边框颜色            --》 Color or Array<Color>
              pointHoverBorderColor : "rgba(0,144,255, 0.5)",
              //鼠标悬浮时点半径              --》 Number or Array<Number>
              pointHoverBorderWidth : 3,
              //是否绘制线条                    --》 Boolean
              showLine : true,
              //有空数据时是否绘制         --》 Boolean
              spanGaps : false,
            }
            mRealData.data = [];
            for(let i = 0 ;i<len;i++){
                this.mLabels.push(this.mMonthDatas[i].quote_date);
                mRealData.data.push(this.mMonthDatas[i].avg_quote);
            }
          mObj.datasets.push(mRealData);
          mObj.labels = this.mLabels;
          this.mData = mObj;
        },(err)=>{

        });
      },
      /**
       * 通过id获取对应稀土的详细信息
       * @param name
       */
      getDetailData(name){
        getMonthData(name,timeUtil()).then((res)=>{
            const _this = this;
            this.mPriceData = res.data.data.detail;
            console.log("获取到稀土详情信息:",this.mPriceData);
            _this.getMonthMoreData(_this.month,_this.mPriceData.name,_this.mPriceData.specifications);
            var str = window.location.href;
            var regEn1 = /[?]/im;
            if(regEn1.test(str) ) {
              var arr = str.split("?")[0];
              var arr1 = str.split("?")[1].split("#")[1];
              str = arr+"#"+arr1;
            }
          wx.onMenuShareTimeline({
            title: _this.mPriceData.name+"价格走势", // 分享标题
            link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: _this.xituIcon, // 分享图标
            success: function (res) {

            },
            cancel: function (res) {

            }
          });
          //分享给微信朋友
          wx.onMenuShareAppMessage({
            title: _this.mPriceData.name+"价格走势", // 分享标题
            desc: `由磁易购整理${_this.mPriceData.name}价格走势图`, // 分享描述
            link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: _this.xituIcon, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {

            },
            cancel: function (res) {

            }
          });
          //分享到QQ
          wx.onMenuShareQQ({
            title: _this.mPriceData.name+"价格走势", // 分享标题
            desc: `由磁易购整理${_this.mPriceData.name}价格走势图`, // 分享描述
            link: str, // 分享链接
            imgUrl: _this.xituIcon, // 分享图标
            success: function (res) {

            },
            cancel: function (res) {

            }
          });

          //分享到QQ空间
          wx.onMenuShareQZone({
            title: _this.mPriceData.name+"价格走势", // 分享标题
            desc: `由磁易购整理${_this.mPriceData.name}价格走势图`, // 分享描述
            link: str, // 分享链接
            imgUrl: _this.xituIcon, // 分享图标
            success: function (res) {

            },
            cancel: function (res) {

            }
          });
        },(err)=>{

        });
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/price-detail.css";
  body .news-wrap .news-list a{
    text-decoration: none;
  }
  .top .top1{
    text-align: left;
  }
  #test {
    width: 400px;
    height: 400px;
    margin: 40px auto;
  }
  .news-list{
    text-align: left;
  }
  .m-top{
    width: 100%;
    height: 40px;
    background: #003473;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    position: relative;
  }
  .m-top-text{

  }
  .go_back{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 25px;
    top: 0;
  }
  .go_back::before{
    content: "";
    width: 32px;
    height: 40px;
    background: url("../assets/images/arrow-right.png")no-repeat center;
    position: absolute;
    left: -30px;
    top: 0;
  }
  .detaildown{
    color: #00ba00;
  }

  .detailup{
    color: #dc0000;
  }
  .detaileq{
    color: #333333;
  }
  .tt{
    color: #aaa;
  }
</style>
