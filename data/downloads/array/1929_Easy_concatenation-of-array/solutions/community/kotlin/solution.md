# Kotlin, inline, <99%

**Author:** easchner
**Votes:** 9
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1361207/](https://leetcode.com/problems/concatenation-of-array/solutions/1361207/)

---

Just assign to a simple array builder and choose the nums array index based off the new array index modulo original size.

```
class Solution {
    fun getConcatenation(nums: IntArray) = IntArray(nums.size * 2) { nums[it % nums.size] }
}
```