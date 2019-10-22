## vue开发公众号中，jweixin的一些API使用方法

::: tip
在调用jweixin的API之前，必须先通过config接口注入权限验证配置，后续我还会写一篇Android、IOS的权限验证。
:::

```javascript
wx.chooseWXPay({
  timestamp: 0, // 支付签名时间戳...
  nonceStr: '', // 支付签名随机串，不长于 32 位
  package: '', // 统一支付接口返回的prepay_id参数值，...
  signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
  paySign: '', // 支付签名
  success: function (res) {
    // 支付成功后的回调函数
  }
});
```

```vue
<template>
  <van-button type="primary" block @click="wxPay">确认支付</van-button>
</template>

<script>
  // api
  import {createTrade} from '@/api/payment'
  // vuex
  import {mapGetters} from 'vuex'
  
  export default {
      data() {
        return {
          dataForm: {
            code: 'xxxxxxxxxxxxxx',
            channel: 1
          },
        }
      },
      computed: {
        ...mapGetters([
          'wechat_ready'
        ])
      },
      methods: {
        wxPay() {
          const self = this
          if (this.wechat_ready) {
            createTrade(this.dataForm).then((res) => {
              if (res.status !== 1) {
                this.$toast(`status: ${res.status} , ${res.msg}`)
                return false
              }
              const options = JSON.parse(res.data)
              options.success = function () {
                self.$toast({
                  message: '支付成功',
                  duration: 1800,
                  onClose: () => {
                    self.$router.push({path: '/order'})
                  }
                })
              }
              options.cancel = function () {
                // self.$toast('cancel')
              }
              options.fail = function () {
                // self.$toast('fail')
              }
              this.$wechat.chooseWXPay(options)
            })
          }
        }
      }
  }
</script>
```

::: tip
后端联调过程中，前端只需传入订单号，后端同事根据这个订单号生成支付签名并返回给前端，前端只需操作支付成功、支付取消、支付失败的逻辑即好。
:::
