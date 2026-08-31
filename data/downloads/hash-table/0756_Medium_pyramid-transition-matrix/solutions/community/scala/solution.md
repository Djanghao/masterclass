# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/4354067/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/4354067/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach dfs
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2 * 6^m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def pyramidTransition(bottom: String, allowed: List[String]): Boolean = {
        val map = scala.collection.mutable.Map.empty[String, scala.collection.mutable.Set[Char]]
        for (s <- allowed)
          {
            val key = s.substring(0, 2)
            if (!map.contains(key)) map(key) = scala.collection.mutable.Set.empty[Char]
            map(key) += s(2)
          }

        def dfs(row: String, nextRow: String): Boolean =
          if (row.length == 1) true
          else if (nextRow.length == row.length - 1) dfs(nextRow, "")
          else {
              val key = row.substring(nextRow.length, nextRow.length + 2)
              if (!map.contains(key)) false
              else map(key).exists(e => dfs(row, nextRow + e))
          }

        dfs(bottom, "")
    }
}
```