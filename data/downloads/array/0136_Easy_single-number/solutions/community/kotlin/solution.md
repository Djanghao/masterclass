# Kotlin solution

**Author:** nothingelsematters
**Votes:** 4
**Link:** [https://leetcode.com/problems/single-number/solutions/4263952/](https://leetcode.com/problems/single-number/solutions/4263952/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun singleNumber(nums: IntArray): Int = nums.fold(0, Int::xor)
}
```