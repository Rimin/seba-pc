const texture = [
  {
    name: '',
    type: 0,
    detail: 1,
    id: 0,
  },
  {
    name: '仿碳纤维',  // 纹理类别名称              1 ~ 11
    type: 1,      // 纹理类别
    detail: 1,    // 纹理细节
    id: 1        // 该纹理 id
  },
  {
    name: '菱形网格',  // 纹理类别名称              58 ~ 64
    type: 2,         // 纹理类别
    detail: 1,    // 纹理细节：大菱形纹理 
    id: 2        // 该纹理 id
  },
  {
    name: '菱形网格',  // 纹理类别名称               65
    type: 2,        // 纹理类别
    detail: 2,     // 纹理细节：小菱形纹理       
    id: 3          // 该纹理 id
  },
  {
    name: '蜂窝网格',  // 纹理类别名称               66 ~ 75
    type: 3,          // 纹理类别
    detail: 1,        // 纹理细节
    id: 4          // 该纹理 id
  },
  {
    name: '方形网格',  // 纹理类别名称                76 ~ 77 、  81 ~ 83
    type: 4,          // 纹理类别                    
    detail: 1,        // 纹理细节：国际象棋棋盘纹理
    id: 5            // 该纹理 id
  },
  {
    name: '方形网格',  // 纹理类别名称                78 ~ 79  、 84 ~ 85
    type: 4,           // 纹理类别      
    detail: 2,        // 纹理细节：斑马线纹理
    id: 6             // 该纹理 id
  },
]

