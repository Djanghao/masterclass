# Kotlin solution

**Author:** nothingelsematters
**Votes:** 2
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258598/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258598/)

---

# Complexity
- Time complexity: $$O(n \\ log(n))$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun eliminateMaximum(dist: IntArray, speed: IntArray): Int =
        dist.asSequence()
            .zip(speed.asSequence())
            .map { (d, s) -> d.toDouble() / s }
            .sorted()
            .withIndex()
            .takeWhile { it.index < it.value }
            .count()
}
```