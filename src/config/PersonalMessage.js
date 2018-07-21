export class PersonalMessage {
  constructor (firstName, lastName, phone, email, postCode, address, SEBA_STORE_NAME, SEBA_STORE_ADDRESS, areaId, specialRequestPhoto, specialRequestContent) {
    this.firstName = firstName || '' // 名
    this.lastName = lastName || '' // 姓
    this.phone = phone || '' // 电话
    this.email = email || '' // 邮箱
    this.postCode = postCode || '' // 邮编
    this.address = address || '' // 地址
    this.SEBA_STORE_NAME = SEBA_STORE_NAME || '' // SEBA专卖店名称
    this.SEBA_STORE_ADDRESS = SEBA_STORE_ADDRESS || '' // SEBA专卖店地址
    this.areaId = areaId || '' // 客户所在地
    this.specialRequestPhoto = specialRequestPhoto || [] // 特别要求的图片
    this.specialRequestContent = specialRequestContent || '' // 特别要求的说明
  }
}

export class RequestPhoto {
  constructor (photo, imgBase64) {
    this.photo = photo || ''
    this.imgBase64 = imgBase64 || ''
  }
}

export const REQUEST_PHOTO_MAX_COUNT = 5
