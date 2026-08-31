# Kotlin solution

**Author:** nothingelsematters
**Votes:** 4
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406250/](https://leetcode.com/problems/destination-city/solutions/4406250/)

---

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code

```
class Solution {
    fun destCity(paths: List<List<String>>): String {
        val end = paths.asSequence().map { it[1] }.toSet()
        val start = paths.asSequence().map { it[0] }.toSet()
        return (end - start).single()
    }
}
```