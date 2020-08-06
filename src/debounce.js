/**
 * 防抖函数
 * 在不断触发事件过程中，直到最后一次触发时间超过了delay时间才会执行一次。
 * @param {*} fn
 * @param {*} time
 * 适用场景：搜索框输入出现推荐搜索词条时，在用户停止输入300毫秒后执行服务端请求
 */

function debounce(fn, time) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}

let delay = debounce((test) => console.log(test), 1000)
document.onclick = () => delay('debounce')

// 拷贝代码浏览器控制台测试
