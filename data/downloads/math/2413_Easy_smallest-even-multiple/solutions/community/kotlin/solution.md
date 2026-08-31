# Kotlin without if

**Author:** Gribbirg
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/4806675/](https://leetcode.com/problems/smallest-even-multiple/solutions/4806675/)

---


# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)
# Code
```
class Solution {
    fun smallestEvenMultiple(n: Int): Int = n * (n % 2 + 1)
}
```