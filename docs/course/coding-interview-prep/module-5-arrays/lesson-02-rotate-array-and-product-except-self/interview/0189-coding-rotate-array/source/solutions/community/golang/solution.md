# Go solution: Time O(n) Space O(1)

**Author:** abbycoding
**Votes:** 41
**Link:** [https://leetcode.com/problems/rotate-array/solutions/194483/](https://leetcode.com/problems/rotate-array/solutions/194483/)

---

```
func rotate(nums []int, k int) {
    n := len(nums)
    k %= n
    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
}

func reverse(nums []int, start int, end int) {
    for start < end {
        nums[start], nums[end] = nums[end], nums[start]
        start++
        end--
    }
}
```