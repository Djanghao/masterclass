# Functional Scala idiomatic code using Depth First Search

**Author:** acamillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/5989856/](https://leetcode.com/problems/max-area-of-island/solutions/5989856/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given a dryland  coordinates, use  DFS to count the connected pieecs.
# Approach
<!-- Describe your approach to solving the problem. -->
If an element is dryland then exaplore the neighboorhodd using DFS looking for other dryland. Return 1 for each piece of land and summ all together

# Complexity
- Time complexity:
- O(N * M * I) with: `N` and `M` being the grid size and `I` the dryland piees
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
It mutates the grid to store the state information. I am ware fully FP solution would have not done that but I took this liberty as adding a `Set` of tuple for each visited element would have just cluttered the code without extra benefits)

# Code
```scala []
object Solution {
    def maxAreaOfIsland(grid: Array[Array[Int]]): Int = {
        def dfs(r: Int, c: Int): Int = {
            if (grid.isDefinedAt(r) && grid(0).isDefinedAt(c) && grid(r)(c) == 1) {
            grid(r)(c) = '*'
            1 +
                dfs(r, c - 1) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r + 1, c)
            } else 0
        }

        (for {
            r <- grid.indices
            c <- grid(0).indices
        } yield (r, c)).foldLeft(0) { case (acc, (r, c)) => Math.max(acc, dfs(r,c))}
    }
}
```