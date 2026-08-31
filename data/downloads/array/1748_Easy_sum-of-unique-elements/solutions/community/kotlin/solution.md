# Count a sum of unique elements

**Author:** behzodhalil
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/4636932/](https://leetcode.com/problems/sum-of-unique-elements/solutions/4636932/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun sumOfUnique(nums: IntArray): Int {
        val bucket = nums.asSequence().groupingBy { it }.eachCount()
        var sum = 0
        
        for((key, value) in bucket) {
            if(value == 1) {
                sum += key
            }
        }
        return sum
    }
}
```