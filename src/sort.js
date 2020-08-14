// 十大排序算法
// 1 冒泡排序
function bubbleSort(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = temp
    }
  }
  //   }
  return arr
}
let arr = [5, 4, 2, 1, 3, 6, 8, 7, 10, 9]
console.log(bubbleSort(arr))
