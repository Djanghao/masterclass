# Go prefix sum then binary search

**Author:** dchooyc
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2541064/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2541064/)

---

```
func answerQueries(nums []int, queries []int) []int {
    res := make([]int, len(queries))
    
    sort.Ints(nums)
    
    for i := 1; i < len(nums); i++ {
        nums[i] += nums[i - 1]
    }
    
    for i, query := range queries {
        lo, hi := 0, len(nums)
        
        for lo < hi {
            mid := lo + ((hi - lo) >> 1)
            
            if nums[mid] <= query {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        
        res[i] = lo
    }
    
    return res
}
```