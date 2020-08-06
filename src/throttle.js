/**
 * 节流函数
 * 在不断触发事件的过程中，按照固定的频率去执行事件。
 * 手写代码中需要考虑的：
 * 1.使用闭包来包装timer这个全局变量，并且可以给事件处理函数传参。
 * 2.在执行事件时，判断如果存在定时器就返回。不存在就创建一个新的定时器，并且在执行完后将timer指向null，因为这里
    使用setTimeout，执行完后会自动销毁，所以不需要使用clearTimeout（一般用于在定时器执行之前取消定时器），所以
    直接将timer指向null即可。
 * 3.在使用setTimeout时，需要使用箭头函数获，让this 指向定义时所在的执行环境。因为匿名函数的执行环境是全局，this
    会指向window。
 * 适用场景：浏览器宽度调整，页面自动适用宽度改变布局
 */

function throttle(fn, time) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, time)
  }
}

let delay = throttle((test) => console.log(test), 1000)
document.onclick = () => delay('throttle')

// 拷贝代码浏览器控制台测试
