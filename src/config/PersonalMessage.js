export class PersonalMessage {
  constructor (firstName, lastName, phone, email, postCode, address, SEBA_STORE_NAME, SEBA_STORE_ADDRESS, areaId) {
    this.firstName = firstName // 名
    this.lastName = lastName // 姓
    this.phone = phone // 电话
    this.email = email // 邮箱
    this.postCode = postCode // 邮编
    this.address = address // 地址
    this.SEBA_STORE_NAME = SEBA_STORE_NAME // SEBA专卖店名称
    this.SEBA_STORE_ADDRESS = SEBA_STORE_ADDRESS // SEBA专卖店地址
    this.areaId = areaId // 客户所在地
  }
}
