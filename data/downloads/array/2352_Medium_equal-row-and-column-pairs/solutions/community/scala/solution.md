# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/2353018/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/2353018/)

---

```

  def equalPairs(grid: Array[Array[Int]]): Int = {
    val row = grid.map(_.toSeq.mkString("#")).groupBy(identity).mapValues(_.size)
    grid.transpose.map(col => row.getOrElse(col.toSeq.mkString("#"), 0)).sum
  }
```