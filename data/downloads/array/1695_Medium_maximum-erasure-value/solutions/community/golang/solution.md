# Go - Sliding window - O(n) with hashmap

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2175065/](https://leetcode.com/problems/maximum-erasure-value/solutions/2175065/)

---

```
func maximumUniqueSubarray(nums []int) int {
    if len(nums) == 0 {return 0}
    if len(nums) == 1 {return nums[0]}
    
    res := -1 << 63
    
    m := make(map[int]int)
    m[nums[0]]++
    l, sum := 0, nums[0]
    
    for i := 1; i < len(nums); i++ {
        sum+= nums[i]
        m[nums[i]]++
        
        for m[nums[i]] > 1 {
            m[nums[l]]--
            sum -= nums[l]
            
            if m[nums[l]] == 0 {
                delete(m, nums[l])
            }
            
            l++
        }
        
        if sum > res {
            res = sum
        }
    }
    
    return res
}
```