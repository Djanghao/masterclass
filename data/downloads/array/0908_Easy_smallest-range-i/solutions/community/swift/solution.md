# Beats 100%

**Author:** hortondima
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/4698270/](https://leetcode.com/problems/smallest-range-i/solutions/4698270/)

---


# Code
```
class Solution {
    func smallestRangeI(_ nums: [Int], _ k: Int) -> Int {
        let min = nums.min()!
        let max = nums.max()!
        
        var ret = 0
        if max - min > k*2 {
            ret = max - min - k*2
        }
        
        return ret  
    }
}
```