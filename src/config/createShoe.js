import { getShoeStyle } from './shoeStyle'
import { getPartsByShoeStyleId } from './shoeParts'

function HIGH_CARBON () {
  var t = this
  var parts = getPartsByShoeStyleId(1)

  t.shoeStyle = getShoeStyle()[0]
  parts.forEach((e) => {
    t[e.id] = e
  })
  t.embroidery = []
}

function TRIX () {
  var t = this
  var parts = getPartsByShoeStyleId(2)

  t.shoeStyle = getShoeStyle()[1]
  parts.forEach((e) => {
    t[e.id] = e
  })
  t.embroidery = []
}

function SLDE () {
  var t = this
  var parts = getPartsByShoeStyleId(3)

  t.shoeStyle = getShoeStyle()[2]
  parts.forEach((e) => {
    t[e.id] = e
  })
  t.embroidery = []
}

function UFS_SERIES () {
  var t = this
  var parts = getPartsByShoeStyleId(4)

  t.shoeStyle = getShoeStyle()[3]
  parts.forEach((e) => {
    t[e.id] = e
  })
  t.embroidery = []
}

export const initShoe = function (styleId) {
  switch (styleId) {
    case 1: return new HIGH_CARBON()
    case 2: return new TRIX()
    case 3: return new SLDE()
    case 4: return new UFS_SERIES()
    default: return false
  }
}

// var a = initShoe(1)
// // a.shoeStyle = 'saoidjo';
// var b = initShoe(1)
// console.log('a')
// console.log(a)
// console.log('b')
// console.log(b)
