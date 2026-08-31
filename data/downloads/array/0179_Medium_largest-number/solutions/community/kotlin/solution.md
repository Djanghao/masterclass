# Quite short Kotlin solution

**Author:** kalachian
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-number/solutions/3291587/](https://leetcode.com/problems/largest-number/solutions/3291587/)

---

Could be even shorter, but Leetcode still uses Kotlin 1.3, so `Comparator<Int>` declaration cannot be omitted.

```
class Solution {
    fun largestNumber(nums: IntArray): String =
        nums.sortedWith(Comparator<Int> { a, b -> "$b$a".compareTo("$a$b") })
            .takeIf { it.firstOrNull() != 0 }
            ?.joinToString("") ?: "0"
}
```