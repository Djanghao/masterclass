# [Golang] Just simply count

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2526785/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2526785/)

---

```go
func countSubarrays(nums []int) int64 {
  var res, curr int64
  for i := 0; i < len(nums); i++ {
    // If the number is greater than the previous, increase curr (i.e) we can expand the subarray
    if i > 0 && nums[i] > nums[i-1] {
      curr++
    } else {
      // Otherwise we can make a subarray with just the current element
      curr = 1
    }
    res += curr
  }
  return res
}
```