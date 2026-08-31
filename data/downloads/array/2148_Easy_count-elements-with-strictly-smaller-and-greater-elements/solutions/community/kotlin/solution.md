# [Kotlin] Easy implementation

**Author:** user4122n
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5955307/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5955307/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Beats 100% of other submissions..

We will start by identifying the minimum and maximum elements in the array. Then, we'll iterate through the array to count elements that are strictly greater than the minimum and strictly less than the maximum, effectively ignoring any occurrences of the minimum and maximum values.
# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun countElements(nums: IntArray): Int {
        if(nums.size < 3) return 0
        val min = nums.minOrNull()
        val max = nums.maxOrNull()
        
        if(min == max) return 0

        var discardCount = 0
        
        nums.forEach{ n ->
            if(n > min!! && n < max!!){
                discardCount++
            }

        }
      return discardCount
    }
}
```