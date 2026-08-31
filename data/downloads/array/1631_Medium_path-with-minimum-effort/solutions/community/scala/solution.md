# scala bfs

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/4053434/](https://leetcode.com/problems/path-with-minimum-effort/solutions/4053434/)

---

```\r
object Solution {\r
  import collection.immutable.Queue\r
  def minimumEffortPath(heights: Array[Array[Int]]): Int = {\r
    val cost = Array.fill(heights.size, heights(0).size)(1_000_001)\r
    cost(0)(0) = 0\r
    def impl(q0: Queue[(Int,Int)]): Unit = if(q0.nonEmpty) {\r
      lazy val ((i,j),q1) = q0.dequeue\r
      lazy val next = List((i, j-1), (i, j+1), (i-1, j), (i+1, j))\r
      .collect{case (x,y) if (x>=0 && x< heights.size && y>=0 && y < heights(0).size) =>\r
        lazy val diff = (heights(x)(y)-heights(i)(j)).abs max cost(i)(j)\r
        if(cost(x)(y) > diff) {cost(x)(y) = diff; Some(x,y) } else None\r
      }.flatten\r
      impl(q1 ++ next)\r
    }\r
    impl(Queue((0,0)))\r
    cost.last.last\r
  }\r
}\r
```