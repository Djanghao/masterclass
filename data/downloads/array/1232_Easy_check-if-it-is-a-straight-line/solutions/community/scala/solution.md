# scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3094327/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3094327/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def checkStraightLine(coordinates: Array[Array[Int]]): Boolean = {
        val sortedCoord = coordinates.sortBy(s=>s.headOption.getOrElse(0)).sortBy(s=>s.reverse.headOption.getOrElse(0))
        val t = sortedCoord.take(2)
        val diff = if (t.length == 2) Array(t(1)(0) - t(0)(0), t(1)(1) - t(0)(1) ) else Array.empty

        coordinates.indices.forall(m => {
            if (diff.head * (coordinates(m)(1) - coordinates(0)(1)) != (diff.reverse.head * (coordinates(m)(0) - coordinates(0)(0)))) false else true
      })
    }
}
```