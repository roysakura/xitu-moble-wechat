<template>
  <div class="price-list-container">
    <div class="price-list-title" v-show="false">
      <span class="go_m-back" @click="goBackPage()">返回</span>
      稀土行情
    </div>
    <table class="table table-hover" v-show="noData">
      <thead>
      <tr>
        <th class="xitu-name-info">名称/价格区间</th>
        <th class="right-item head-item">均价</th>
        <th class="right-item head-item">单位</th>
        <th class="die-zhang-info">跌涨</th>
      </tr>
      </thead>
      <tbody id="price_list">
      <tr  v-for="item in priceList" @click="goPriceDetailPage(item.id)" class="title-thread">
        <td>
          <span class="xitu-name">{{item.name}}</span>
          <div :class="{'mup':item.flag==='up','mdown':item.flag==='down'}" class="my-t-info m-t-first-info">{{item.min_quote}}～{{item.max_quote}}<span v-show="item.flag==='up'">↑</span><span v-show="item.flag==='down'">↓</span></div>
        </td>
        <td :class="{'up':item.flag==='up','down':item.flag==='down' }" class="my-t-info right-item">{{item.avg_quote}}<span v-show="item.flag==='up'" >↑</span><span v-show="item.flag==='down'">↓</span></td>
        <td class="my-t-info right-item">{{item.unit}}</td>
        <td class="my-t-info ">
          <span class="my-tip-date">{{item.quote_date}}</span>
          <div class="tie-zhang-box" >
            <span class="m-di-zhang-tip" :class="{'mxitu-dizhang-up':item.flag==='up','mxitu-dizhang-down':item.flag==='down','mxitu-dizhang-eq':(item.flag!=='up' &&item.flag!=='down')}"><span v-show="item.flag==='up'">+</span>{{item.change}}</span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="none-layer" v-show="!noData">
      {{noDataText}}
    </div>
    <div class="none-layer" v-show="loading">
      加载中
    </div>
  </div>
</template>

<script>
  import {getBaoJia} from '../api/pricelist'
  import timeUtil from '../utils/timeutil'
  import {getSignInfo} from '../api/pricelist'
  import wx from 'weixin-js-sdk';
export default {
  name: 'PriceList',
  data () {
    return {
        priceList:[],
        noData:true,
        noDataText:'暂无数据',
        loading:false
    }
  },
  mounted(){
    if(this.isWeiXin()){
      this.getAsign();
    }else{
      this.getPriceListData();
    }

  },
  methods:{
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
          _this.getPriceListData();
        });
      }
    },
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
    /**
     * 获取当日的稀土报价信息
     * */
    getPriceListData(){
        const _this = this;
        this.loading = true;
      getBaoJia(timeUtil()).then((res)=>{
        this.priceList = [];
        this.loading = false;
         this.priceList = res.data.data.detail;
         const len = this.priceList.length;
         len > 0 ? this.noData = true : this.noData = false;
        len > 0 ? this.noDataText = '加载中' : this.noDataText = '暂无数据';
        var str = window.location.href;
        var regEn1 = /[?]/im;
        if(regEn1.test(str) ) {
          var arr = str.split("?")[0];
          var arr1 = str.split("?")[1].split("#")[1];
          str = arr+"#"+arr1;
        }
        wx.onMenuShareTimeline({
          title: timeUtil()+"稀土报价", // 分享标题
          link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: require("../assets/images/xitu-share-icon.jpg"), // 分享图标
          success: function (res) {

          },
          cancel: function (res) {

          }
        });
        //分享给微信朋友
        wx.onMenuShareAppMessage({
          title: timeUtil()+"稀土报价", // 分享标题
          desc: `点击稀土类目查看过往走势`, // 分享描述
          link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: require("../assets/images/xitu-share-icon.jpg"), // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function (res) {

          },
          cancel: function (res) {

          }
        });
        //分享到QQ
        wx.onMenuShareQQ({
          title: timeUtil()+"稀土报价", // 分享标题
          desc: `点击稀土类目查看过往走势`, // 分享描述
          link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: require("../assets/images/xitu-share-icon.jpg"), // 分享图标
          success: function (res) {

          },
          cancel: function (res) {

          }
        });

        //分享到QQ空间
        wx.onMenuShareQZone({
          title: timeUtil()+"稀土报价", // 分享标题
          desc: `点击稀土类目查看过往走势`, // 分享描述
          link: str, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: require("../assets/images/xitu-share-icon.jpg"), // 分享图标
          success: function (res) {

          },
          cancel: function (res) {

          }
        });
      },(err)=>{
        this.loading = false;
      });
    },
    /**
     * 跳转到稀土行情详情页
     * @param name
     */
    goPriceDetailPage(id){
      this.$router.push({path: `/pricedetail/${id}`, replace: true});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/price-list.css";

  .right-item{
    text-align: right;
  }
  .table-hover{
    width: 100%;
    height: auto;
  }
  .my-thread{
    width: 100%;
  }
  .xitu-name{
    display: block;
    padding: 10px 0;
  }
  .my-title-thread{
    height: 40px;
  }
  .my-t-info{
    padding: 10px 0;
    font-size: 14px;
  }
  .m-t-first-info{
    padding: 0;
  }
  .head-item{
    padding: 8px 0;
  }
  body, td, th, ul, li {
    font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
    padding: 0;
    margin: 0;
  }
  body{
    background: #fff;
  }
  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }
  .price-list-title{
    width: 100%;
    height: 40px;
    background: #003473;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  .go_m-back{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 25px;
    top: 0;
  }
  .go_m-back::before{
    content: "";
    width: 32px;
    height: 40px;
    background: url("../assets/images/arrow-right.png")no-repeat center;
    position: absolute;
    left: -30px;
    top: 0;
  }
  .tie-zhang-box{
    /*color: #ffffff;
    line-height: 14px;
    border-radius: 4px;
    margin-right: 10px;
    !*width: 50px;*!
    text-align: center;
    padding: 4px 6px;*/
    text-align: right;
    margin-top: 2px;
  }
  .m-di-zhang-tip{
    /*padding: 5px 10px;*/
    color: #ffffff;
    line-height: 14px;
    border-radius: 4px;
    margin-right: 10px;
    width: 58px;
    text-align: center;
    padding: 4px 6px;
    display: inline-block;
    font-size: 12px;
  }
  .my-tip-date{
    width: 100px;
    display: block;
    text-align: right;
  }
  .die-zhang-info{
    text-align: right;
    padding-right: 30px;
  }
</style>
