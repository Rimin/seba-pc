export const imageFileToBase64 = function (file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(Error(1)) // '未选择图片'
    } else if (typeof FileReader === 'undefined') {
      reject(Error(2)) // '你的浏览版本过低！'
    } else if (!/image\/\w+/.test(file.type)) {
      reject(Error(3)) // '非图片'
    } else if (file.size > 3145728) {
      reject(Error(4)) // '图片不得超过 3MB !'
    } else {
      var reader = new FileReader()
      reader.onload = function () {
        resolve(this.result)
      }
      reader.readAsDataURL(file)
    }
  })
}
