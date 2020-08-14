// 二分查找 有序数据的算法
// 时间复杂度 O(logn)
// 1 非递归版

function binary_search(nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = parseInt(low + (high - low) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let nums = [1, 2, 3, 4, 5, 6]
console.log(binary_search(nums, 7))
console.log(binary_search(nums, 5))

// 2 递归版
function binary_search(nums, low, high, target) {
  if (low > high) {
    return -1
  }
  let mid = parseInt(low + (high - low) / 2)
  if (target === nums[mid]) {
    return mid
  } else if (target > nums[mid]) {
    return binary_search(nums, mid + 1, high, target)
  } else {
    return binary_search(nums, low, mid - 1, target)
  }
}

let nums = [1, 2, 3, 4, 5, 6]
console.log(binary_search(nums, 0, nums.length - 1, 7))
console.log(binary_search(nums, 0, nums.length - 1, 5))
