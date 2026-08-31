# Simply go

**Author:** agilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/4259785/](https://leetcode.com/problems/largest-subarray-length-k/solutions/4259785/)

---

```
func largestSubarray(nums []int, k int) []int {
    max := 0

    for i := 0; i <= len(nums) - k; i++ {
        if nums[i] > nums[max] { max = i }
    }

    return nums[max:max + k]
}
```