import axios from 'axios'
import querystring from 'querystring'

const service = axios.create({
  timeout: 200000
})

// export function getImgName (imgbase) {
//   const url = '/seba/uploadRequestImage'
//   const data = {
//     image: imgbase
//   }
//   return service.post(url, querystring.stringify(data)).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

export function getImgName (file) {
  const url = '/seba/uploadImage'
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return service.post(url, file, config).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

export function sendOrder (orderinfor) {
  const url = '/seba/GenerateOrder'
  const data = {
    json: JSON.stringify(orderinfor)
  }
  return service.post(url, querystring.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}
