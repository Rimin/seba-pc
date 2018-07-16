// var shoeStyle =

export const getShoeStyle = function () {
  return [ // 品牌集合
    {
      name: 'HIGH_CARBON', // 品牌名称
      id: 1 // 品牌 id
    },
    {
      name: 'TRIX', // 品牌名称
      id: 2 // 品牌 id
    }
  ]
}
export const getStyleById = function (id) {
  if (id <= 0) {
    throw Error('the id to getStyleById is illegal')
  }
  return getShoeStyle()[id - 1]
}
export const getStyleNameById = function (id) {
  if (id <= 0) {
    throw Error('the id to getStyleNameById is illegal')
  }
  return getStyleById(id).name
}
