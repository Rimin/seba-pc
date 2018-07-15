import { shoeStyle } from './shoeStyle'

const partTypes = [    // 组件类型集合
  {
    name: 'cloth',   // 部件类型名称
    type: 1,         // 部件类型
    detail: 1,       // 部件细节
    id: 1,           // 该部件 id
  },
  {
    name: 'glue',   // 部件类型名称
    type: 2,       // 部件类型
    detail: 1,      // 部件细节： 普通
    id: 2          // 该部件 id
  },
  {
    name: 'glue',  // 部件类型名称
    type: 2,       // 部件类型
    detail: 2,     // 部件细节 : 穿钉冬菇头
    id: 3          // 该部件 id
  },
  {
    name: 'glue',  // 部件类型名称
    type: 2,       // 部件类型
    detail: 3,     // 部件细节 : 刀架
    id: 4          // 该部件 id
  },
  {
    name: 'glue',  // 部件类型名称
    type: 2,       // 部件类型
    detail: 4,     // 部件细节 : 轮子
    id: 5          // 该部件 id
  },
]

/**
 * 每双鞋有很多部件，部件又分为胶件和非胶件，它们又使用不同的材料
 * 所以一个部件必须有的属性为：
 * 1. 该部件所属品牌
 * 2. 部件类型： 布件或胶件
 * 3. 唯一识别 id 
 * 4. 中文名、英文名
 * 5. 使用的材料
 */

const shoeParts = [
  {
    shoeStyle: shoeStyle[0],   // 该部件所属品牌
    partType: partTypes[0],    // 部件类型： 布件或胶件
    id: 'a',     // 部件 id，用于识别是哪个部位的部件
    zhName: '大身内外/下包铮',  // 中文名称
    enName: '',   // 英文名称
    material: 0,   // 使用材料的 id 
  },
  {
    shoeStyle: shoeStyle[0],   // 该部件所属品牌
    partType: partTypes[0],    // 部件类型： 布件或胶件
    id: 'b',     // 部件 id，用于识别是哪个部位的部件
    zhName: '鞋头/大身饰花/上包铮',  // 中文名称
    enName: '',   // 英文名称
    material: 0,   // 使用材料的 id 
  },
  {
    shoeStyle: shoeStyle[0],   // 该部件所属品牌
    partType: partTypes[0],    // 部件类型： 布件或胶件
    id: 'c',     // 部件 id，用于识别是哪个部位的部件
    zhName: '前能量带',  // 中文名称
    enName: '',   // 英文名称
    material: 0,   // 使用材料的 id 
  }
]




export default {

}