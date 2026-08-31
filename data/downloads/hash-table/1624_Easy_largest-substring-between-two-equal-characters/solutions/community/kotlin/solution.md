# Kotlin oneliner O(n)

**Author:** qveex
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4484207/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4484207/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun maxLengthBetweenEqualCharacters(s: String) =
        s.withIndex().groupBy(
            keySelector = { it.value },
            valueTransform = { it.index }
        ).maxOf { it.value.last() - it.value.first() - 1 }
}
```