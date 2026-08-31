# Merge sort approach

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/5117013/](https://leetcode.com/problems/reverse-pairs/solutions/5117013/)

---


```
object Solution {
  private def merge(nums: Array[Int], low: Int, mid: Int, high: Int, reversePairsCount: Array[Int]): Unit = {
    var j = mid + 1 // 2nd part of array
    var i = low // 1st array
    while (i <= mid) {
      while (j <= high && nums(i) > 2L * nums(j)) { // check
        j += 1
      }
      reversePairsCount(0) += j - (mid + 1)
      i += 1
    }

    // now merge 2 arrays  
    val temp = new Array[Int](high - low + 1) // size
    var k = 0
    var left = low
    var right = mid + 1
    while (left <= mid && right <= high) {
      if (nums(left) < nums(right)) {
        temp(k) = nums(left)
        k += 1
        left += 1
      } else {
        temp(k) = nums(right)
        k += 1
        right += 1
      }
    }

    // handle remaining elements  
    while (left <= mid) {
      temp(k) = nums(left)
      k += 1
      left += 1
    }
    while (right <= high) {
      temp(k) = nums(right)
      k += 1
      right += 1
    }

    var m = 0
    for (i <- low to high) {
      nums(i) = temp(m)
      m += 1
    }
  }

  private def mergeSort(nums: Array[Int], low: Int, high: Int, reversePairsCount: Array[Int]): Unit = {
    if (low >= high) {
      return
    }
    val mid = (low + high) >> 1
    mergeSort(nums, low, mid, reversePairsCount)
    mergeSort(nums, mid + 1, high, reversePairsCount)
    merge(nums, low, mid, high, reversePairsCount)
  }

  def reversePairs(nums: Array[Int]): Int = {
    val reversePairsCount = Array(0)
    mergeSort(nums, 0, nums.length - 1, reversePairsCount)
    reversePairsCount(0)
  }
}

```