# Kotlin Recursive solution

**Author:** kotlinc
**Votes:** 6
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/3234535/](https://leetcode.com/problems/construct-quad-tree/solutions/3234535/)

---

# Intuition
We can build the tree recursively.

# Approach
We only need to give the recursive function the following parameters:
* top left point of your square `r1`, `c1`
* the width of your square `width`
 
Then if the `width` is `1`, that means this square is a left.
It is also possible that the direct four children of the current `Node` are **all leaves** and have the **same value**.

# Complexity
- Time complexity: $$O(N^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  fun construct(grid: Array<IntArray>): Node? {
    fun dfs(r1: Int, c1: Int, width: Int): Node = if (width == 1) {
      Node(grid[r1][c1] == 1, true)
    } else {
      val newWidth = width shr 1
      val a = dfs(r1, c1, newWidth)
      val b = dfs(r1, c1 + newWidth, newWidth)
      val c = dfs(r1 + newWidth, c1, newWidth)
      val d = dfs(r1 + newWidth, c1 + newWidth, newWidth)

      if (a.isLeaf && b.isLeaf && c.isLeaf && d.isLeaf
          && a.`val` == b.`val` && b.`val` == c.`val` && c.`val` == d.`val`) {
        Node(a.`val`, true)
      } else {
        val res = Node(true, false)
        res.topLeft = a
        res.topRight = b
        res.bottomLeft = c
        res.bottomRight = d
        res
      }
    }
    return dfs(0, 0, grid.size)
  }
}
```