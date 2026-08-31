# [Golang] Binary Indexed Tree

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/3212320/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/3212320/)

---

```go
func kBigIndices(nums []int, k int) int {
  // We're going to maintain two different Binary Indexed Trees
  // one for left and one for right. We'll find the max value from nums
  // and use as the size of the binary indexed tree. We'll use max+1 as
  // the size since BIT is 1-indexed
  var max int
  for i := 0; i < len(nums); i++ {
    if nums[i] > max {
      max = nums[i]
    }
  }
  left, right := make([]int, max+1), make([]int, max+1)
  // Construct the right bit
  for i := 0; i < len(nums); i++ {
    add(right, nums[i], 1)
  }
  var res int
  for i := 0; i < len(nums); i++ {
    add(right, nums[i], -1) // Remove current element from right
    // Count of elements in left <= nums[i]-1 >= k (and)
    // Count of elements in the right <= nums[i-1] >= k
    if prefixSum(left, nums[i]-1) >= k && prefixSum(right, nums[i]-1) >= k {
      res++
    }
    add(left, nums[i], 1) // Add current element to left
  }
  return res
}


func prefixSum(bit []int, i int) int {
  var sum int
  for i > 0 {
    sum += bit[i]
    i -= i & (-i)
  }
  return sum
}

func add(bit []int, i int, val int) {
  for i < len(bit) {
    bit[i] += val
    i += i & (-i)
  }
}
```