// 二分查找 有序数据的算法
// 时间复杂度 O(logn)
// 1 非递归版

function binary_search(arr, key) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = parseInt(low + (high - low) / 2)
    if (key === arr[mid]) {
      return mid
    } else if (key > arr[mid]) {
      low = mid + 1
    } else if (key < arr[mid]) {
      high = mid - 1
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(binary_search(arr, 7))
console.log(binary_search(arr, 5))

// 2 递归版
function binary_search(arr, low, high, key) {
  if (low > high) {
    return -1
  }
  let mid = parseInt(low + (high - low) / 2)
  if (key === arr[mid]) {
    return mid
  } else if (key > arr[mid]) {
    low = mid + 1
    return binary_search(arr, low, high, key)
  } else if (key < arr[mid]) {
    high = mid - 1
    return binary_search(arr, low, high, key)
  }
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(binary_search(arr, 0, arr.length - 1, 7))
console.log(binary_search(arr, 0, arr.length - 1, 5))
