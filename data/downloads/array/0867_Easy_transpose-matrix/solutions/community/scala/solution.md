# Scala | 3 Solutions

**Author:** soumensaha
**Votes:** 2
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2100849/](https://leetcode.com/problems/transpose-matrix/solutions/2100849/)

---

**Approach 1 (Cheating)**
```
object Solution {
  def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = matrix.transpose
}

//Runtime: 611 ms, faster than 88.89% of Scala online submissions for Transpose Matrix.
//Memory Usage: 54.2 MB, less than 100.00% of Scala online submissions for Transpose Matrix.
```



**Approach 2 - Scala Collections**
```
object Solution {
  def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = matrix(0).indices.map(r=> matrix.map(_(r))).toArray
}

//Runtime: 605 ms, faster than 88.89% of Scala online submissions for Transpose Matrix.
//Memory Usage: 54.3 MB, less than 88.89% of Scala online submissions for Transpose Matrix.
```



**Approach 3 - Copy Directly**
```
object Solution {
  def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    val t = Array.ofDim[Int](matrix(0).length, matrix.length)
    for (j <- matrix.indices; i <- matrix(0).indices) t(i)(j) = matrix(j)(i)
    t
  }
}

//Runtime: 942 ms, faster than 33.33% of Scala online submissions for Transpose Matrix.
//Memory Usage: 82.3 MB, less than 44.44% of Scala online submissions for Transpose Matrix.
```