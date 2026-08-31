# Simple Scala, check if notFound not equal below or same on right

**Author:** taintech
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5149573/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5149573/)

---

# Intuition
Literally do what question asks. Iterate and check, if index is too big, return same number for below and some TooBigNumber for right case.

# Approach
1. Create notFound boolean flag.
2. Take care of edges, as mentioned above.
3. Exist if found.
4. Return true if not found.

# Complexity
- Time complexity:
`O(n*m)`

- Space complexity:
`O(1)`

# Code
```
object Solution {
    val TooBigNumber = 11
    def satisfiesConditions(grid: Array[Array[Int]]): Boolean = {
        var notFound = true
        for (y <- grid.indices if notFound) {
            for (x <- grid(0).indices if notFound) {
                val below = if (y >= grid.length - 1) grid(y)(x) else grid(y + 1)(x)
                val right = if (x >= grid(0).length - 1) TooBigNumber else grid(y)(x + 1)
                if (grid(y)(x) != below || grid(y)(x) == right) notFound = false
            }
        }
        notFound
    }
}
```