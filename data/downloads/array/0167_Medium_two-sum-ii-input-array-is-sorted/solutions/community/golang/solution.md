# Keep It Simple and Go

**Author:** GiovanniGiorgio
**Votes:** 19
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/2190953/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/2190953/)

---

```
func twoSum(nums []int, t int) []int {
    for l, r := 0, len(nums) - 1 ;; {
        switch {
            case nums[l] + nums[r] > t: r--
            case nums[l] + nums[r] < t: l++
            default: return []int{l+1, r+1}
        }
    }
}
```