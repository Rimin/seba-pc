import { getShoeStyle } from './shoeStyle'

export const getPartTypes = function () {
  return [ // 部件类型集合
    {
      name: 'cloth', // 部件类型名称
      type: 1, // 部件类型，面料：1，胶件：2
      detail: 1, // 部件细节
      id: 1 // 该部件 id
    },
    {
      name: 'glue', // 部件类型名称
      type: 2, // 部件类型
      detail: 1, // 部件细节： 普通
      id: 2 // 该部件 id
    },
    {
      name: 'glue', // 部件类型名称
      type: 2, // 部件类型
      detail: 2, // 部件细节 : 穿钉冬菇头
      id: 3 // 该部件 id
    },
    {
      name: 'glue', // 部件类型名称
      type: 2, // 部件类型
      detail: 3, // 部件细节 : 刀架
      id: 4, // 该部件 id
      hide: 0 // 0为显示，1为隐藏（单上鞋）
    },
    {
      name: 'glue', // 部件类型名称
      type: 2, // 部件类型
      detail: 4, // 部件细节 : 轮子
      id: 5, // 该部件 id
      hide: 0 // 0为显示，1为隐藏（单上鞋）
    }
  ]
}

/**
 * 每双鞋有很多部件，部件又分为胶件和非胶件，它们又使用不同的材料
 * 所以一个部件必须有的属性为：
 * 1. 该部件所属品牌
 * 2. 部件类型： 布件或胶件
 * 3. 唯一识别 id
 * 4. 中文名、英文名
 * 5. 使用的材料
 */

// 'HIGH_CARBON': {    // HIGH CARBON 品牌的部件名
//   'a': '大身内外/下包铮',
//   'b': '鞋头/大身饰花/上包铮',
//   'c': '前能量带',
//   'd': '眼排',
//   'e': '领口饰花/利仔饰花',
//   'f': '领口',

//   'g': '鞋头壳',
//   'h': '防磨片',
//   'i': '透气窗',
//   'j': '脚背护带/能量带',
//   'k': '脚背护带芭扣',
//   'l': '穿钉冬茹头',
//   'm': '后铮CUFF',
//   'n': '鞋带',
//   'o': '刀架',
//   'p': '轮子',
// },
//
// 'TRIX': {     // RIX 品牌的部件名
//   'a': '鞋帮',
//   'b': '鞋舌',
//   'c': '鞋帮能量带下片',
//   'd': '鞋帮能量带上片',
//   'e': '眼排',
//   'f': '前能量带',
//   'g': '鞋头',
//   'h': '大身',
//
//   'i': '脚背能量带',
//   'j': '脚背能量带芭扣',
//   'k': '防磨片',
//   'l': '三角CUFF',
//   'm': '鞋带',
//   'n': '刀架',
//   'o': '轮子',
// },

