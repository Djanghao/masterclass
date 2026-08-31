# Scala FP: 1 short line

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499408/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499408/)

---

# Code
```
object Solution {
  def luckyNumbers (matrix: Array[Array[Int]]): List[Int] = 
    matrix.map(_.min).intersect(matrix.transpose.map(_.max)).toList
}
```