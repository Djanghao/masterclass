# Kotlin Declarative Approach + Extension Function

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5417412/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5417412/)

---

# Code
```
class Solution {
    fun Int.square() = this * this

    fun sumCounts(nums: List<Int>) = (0 until nums.size).flatMap { i ->
        (i + 1..nums.size).map { j ->
            nums.subList(i, j).distinct().count().square()
        }
    }.sum()
}
```