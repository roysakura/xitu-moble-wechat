
import PriceList from '@/components/pricelist'
import PriceDetail from '@/components/pricedetail'
export default [
    {
      path: '/pricelist',
      name: 'PriceList',
      component: PriceList
    },
    {
      path: '/pricedetail/:priceName',
      name: 'PriceDetail',
      component: PriceDetail
    },
  {
    path: '/',
    redirect: '/pricelist'
  }
  ]

