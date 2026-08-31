# Scala functional O(mn*logmn) solution

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/4418997/](https://leetcode.com/problems/best-meeting-point/solutions/4418997/)

---

# Intuition
The meeting point `<x, y>` can be derived as the median of homes `x`s and `y`s respectively.

This is because the Manhattan distance (or L1 distance) optimizes x and y independently. Then we reduce the problem to: 

> Given a list of points `x`s, find a value `a`, such that `sum |x_i - a|` is minimal. 

One can prove that the media of input list is the mathematical solution. 

# Complexity
- Time complexity:
`O(mn)` for finding coordiantes of 1s.
`O(mn * log(mn))` for finding meeting points in the worst case, where grid is full of 1s.

- Space complexity:
`O(mn)` worst case: full grid of 1s

# Code
```
object Solution {
    def minTotalDistance(grid: Array[Array[Int]]): Int = {
        val m = grid.length
        val n = grid(0).length
        val coords = for (i <- 0 until m;
             j <- 0 until n;
             if grid(i)(j) == 1
        ) yield (i, j)
        val (x, y) = coords.unzip
        val (mp_x, mp_y) = (median(x), median(y))
        x.foldLeft(0)((accu, a) => accu + math.abs(a - mp_x)) + y.foldLeft(0)((accu, b) => accu + math.abs(b - mp_y))
    }

    def median(v: Seq[Int]): Int = {
        v.sorted.drop(v.length / 2).head
    }
}
```