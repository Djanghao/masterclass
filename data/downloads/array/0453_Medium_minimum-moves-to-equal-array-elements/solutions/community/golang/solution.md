# [Golang] Decrease 1 element by 1. Time: O(n), Space: O(1)

**Author:** lacfo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1370805/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1370805/)

---

```
func minMoves(nums []int) int {
    //we can increase n-1 elements by 1
    //it should be equivalent to decrease 1 element by 1
    //so we just need to know the min value in nums
    n := len(nums)
    minVal := nums[0]
    for i := 1; i < n; i++ {
        if minVal > nums[i] {
            minVal = nums[i]
        }
    }
    
    res := 0
    for i := 0; i < n; i++ {
        res += nums[i] - minVal
    }
    return res
}
```