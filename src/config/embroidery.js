import { getShoeStyle } from './shoeStyle'

export const getFontFamily = function () { // 字体名，字体样式已经写在全局样式中，如：text-Arial
  return ['Arial', 'Cambria', 'Calibra', 'Century']
}

export const getFontFamilyClass = function () {
  return getFontFamily().filter((e) => {
    return 'text-' + e
  })
}

export const getFontColor = function () {
  return [
    {
      id: 1,
      color: '黑色',
      zhColor: '黑',
      enColor: 'Black',
      code: '#000'
    },
    {
      id: 2,
      color: '11C灰',
      zhColor: '灰',
      enColor: 'Gray',
      code: '#54565b'
    },
    {
      id: 3,
      color: '白色',
      zhColor: '白',
      enColor: 'White',
      code: '#fff'
    },
    {
      id: 4,
      color: '1797C紅',
      zhColor: '红',
      enColor: 'Red',
      code: '#d0343a'
    },
    {
      id: 5,
      color: '172C橙',
      zhColor: '橙',
      enColor: 'Origin',
      code: '#ff4814'
    },
    {
      id: 6,
      color: '102C黄',
      zhColor: '黄',
      enColor: 'Yellow',
      code: '#fde300'
    },
    {
      id: 7,
      color: '360C绿',
      zhColor: '绿',
      enColor: 'Green',
      code: '#6bc04b'
    },
    {
      id: 8,
      color: '2935C藍',
      zhColor: '蓝',
      enColor: 'Blue',
      code: '#0056b8'
    },
    {
      id: 9,
      color: '2612C紫',
      zhColor: '紫',
      enColor: 'Purple',
      code: '#7b2682'
    },
    {
      id: 10,
      color: '玫瑰红',
      zhColor: '粉红',
      enColor: 'Pink',
      code: '#e60895'
    }
  ]
}

export const getEmbroidery = function () {
  var shoeStyles = getShoeStyle()
  var f = getFontFamily()
  return [
    {
      shoeStyle: shoeStyles[0], // 鞋子品牌
      partId: 'c', // 部件id：前能量带
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'front' // 视角
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'a', // 部件id：鞋帮
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'side' // 视角
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'f', // 部件id：前能量带
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'front' // 视角
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'h', // 部件id：大身侧面
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'side' // 视角
    },
    {
      shoeStyle: shoeStyles[2], // 鞋子品牌
      partId: 'b', // 部件id：前能量带
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'front' // 视角
    },
    {
      shoeStyle: shoeStyles[3], // 鞋子品牌
      partId: 'd', // 部件id：前能量带
      content: '', // 文字内容
      fontFamily: f[0], // 字体
      fontColor: 1, // 字体颜色 id
      photo: '', // 自定义图片名字
      imgBase64: '', // 图片字符串
      imgName: '', // 图片名字（先上传后获得图片名字）
      angle: 'front' // 视角
    }
  ]
}

export const getEmbroideryByShoeStyleId = function (id) {
  if (typeof id !== 'number') {
    id = id - ''
    if (typeof id !== 'number') {
      throw Error('the id to getEmbroideryByShoeStyleId is not a number')
    }
  }
  if (id < 0) {
    throw Error('the id to getEmbroideryByShoeStyleId is illegal')
  }
  return getEmbroidery().filter((e) => {
    return id === e.shoeStyle.id
  })
}

export const getFontColorById = function (id) {
  if (typeof id !== 'number') {
    id = id - ''
    if (typeof id !== 'number') {
      throw Error('the id to getEmbroideryByShoeStyleId is not a number')
    }
  }
  if (id < 0) {
    throw Error('the id to getEmbroideryByShoeStyleId is illegal')
  }
  var list = getFontColor()
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i]
  }
  return {}
}
