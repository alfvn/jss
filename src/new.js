/**
 * new 操作符做了哪些事情？
 * 1.创建一个新对象
 * 2.将对象的__proto__属性指向构造函数的prototype
 * 3.将this指向新创建的对象并返回该对象
 */
function _new() {
  let target = {}
  target.__proto__ = fn.prototype
  let [fn, ...args] = arguments
  let result = fn.apply(target, args)
  if (
    typeof result === 'object' ||
    (typeof result === 'function' && typeof result !== null)
  ) {
    return result
  }
  return target
}

function Fn(a) {
  this.a = a
}

let instance = _new(Fn, 1)
console.log(instance)
