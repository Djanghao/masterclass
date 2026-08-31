# KOTLIN || SORTING || TWO-POINTERS || 100%

**Author:** trenatov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232686/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232686/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    fun maxNumOfMarkedIndices(nums: IntArray): Int {    
        nums.sort()    
        var count = 0
        var i = 0
        var j = nums.size / 2

        while(j < nums.size && i < nums.size / 2) {
            if(nums[i] * 2 <= nums[j]) {
                count+=2
                i++
                j++
            } else {
                j++
            }
        }

        return count
    }
}
```