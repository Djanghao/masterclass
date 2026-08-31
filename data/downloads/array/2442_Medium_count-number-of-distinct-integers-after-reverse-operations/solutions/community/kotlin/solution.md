# Kotlin solution with Set

**Author:** armat
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3829631/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3829631/)

---

# Code
```
class Solution {
    fun countDistinctIntegers(nums: IntArray): Int {
        val set = mutableSetOf<Int>()

        nums.forEach {
            set.add(it)
            set.add(reversed(it))
        }

        return set.size
    }

    fun reversed(num: Int): Int {
        var n = num
        var result = 0

        while (n > 0) {
            result = result * 10 + n % 10
            n /= 10
        }

        return result
    }
}
```