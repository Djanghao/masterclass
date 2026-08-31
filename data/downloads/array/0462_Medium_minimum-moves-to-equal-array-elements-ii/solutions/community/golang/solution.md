# Go solution using Median

**Author:** Fgcp
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2219571/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2219571/)

---

```
func minMoves2(nums []int) int {
    sort.Ints(nums)
    n := len(nums)
    mid := nums[n/2]
    res := 0
    
    for _, num := range nums {
        if num - mid > 0 {
            res += num - mid
        } else {
            res += mid - num
        }
    }
    return res
    
}
```
