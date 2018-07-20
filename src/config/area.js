export const getArea = function () {
  return [
    {
      zhName: '中国', // 中文名
      enName: 'CHN', // 英文名
      id: 1 // 地区 id
    },
    {
      zhName: '香港', // 中文名
      enName: 'HK', // 英文名
      id: 2 // 地区 id
    },
    {
      zhName: '台湾', // 中文名
      enName: 'TWN', // 英文名
      id: 3 // 地区 id
    },
    {
      zhName: '欧洲', // 中文名
      enName: 'EUP', // 英文名
      id: 4 // 地区 id
    },
    {
      zhName: '美国', // 中文名
      enName: 'USA', // 英文名
      id: 5 // 地区 id
    },
    {
      zhName: '俄罗斯', // 中文名
      enName: 'RUS', // 英文名
      id: 6 // 地区 id
    },
    {
      zhName: '新加坡', // 中文名
      enName: 'SG', // 英文名
      id: 7 // 地区 id
    },
    {
      zhName: '泰国', // 中文名
      enName: 'THA', // 英文名
      id: 8 // 地区 id
    },
    {
      zhName: '马来西亚', // 中文名
      enName: 'MAS', // 英文名
      id: 9 // 地区 id
    },
    {
      zhName: '其他', // 中文名
      enName: 'Other', // 英文名
      id: 10 // 地区 id
    }
  ]
}

export const getAreaById = function (id) {
  var list = getArea()
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i]
  }
  return undefined
}
