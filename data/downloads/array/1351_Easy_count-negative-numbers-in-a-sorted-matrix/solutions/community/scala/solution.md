# Scala Super Short 1 Line

**Author:** code_report
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/515280/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/515280/)

---

```scala
def countNegatives(grid: Array[Array[Int]]): Int = {
    return grid.flatten.count(_ < 0)
}
```