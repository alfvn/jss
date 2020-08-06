/**
 * 比较对象的__proto__ 和构造函数的原型
 * @param {*} left
 * @param {*} right
 */
function instanceOf(left, right) {
  while (left) {
    if (left.__proto__ === right.prototype) return true
    left = left.__proto__
  }
  return false
}
