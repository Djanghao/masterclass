# Scala pq solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/3560852/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/3560852/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn log(mn))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def trapRainWater(heightMap: Array[Array[Int]]): Int = {
      val m = heightMap.length
      val n = heightMap(0).length
      val pq = scala.collection.mutable.PriorityQueue.empty[(Int, Int, Int)](Ordering.by(_._1)).reverse
      val visited = Array.ofDim[Boolean](m, n)
      var maxH = Int.MinValue
      var res = 0
      for (i <- 0 until m; j <- 0 until n; if i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        pq.enqueue((heightMap(i)(j), i, j))
        visited(i)(j) = true
      }
      while (pq.nonEmpty) {
        val (h, i, j) = pq.dequeue()
        maxH = math.max(maxH, h)
        for ((x, y) <- List((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1))) 
          if (x >= 0 && x < m && y >= 0 && y < n && !visited(x)(y)) {
            visited(x)(y) = true
            res += math.max(0, maxH - heightMap(x)(y))
            pq.enqueue((heightMap(x)(y), x, y))
          }
      }
      res
    }
}
```