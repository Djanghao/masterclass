# Kotlin oneliner functional solution

**Author:** qveex
**Votes:** 1
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4408776/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4408776/)

---

# Code
```
class Solution {
    fun findFinalValue(nums: IntArray, original: Int) = generateSequence(original) { cur ->
        (cur * 2).takeIf { cur in nums } ?: -1
    }.takeWhile { it != -1 }.last()
}
```