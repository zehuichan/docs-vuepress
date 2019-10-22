## vue开发公众号中，jweixin的一些API使用方法

::: tip
在调用jweixin的API之前，必须先通过config接口注入权限验证配置，后续我还会写一篇Android、IOS的权限验证。
:::

### 拍照或从手机相册中选图接口
```javascript
wx.uploadImage({
  localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
  isShowProgressTips: 1, // 默认为1，显示进度提示
  success: function (res) {
    var serverId = res.serverId; // 返回图片的服务器端ID
  }
});
```

### 获取本地图片接口
```javascript
wx.getLocalImgData({
  localId: '', // 图片的localID
  success: function (res) {
    var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
  }
});
```

### 上传功能一般需要uploadImage、getLocalImgData两个API配合使用

```vue
<template>
  <div class="uploader" @click="chooseImage">
    <i class="van-icon van-icon-plus van-uploader__upload-icon"></i>
  </div>
</template>

<script>
// vuex
import {mapGetters} from 'vuex'
  
export default {
  data() {
    return {
      dataForm: {
        main_pic: '',
      }
    }
  },
  computed: {
    ...mapGetters([
      'wechat_ready'
    ])
  },
  methods: {
    chooseImage(pic = 'main_pic') {
      const self = this
      if (this.wechat_ready) {
        this.$wechat.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            self.getLocalImgData(res.localIds[0], pic)
          }
        })
      }
    },
    getLocalImgData(localId, pic) {
      const self = this
      if (this.wechat_ready) {
        this.$wechat.getLocalImgData({
          localId: localId,
          success: (res) => {
            const localData = res.localData
            if (localData.includes('data:image')) {
              //苹果的直接赋值，默认生成'data:image/jpeg;base64,'的头部拼接
              self.dataForm[pic] = localData
            } else {
              //此处是安卓中的唯一得坑！在拼接前需要对localData进行换行符的全局替换
              //此时一个正常的base64图片路径就完美生成赋值到img的src中了
              self.dataForm[pic] = 'data:image/jpeg;base64,' + localData.replace(/\n/g, '')
            }
          }
        })
      }
    },
  }
}
</script>
```
