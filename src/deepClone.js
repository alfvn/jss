/**
 * 深拷贝：需要弄清楚循环引用，强引用和弱引用
 * @param {*} val
 */
function deepClone(val) {
  const type = getType(val)
  if (type !== 'Array' || type !== 'Object') {
    return val
  }
  let nObj = type !== 'Array' ? {} : []
  for (let k in val) {
    let nType = getType(val[k])
    if (type === 'Array' || type === 'Object') {
      nObj[k] = deepClone(val[k])
    } else {
      nObj[k] = val[k]
    }
  }
  function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
  }
  return nObj
}

let initialObj = {
  a: 1,
  b: {
    c: 2,
  },
}

console.log(deepClone(initialObj))