const cloth = [
  {
    texture: texture[0],   // 纹理类型
    id: 0,            // 布料号码
    color: '黑色',         // 颜色
    zhColor: '黑',          // 中文颜色名
    enColor: 'black',     // 英文颜色名
    code: '#000',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 1,            // 布料号码
    color: '黑色',         // 颜色
    zhColor: '黑',          // 中文颜色名
    enColor: 'black',     // 英文颜色名
    code: '#000',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 2,            // 布料号码
    color: '白色',         // 颜色
    zhColor: '白',          // 中文颜色名
    enColor: 'white',     // 英文颜色名
    code: '#fff',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 3,            // 布料号码
    color: '187C红',         // 颜色
    zhColor: '红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#ab192d',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 4,            // 布料号码
    color: '299C蓝',         // 颜色
    zhColor: '蓝',          // 中文颜色名
    enColor: 'blue',     // 英文颜色名
    code: '#00a1e0',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 5,            // 布料号码
    color: '165C橙',         // 颜色
    zhColor: '橙',          // 中文颜色名
    enColor: 'orange',     // 英文颜色名
    code: '#ff681d',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 6,            // 布料号码
    color: '540C蓝',         // 颜色
    zhColor: '蓝',          // 中文颜色名
    enColor: 'blue',     // 英文颜色名
    code: '#003057',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 7,            // 布料号码
    color: '554C绿',         // 颜色
    zhColor: '绿',          // 中文颜色名
    enColor: 'green',     // 英文颜色名
    code: '#205b41',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 8,            // 布料号码
    color: '519C紫',         // 颜色
    zhColor: '紫',          // 中文颜色名
    enColor: 'purple',     // 英文颜色名
    code: '#5b325f',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 9,            // 布料号码
    color: '7685C蓝',         // 颜色
    zhColor: '蓝',          // 中文颜色名
    enColor: 'blue',     // 英文颜色名
    code: '#2c5697',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 10,            // 布料号码
    color: '877C银',         // 颜色
    zhColor: '银',          // 中文颜色名
    enColor: 'silver',     // 英文颜色名
    code: '#8a8d8e',         // 颜色编码
  },
  {
    texture: texture[1],   // 纹理类型
    id: 11,            // 布料号码
    color: '116C黃',         // 颜色
    zhColor: '黃',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#ffce00',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 58,            // 布料号码
    color: '黑色',         // 颜色
    zhColor: '黑',          // 中文颜色名
    enColor: 'black',     // 英文颜色名
    code: '#000',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 59,            // 布料号码
    color: '白色',         // 颜色
    zhColor: '白',          // 中文颜色名
    enColor: 'white',     // 英文颜色名
    code: '#fff',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 60,            // 布料号码
    color: '186C红',         // 颜色
    zhColor: '红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#cf102d',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 61,            // 布料号码
    color: '247C紫',         // 颜色
    zhColor: '紫',          // 中文颜色名
    enColor: 'purple',     // 英文颜色名
    code: '#c018a2',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 62,            // 布料号码
    color: '102C黄',         // 颜色
    zhColor: '黄',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#fde300',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 63,            // 布料号码
    color: '355C绿',         // 颜色
    zhColor: '绿',          // 中文颜色名
    enColor: 'green',     // 英文颜色名
    code: '#00953b',         // 颜色编码
  },
  {
    texture: texture[2],   // 纹理类型
    id: 64,            // 布料号码
    color: '151C橙',         // 颜色
    zhColor: '橙',          // 中文颜色名
    enColor: 'orange',     // 英文颜色名
    code: '#ff8400',         // 颜色编码
  },
  {
    texture: texture[3],   // 纹理类型
    id: 65,            // 布料号码
    color: '702C红',         // 颜色
    zhColor: '红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#d75d73',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 66,            // 布料号码
    color: '黑色',         // 颜色
    zhColor: '黑',          // 中文颜色名
    enColor: 'black',     // 英文颜色名
    code: '#000',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 67,            // 布料号码
    color: '白色',         // 颜色
    zhColor: '白',          // 中文颜色名
    enColor: 'white',     // 英文颜色名
    code: '#fff',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 68,            // 布料号码
    color: '199C红',         // 颜色
    zhColor: '红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#dc0032',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 69,            // 布料号码
    color: '2069C紫',         // 颜色
    zhColor: '紫',          // 中文颜色名
    enColor: 'purple',     // 英文颜色名
    code: '#a438a8',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 70,            // 布料号码
    color: '108C黃',         // 颜色
    zhColor: '黃',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#ffdb00',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 71,            // 布料号码
    color: '367C绿',         // 颜色
    zhColor: '绿',          // 中文颜色名
    enColor: 'green',     // 英文颜色名
    code: '#a3d55f',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 72,            // 布料号码
    color: '877C银',         // 颜色
    zhColor: '银',          // 中文颜色名
    enColor: 'silver',     // 英文颜色名
    code: '#8a8d8e',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 73,            // 布料号码
    color: '2174C蓝',         // 颜色
    zhColor: '蓝',          // 中文颜色名
    enColor: 'blue',     // 英文颜色名
    code: '#0076ce',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 74,            // 布料号码
    color: '103C黃',         // 颜色
    zhColor: '黃',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#c6aa00',         // 颜色编码
  },
  {
    texture: texture[4],   // 纹理类型
    id: 75,            // 布料号码
    color: '2046C红',         // 颜色
    zhColor: '红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#cf578a',         // 颜色编码
  },
  {
    texture: texture[5],   // 纹理类型
    id: 76,            // 布料号码
    color: '黑色',         // 颜色
    zhColor: '黑',          // 中文颜色名
    enColor: 'black',     // 英文颜色名
    code: '#000',         // 颜色编码
  },
  {
    texture: texture[5],   // 纹理类型
    id: 77,            // 布料号码
    color: '白色',         // 颜色
    zhColor: '白',          // 中文颜色名
    enColor: 'white',     // 英文颜色名
    code: '#fff',         // 颜色编码
  },
  {
    texture: texture[5],   // 纹理类型
    id: 81,            // 布料号码
    color: '2290C绿',         // 颜色
    zhColor: '绿',          // 中文颜色名
    enColor: 'green',     // 英文颜色名
    code: '#aadb1e',         // 颜色编码
  },
  {
    texture: texture[5],   // 纹理类型
    id: 82,            // 布料号码
    color: '877C银',         // 颜色
    zhColor: '银',          // 中文颜色名
    enColor: 'silver',     // 英文颜色名
    code: '#8a8d8e',         // 颜色编码
  },
  {
    texture: texture[5],   // 纹理类型
    id: 83,            // 布料号码
    color: '3005C蓝',         // 颜色
    zhColor: '蓝',          // 中文颜色名
    enColor: 'blue',     // 英文颜色名
    code: '#0075c9',         // 颜色编码
  },
  {
    texture: texture[6],   // 纹理类型
    id: 78,            // 布料号码
    color: '亮红',         // 颜色
    zhColor: '亮红',          // 中文颜色名
    enColor: 'red',     // 英文颜色名
    code: '#ff3c1f',         // 颜色编码
  },
  {
    texture: texture[6],   // 纹理类型
    id: 79,            // 布料号码
    color: '中紫',         // 颜色
    zhColor: '中紫',          // 中文颜色名
    enColor: 'purple',     // 英文颜色名
    code: '#4d008c',         // 颜色编码
  },
  {
    texture: texture[6],   // 纹理类型
    id: 80,            // 布料号码
    color: '012C黄',         // 颜色
    zhColor: '黄',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#ffd700',         // 颜色编码
  },
  {
    texture: texture[6],   // 纹理类型
    id: 84,            // 布料号码
    color: '117C黃',         // 颜色
    zhColor: '黄',          // 中文颜色名
    enColor: 'yellow',     // 英文颜色名
    code: '#cc9800',         // 颜色编码
  },
  {
    texture: texture[6],   // 纹理类型
    id: 85,            // 布料号码
    color: '11C灰',         // 颜色
    zhColor: '灰',          // 中文颜色名
    enColor: 'gray',     // 英文颜色名
    code: '#54565b',         // 颜色编码
  }
]

const getClothesByTextureId = (function(){
  var store = [];
  for(var i = 0; i<texture.length; i++){
    store.push([])
  };
  cloth.forEach((e,i)=>{
    store[e.texture.id].push(e);
  });
  return function(id){
    if(typeof id !== 'number') {
      id = id - '';
      if(typeof id !== 'number'){
        throw Error('the id to getClothesByTextureId is not a number');
        return;
      }
    }
    if(id < 0) {
      throw Error('the id to getClothesByTextureId is illegal');
      return;
    }
    return store[id - 1];
  }
})()

const getClothById = (function(){
  var storeNumber = -1;
  return function(id){
    if(typeof id !== 'number') {
      id = id - '';
      if(typeof id !== 'number'){
        throw Error('the id to getClothById is not a number');
        return;
      }
    }
    if(id < 0) {
      throw Error('the id to getClothById is illegal');
      return;
    }
    if(id === storeNumber) return cloth[storeNumber];
    for(var i = 0; i < cloth.length; i++){
      if(cloth[i].id === id){
        storeNumber = i;
        return cloth[i];
      }
    }
  }
})() 



export default {
  clothes: cloth,
  allTexture: texture,
  getClothesByTextureId: getClothesByTextureId,
  getClothById: getClothById,
}