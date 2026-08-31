# Kotlin solution

**Author:** nothingelsematters
**Votes:** 4
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4270810/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4270810/)

---

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun restoreArray(adjacentPairs: Array<IntArray>): IntArray {
        val edges = mutableMapOf<Int, Pair<Int, Int?>>()

        adjacentPairs.forEach { (a, b) ->
            edges[a] = b to edges[a]?.first
            edges[b] = a to edges[b]?.first
        }

        var current = edges.asSequence().find { it.value.second == null }!!.key
        
        return IntArray(adjacentPairs.size + 1) {
            val element = current
            val (first, second) = edges[current]!!
            edges -= current
            current = if (second == null || first in edges) first else second
            element
        }
    }
}
```