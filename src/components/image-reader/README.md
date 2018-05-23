---
title: ImageReader 图片选择器
preview: https://didi.github.io/mand-mobile/examples/#/image-reader
---

用于相册照片读取或拉起拍照

### 引入

```javascript
import { ImageReader } from 'mand-mobile'
import imageProcessor from 'mand-mobile/lib/image-reader/image-processor' // 图片处理插件，用法参考#imageProcessor

Vue.component(ImageReader.name, ImageReader)
```

### 代码演示
<!-- DEMO -->

### API

#### ImageReader Props
|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|name|标识|String|-|可用于区分多个选择器|
|size|图片尺寸限制|String/Number|-|单位`kb`|
|mime|支持图片类型|Array|`*`|如`['jpeg','png']`|
|is-camera-only|是否只支持拍照|Boolean|`false`|-|
|is-multiple|是否支持选择多张|Boolean|`false`|-|
|amount|选择多张|Number|-|只在`is-multiple`为`true`时有效|

#### ImageReader Events

##### @select
图片选择完成事件，还未开始读取

##### @complete(name, { dataUrl, blob })
图片选择读取完成事件

|属性 | 说明 | 类型|
|----|-----|------|
|name|选择器标识|String|
|dataUrl|图片Base64|String|
|blob|图片Blob对象，可用于`formData`|Blob|

### imageProcessor

用于图片轴向修正，图片质量压缩，宽高控制

#### 引入

```javascript
import imageProcessor from 'mand-mobile/lib/image-reader/image-processor'

/**
 * options 图片处理配置
 * fn(dataUrl, blob) 处理完成回调
 * @return Promise({dataUrl, blob})
 */
imageProcessor(options[, fn])

```

#### options

|属性 | 说明 | 类型| 备注|
|----|-----|------|------|
|dataUrl|图片Base64|String|-|
|width|图片宽度|Number|单位`px`, 宽度超出时等比缩放|
|height|图片高度|Number|单位`px`, 高度超出时等比缩放|
|quality|图片质量|Number|取值范围`0-1`|
