/**
 * 将显式调用用隐式调用来实现，也就是作为对象的方法
 * @param {*} target
 * @param {*} args
 */
Function.prototype._call = function (target, ...args) {
  let fn = this
  if (target === undefined || target === null) {
    target = window || global
  }
  let key = Symbol('key')
  target[key] = fn
  let result = target[key](...args)
  delete target[key]
  return result
}

/**
 * apply和call的区别在于传参不同
 * @param {*} target
 * @param {*} args
 */
Function.prototype._apply = function (target, args) {
  let fn = this
  if (target === undefined || target === null) {
    target = window || global
  }
  let key = Symbol('key')
  target[key] = fn
  let result = target[key](...args)
  delete target[key]
  return result
}

/**
 * 将目标函数的原型指向新返回函数的原型
 * @param {*} target
 * @param  {...any} args
 */
Function.prototype._bind = function (target, ...args) {
  let fn = this
  return function (...nargs) {}
}
