# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4309774/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4309774/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m * log (n * m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def allCellsDistOrder(rows: Int, cols: Int, rCenter: Int, cCenter: Int): Array[Array[Int]] = {
      (0 until rows)
        .flatMap(i=>(0 until cols).map(j=>Array(i, j)))
        .sortBy(s => (s(0) - rCenter).abs + (s(1) - cCenter).abs)
        .toArray
    }
}
```