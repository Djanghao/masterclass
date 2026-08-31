# Scala - DFS + Backtracking solution (This is my first post!)

**Author:** ydash
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/1554846/](https://leetcode.com/problems/unique-paths-iii/solutions/1554846/)

---

My Scala solution is bellow:

1. Count squares except for `obstacles` (= -1).
2. Find `starting square`.
3. Find all paths which walk over every `empty square` exactly once.
(i, j) means index of grid.
3.1. If grid(i)(j) equals `ending square`(=2).
3.1.1. Compare the number of passed squares (`passed`) and the number of squares which I have to pass (`haveToPass`). If `passed` equals `haveToPass`, then the `count` which represent the answer of this problem is incremented.
3.2. if grid(i)(j) equals `empty square`(=0).
3.2.1. grid(i)(j) is marked as passed. (`grid(i)(j) = -1`)
3.2.2. Explore a cell in 4-directional except for obstacles and already passed empty square.
3.2.3. grid(i)(j) is unmarked.

```
  def uniquePathsIII(grid: Array[Array[Int]]): Int = {
    val m = grid.length
    val n = grid.head.length
    val haveToPass = grid.foldLeft(0) { (acc, r) => r.foldLeft(acc) { (a, c) => if (c != -1) a + 1 else a } }
    val (si, sj) = (for (i <- 0 until m; j <- 0 until n if grid(i)(j) == 1) yield (i, j)).head
    var count = 0

    def backtracking(i: Int, j: Int, passed: Int): Unit = {
      if (grid(i)(j) == 2) {
        if (passed == haveToPass) count += 1
      } else {
        grid(i)(j) = -1
        for (
          (x, y) <- List((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1))
          if x >= 0 && x < m && y >= 0 && y < n && grid(x)(y) != -1
        ) {
          backtracking(x, y, passed + 1)
        }
        grid(i)(j) = 0
      }
    }

    grid(si)(sj) = -1
    backtracking(si, sj, 1)
    count
  }
  ```
  

![image](./images/0.png)
