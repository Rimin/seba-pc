import axios from 'axios'
import querystring from 'querystring'

const service = axios.create({
  timeout: 200000
})

export function getImgName (imgbase) {
  const url = '/seba/uploadRequestImage'
  const data = {
    image: imgbase
  }
  return service.post(url, querystring.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function sendOrder (orderinfor) {
  const url = '/seba/GenerateOrder'
  const data = {
    json: JSON.stringify(orderinfor)
  }
  return service.post(url, querystring.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}
