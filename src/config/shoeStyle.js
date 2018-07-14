const shoeStyle = [   // 品牌集合
  {
    name: 'HIGH_CARBON',    // 品牌名称
    id: 1         // 品牌 id
  },
  {
    name: 'TRIX',    // 品牌名称
    id: 2         // 品牌 id
  },
]













function getStyleById(id){
  if(id<=0){
    throw Error('the id to getStyleById is illegal');
    return false;
  }
  return shoeStyle[id - 1];
}

function getStyleNameById(id){
  if(id<=0){
    throw Error('the id to getStyleNameById is illegal');
    return false;
  }
  return getStyleById(id).name;
}




export default {
  shoeStyles: shoeStyle,
  getStyleById: getStyleById,
  getStyleNameById: getStyleNameById,
}