# Kotlin Declarative One Liner

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5482028/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5482028/)

---

# Code
```
class Solution {
    fun sumOfSquares(nums: IntArray) = (1..nums.size)
        .filter { nums.size % it == 0 }
        .map{ nums[it - 1] }
        .map{ it * it }
        .sum()
}
```