import { getShoeStyle } from './shoeStyle'

export const getFontFamily = function () {
  const base1 = '\''
  const base2 = ',\'Hiragino Sans GB\',\'Microsoft Yahei\',\'微软雅黑\',\'宋体\',\\5b8b\\4f53,Tahoma,Arial,Helvetica,STHeiti;\''
  return [
    {
      id: 1, // 字体id
      name: 'Arial', // 字体名称
      fontFamily: base1 + 'arial' + base2 // 字体样式
    },
    {
      id: 2, // 字体id
      name: 'Cambria', // 字体名称
      fontFamily: base1 + 'cambria' + base2 // 字体样式
    },
    {
      id: 3, // 字体id
      name: 'Calibra', // 字体名称
      fontFamily: base1 + 'calibra' + base2 // 字体样式
    },
    {
      id: 4, // 字体id
      name: 'Century', // 字体名称
      fontFamily: base1 + 'century' + base2 // 字体样式
    }
  ]
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
  return [
    {
      shoeStyle: shoeStyles[0], // 鞋子品牌
      partId: 'c', // 部件id：前能量带
      fontFamily: 1, // 字体 id
      fontColor: 1, // 字体颜色 id
      photo: '' // 自定义图片
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'a', // 部件id：鞋帮
      fontFamily: 1, // 字体 id
      fontColor: 1, // 字体颜色 id
      photo: '' // 自定义图片
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'f', // 部件id：前能量带
      fontFamily: 1, // 字体 id
      fontColor: 1, // 字体颜色 id
      photo: '' // 自定义图片
    },
    {
      shoeStyle: shoeStyles[1], // 鞋子品牌
      partId: 'a', // 部件id：大身侧面
      fontFamily: 1, // 字体 id
      fontColor: 1, // 字体颜色 id
      photo: '' // 自定义图片
    }
  ]
}
