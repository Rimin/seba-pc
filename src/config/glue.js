import { getPartTypes } from './shoeParts'
export const getGlues = function () {
  let partTypes = getPartTypes()
  return [
    {
      partType: partTypes[1], // 普通胶件,所含有的颜色值一样
      id: 1,
      color: '黑色',
      zhColor: '黑',
      enColor: 'Black',
      code: '#000'
    },
    {
      partType: partTypes[1],
      id: 2,
      color: '白色',
      zhColor: '白',
      enColor: 'White',
      code: '#fff'
    },
    {
      partType: partTypes[1],
      id: 3,
      color: '1797C紅',
      zhColor: '红',
      enColor: 'Red',
      code: '#d0343a'
    },
    {
      partType: partTypes[1],
      id: 4,
      color: '102C黃',
      zhColor: '黄',
      enColor: 'Yellow',
      code: '#fde300'
    },
    {
      partType: partTypes[1],
      id: 5,
      color: '360C綠',
      zhColor: '绿',
      enColor: 'Green',
      code: '#6bc04b'
    },
    {
      partType: partTypes[1],
      id: 6,
      color: '2935C藍',
      zhColor: '蓝',
      enColor: 'Blue',
      code: '#0056b8'
    },
    {
      partType: partTypes[1],
      id: 7,
      color: '2612C紫',
      zhColor: '紫',
      enColor: 'Purple',
      code: '#7b2682'
    },
    {
      partType: partTypes[2], // 穿钉冬菇头
      id: 8,
      color: '亚黑',
      zhColor: '亚黑',
      enColor: 'Matt Black',
      code: '#000'
    },
    {
      partType: partTypes[2],
      id: 9,
      color: '亮金',
      zhColor: '亮金',
      enColor: 'Gold',
      code: '#fff2ab'
    },
    {
      partType: partTypes[2],
      id: 10,
      color: '亮银',
      zhColor: '亮银',
      enColor: 'Silver',
      code: '#f6f6f6'
    },
    {
      partType: partTypes[3], // 刀架
      id: 12,
      color: '亚黑',
      zhColor: '亚黑',
      enColor: 'Matt Black',
      code: '#000'
    },
    {
      partType: partTypes[3],
      id: 13,
      color: '亮金',
      zhColor: '亮金',
      enColor: 'Gold',
      code: '#fff2ab'
    },
    {
      partType: partTypes[3],
      id: 14,
      color: '孔雀蓝',
      zhColor: '蓝',
      enColor: 'Blue',
      code: 'Blue'
    },
    {
      partType: partTypes[3],
      id: 15,
      color: '017A-4g/L红',
      zhColor: '红',
      enColor: 'Red',
      code: 'Red'
    },
    {
      partType: partTypes[3],
      id: 16,
      color: '金属橙',
      zhColor: '橙',
      enColor: 'Origin',
      code: '#ff8a00'
    },
    {
      partType: partTypes[4], // 轮子
      id: 17,
      color: '黑色',
      zhColor: '黑',
      enColor: 'Black',
      code: '#000'
    },
    {
      partType: partTypes[4],
      id: 18,
      color: '11C灰',
      zhColor: '灰',
      enColor: 'Gray',
      code: '#54565b'
    },
    {
      partType: partTypes[4],
      id: 19,
      color: '白色',
      zhColor: '白',
      enColor: 'White',
      code: '#fff'
    },
    {
      partType: partTypes[4],
      id: 20,
      color: '1797C紅',
      zhColor: '红',
      enColor: 'Red',
      code: '#d0343a'
    },
    {
      partType: partTypes[4],
      id: 21,
      color: '172C橙',
      zhColor: '橙',
      enColor: 'Origin',
      code: '#ff4814'
    },
    {
      partType: partTypes[4],
      id: 22,
      color: '102C黄',
      zhColor: '黄',
      enColor: 'Yellow',
      code: '#fde300'
    },
    {
      partType: partTypes[4],
      id: 23,
      color: '360C绿',
      zhColor: '绿',
      enColor: 'Green',
      code: '#6bc04b'
    },
    {
      partType: partTypes[4],
      id: 24,
      color: '2935C藍',
      zhColor: '蓝',
      enColor: 'Blue',
      code: '#0056b8'
    },
    {
      partType: partTypes[4],
      id: 25,
      color: '2612C紫',
      zhColor: '紫',
      enColor: 'Purple',
      code: '#7b2682'
    },
    {
      partType: partTypes[4],
      id: 26,
      color: '玫瑰红',
      zhColor: '粉红',
      enColor: 'Pink',
      code: '#e60895'
    }
  ]
}

export const getGlueById = function (id) {
  if (typeof id !== 'number') {
    id = id - ''
    if (typeof id !== 'number') {
      throw Error('the id to getGlueById is not a number')
    }
  }
  if (id < 0 || !Number.isInteger(id)) {
    throw Error('the id to getGlueById is illegal')
  }
  let glue = getGlues()
  for (var i = 0; i < glue.length; i++) {
    if (glue[i].id === id) {
      return glue[i]
    }
  }
}

export const getGlueByPartsType = function (id) {
  if (typeof id !== 'number') {
    id = id - ''
    if (typeof id !== 'number') {
      throw Error('the id to getGlueByPartsType is not a number')
    }
  }
  if (id < 0 || !Number.isInteger(id)) {
    throw Error('the id to getGlueByPartsType is illegal')
  }
  return getGlues().filter((e) => {
    return e.partType.id === id
  })
}
