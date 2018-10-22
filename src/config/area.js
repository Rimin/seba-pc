export const getArea = function () {
  return [
    {
      zhName: '中国',
      enName: 'CHN',
      id: 1 // 地区 id
    },
    {
      zhName: '香港',
      enName: 'HK',
      id: 2
    },
    {
      zhName: '台湾',
      enName: 'TWN',
      id: 3
    },
    {
      zhName: '欧洲',
      enName: 'EUP',
      id: 4
    },
    {
      zhName: '美国',
      enName: 'USA',
      id: 5
    },
    {
      zhName: '俄罗斯',
      enName: 'RUS',
      id: 6
    },
    {
      zhName: '新加坡',
      enName: 'SG',
      id: 7
    },
    {
      zhName: '泰国',
      enName: 'THA',
      id: 8
    },
    {
      zhName: '马来西亚',
      enName: 'MAS',
      id: 9
    },
    {
      zhName: '其他',
      enName: 'Other',
      id: 10
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
