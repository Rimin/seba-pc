import { getShoeStyle } from './shoeStyle'

const getLogo = function () {
  let shoeStyles = getShoeStyle()
  return [
    {
      shoeStyle: shoeStyles[0],
      logo: [
        {
          id: 1,
          confict: 'c',
          confictAngle: 'front'
        }
      ]
    },
    {
      shoeStyle: shoeStyles[1],
      logo: [
        {
          id: 1,
          confict: 'h',
          confictAngle: 'side'
        },
        {
          id: 2,
          confict: 'f',
          confictAngle: 'front'
        },
        {
          id: 3,
          confict: '',
          confictAngle: ''
        },
        {
          id: 4,
          confict: '',
          confictAngle: ''
        }
      ]
    },
    {
      shoeStyle: shoeStyles[2],
      logo: [
        {
          id: 1,
          confict: 'b',
          confictAngle: 'front'
        }
      ]
    },
    {
      shoeStyle: shoeStyles[3],
      logo: [
        {
          id: 1,
          confict: 'd',
          confictAngle: 'front'
        }
      ]
    }
  ]
}

export const getLogoByShoeId = function (id) {
  if (typeof id !== 'number') {
    id = id - ''
    if (typeof id !== 'number') {
      throw Error('the id to getLogoByShoeId is not a number')
    }
  }
  if (id < 0 || !Number.isInteger(id)) {
    throw Error('the id to getLogoByShoeId is illegal')
  }
  let logo = getLogo()
  for (let i = 0; logo.length; i++) {
    if (logo[i].shoeStyle.id === id) {
      return logo[i].logo // return a array
    }
  }
}
