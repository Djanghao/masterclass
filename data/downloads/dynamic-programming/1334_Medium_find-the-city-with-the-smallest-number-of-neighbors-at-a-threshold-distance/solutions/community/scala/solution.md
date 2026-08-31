# Floyd-Warshall - finding all shortest paths

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539178/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539178/)

---

https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html
```
object Solution {
  def findTheCity(n: Int, edges: Array[Array[Int]], distanceThreshold: Int): Int =
    val arr = Array.fill(n,n)(10_001)
    for {i <- (0 until n)}  { arr(i)(i) = 0 }
    for {i <- edges.indices}  {
      arr(edges(i)(0))(edges(i)(1)) = edges(i)(2)
      arr(edges(i)(1))(edges(i)(0)) = edges(i)(2)
    }
    for {k <- 0 until n; j <- 0 until n; i <- 0 until n} {
      arr(i)(j) = arr(i)(j) min (arr(i)(k) + arr(k)(j)) min 10_001
      arr(j)(i) = arr(i)(j) min (arr(i)(k) + arr(k)(j)) min 10_001
    }
    arr.iterator.zipWithIndex
      .map{case (a,i) => a.count(_ <= distanceThreshold) -> i}
      .toList.minBy{case (x,i) => (x, -i)}._2
}
```