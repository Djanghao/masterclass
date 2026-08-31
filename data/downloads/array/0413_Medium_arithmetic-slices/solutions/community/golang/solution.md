# Go DP O(n) Space + DP O(1) Space clear solutions

**Author:** qube
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/1868556/](https://leetcode.com/problems/arithmetic-slices/solutions/1868556/)

---

DP O(n) Time, O(n) Space
```
func numberOfArithmeticSlices(nums []int) int {
    dp := make([]int, len(nums))
    res := 0
    for i := 2; i < len(nums); i++ {
        if nums[i]-nums[i-1] == nums[i-1]-nums[i-2] {
            dp[i] = 1+dp[i-1]
            res += dp[i]
        }
    }
    return res
}
```
DP O(n) Time, O(1) Space
```
func numberOfArithmeticSlices(nums []int) int {
    res, previous, current := 0, 0, 0
    for i := 2; i < len(nums); i++ {
        if nums[i]-nums[i-1] == nums[i-1]-nums[i-2] {
            current = 1+previous
            res += current
        }
        current, previous = 0, current
    }
    return res
}
```