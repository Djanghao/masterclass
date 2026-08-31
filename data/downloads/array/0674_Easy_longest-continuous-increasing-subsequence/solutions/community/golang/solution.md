# O(n) with go

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/2454483/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/2454483/)

---

```
func findLengthOfLCIS(nums []int) int {
    res, current := 1, 1
    
    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            current++            
        } else {
            if current > res {
                res = current
            }
            
            current = 1
        }
    }
    
    if current > res {
        res = current
    }
    
    return res
}
```