export const getShoeParts = function () {
  var shoeStyles = getShoeStyle()
  var partTypes = getPartTypes()
  return [ // 具体部件
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'a', // 部件 id，用于识别是哪个部位的部件
      zhName: '大身内外/下包铮', // 中文名称
      enName: 'Main Upper(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'b', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋头/大身饰花/上包铮', // 中文名称
      enName: 'Toe Part(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'c', // 部件 id，用于识别是哪个部位的部件
      zhName: '前能量带', // 中文名称
      enName: 'Toe Strap(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'd', // 部件 id，用于识别是哪个部位的部件
      zhName: '眼排', // 中文名称
      enName: 'Eyelet Part(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'e', // 部件 id，用于识别是哪个部位的部件
      zhName: '领口饰花/利仔饰花', // 中文名称
      enName: 'Tongue(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'f', // 部件 id，用于识别是哪个部位的部件
      zhName: '领口', // 中文名称
      enName: 'Collar(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'g', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋头壳', // 中文名称
      enName: 'Toe Cap', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'h', // 部件 id，用于识别是哪个部位的部件
      zhName: '防磨片', // 中文名称
      enName: 'Abrasive Pad', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'i', // 部件 id，用于识别是哪个部位的部件
      zhName: '透气窗', // 中文名称
      enName: 'Side Window', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'j', // 部件 id，用于识别是哪个部位的部件
      zhName: '脚背护带/能量带', // 中文名称
      enName: 'Double Strap', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'k', // 部件 id，用于识别是哪个部位的部件
      zhName: '脚背护带芭扣', // 中文名称
      enName: 'Spider Buckle', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[2], // 部件类型： 布件或胶件
      id: 'l', // 部件 id，用于识别是哪个部位的部件
      zhName: '穿钉冬茹头', // 中文名称
      enName: 'Cuff Button', // 英文名称
      material: 8 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'm', // 部件 id，用于识别是哪个部位的部件
      zhName: '后铮CUFF', // 中文名称
      enName: 'CUFF', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'n', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋带', // 中文名称
      enName: 'Lace', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[3], // 部件类型： 布件或胶件
      id: 'o', // 部件 id，用于识别是哪个部位的部件
      zhName: '刀架', // 中文名称
      enName: 'Flat Frame', // 英文名称
      material: 12 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[0], // 该部件所属品牌
      partType: partTypes[4], // 部件类型： 布件或胶件
      id: 'p', // 部件 id，用于识别是哪个部位的部件
      zhName: '轮子', // 中文名称
      enName: 'Wheels', // 英文名称
      material: 17 // 使用材料的 id
    },

    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'a', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋帮', // 中文名称
      enName: 'Collar(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'b', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋舌', // 中文名称
      enName: 'Tongue(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'c', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋帮能量带下片', // 中文名称
      enName: 'Collar strap (Lower)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'd', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋帮能量带上片', // 中文名称
      enName: 'Collar strap (Upper)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'e', // 部件 id，用于识别是哪个部位的部件
      zhName: '眼排', // 中文名称
      enName: 'Eyelet Part(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'f', // 部件 id，用于识别是哪个部位的部件
      zhName: '前能量带', // 中文名称
      enName: 'Toe Strap(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'g', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋头', // 中文名称
      enName: 'Toe Part(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[0], // 部件类型： 布件或胶件
      id: 'h', // 部件 id，用于识别是哪个部位的部件
      zhName: '大身侧面', // 中文名称
      enName: 'Main Upper(PU)', // 英文名称
      material: 0 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'i', // 部件 id，用于识别是哪个部位的部件
      zhName: '脚背能量带', // 中文名称
      enName: 'Double Strap', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'j', // 部件 id，用于识别是哪个部位的部件
      zhName: '脚背能量带芭扣', // 中文名称
      enName: 'Spider Buckle', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'k', // 部件 id，用于识别是哪个部位的部件
      zhName: '防磨片', // 中文名称
      enName: 'Abrasive Pad', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'l', // 部件 id，用于识别是哪个部位的部件
      zhName: '三角CUFF', // 中文名称
      enName: 'CUFF', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[1], // 部件类型： 布件或胶件
      id: 'm', // 部件 id，用于识别是哪个部位的部件
      zhName: '鞋带', // 中文名称
      enName: 'Lace', // 英文名称
      material: 1 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[3], // 部件类型： 布件或胶件
      id: 'n', // 部件 id，用于识别是哪个部位的部件
      zhName: '刀架', // 中文名称
      enName: 'Flat Frame', // 英文名称
      material: 12 // 使用材料的 id
    },
    {
      shoeStyle: shoeStyles[1], // 该部件所属品牌
      partType: partTypes[4], // 部件类型： 布件或胶件
      id: 'o', // 部件 id，用于识别是哪个部位的部件
      zhName: '轮子', // 中文名称
      enName: 'Wheels', // 英文名称
      material: 17 // 使用材料的 id
    }
  ]
}

export const getPartsByShoeStyleId = function (shoeStyleId) {
  var shoeParts = getShoeParts()
  return shoeParts.filter((e) => {
    return e.shoeStyle.id === shoeStyleId
  })
}

export const getPartsByIdAndShoeStyleId = function (shoeStyleId, id) {
  var shoeParts = getShoeParts()
  var arr = shoeParts.filter((e) => {
    return e.id === id && e.shoeStyle.id === shoeStyleId
  })
  return arr[0]
}
