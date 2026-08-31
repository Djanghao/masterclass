# Kotlin short and easy to understand solution

**Author:** shbazhenov
**Votes:** 7
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/2109717/](https://leetcode.com/problems/summary-ranges/solutions/2109717/)

---

```
class Solution {
    fun summaryRanges(nums: IntArray): List<String> {
        if (nums.size == 1) return listOf("${nums[0]}")
        
        var result = mutableListOf<String>()        
        var l = 0
        var r = 1
            
        while (r <= nums.size) {            
            if (r == nums.size || nums[r-1] + 1 != nums[r]) {
                if (r - l == 1) result.add("${nums[l]}")
                else result.add("${nums[l]}->${nums[r-1]}")
                l=r
            }
            r++
        }
        
        return result
    }
}
```
Please upvote, if you like the solution)