## 图片转base64

``` javascript
// 返回一个 Promise
export function readFile(file, resultType = 'dataUrl') {
  return new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = event => {
      resolve(event.target.result)
    }

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file)
    } else if (resultType === 'text') {
      reader.readAsText(file)
    }
  })
}
```

## 使用方法

``` vue
<template>
  <input type="file" accept="image/*" @change="onChange" /> 
</template>

<script>
export default {
  methods: {
    onChange(event) {
      let { files } = event.target
      
      files = files.length === 1 ? files[0] : [].slice.call(files)
      
      this.readFile(files)
    },
    readFile(files) {
      Promise.all(files.map(file => readFile(file, 'dataUrl'))).then(contents =>{
        const fileList = files.map((file, index) => ({
          file,
          content: contents[index]
        }))
      })
    }
  }
}
</script>
```
