# scala oneliner, 861 ms Beats 100.00%

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/5428148/](https://leetcode.com/problems/diagonal-traverse/solutions/5428148/)

---

https://leetcode.com/problems/diagonal-traverse/submissions/1311559049/
```scala
object Solution {
  import scala.util.chaining._
  def findDiagonalOrder(mat: Array[Array[Int]]): Array[Int] =
    (mat.indices.map(0 -> _) ++ mat.head.indices.drop(1).map(_ -> (mat.size-1))).map{ case (i,j) =>
      (0 until(mat.head.size+mat.size)).iterator.map(d => (i+d,j-d))
        .takeWhile{case (i,j) => i<mat.head.size && j>=0}.toList
        .pipe{case l =>
          (if((i+j)%2 == 0) l else l.reverse).map{case (i,j) => mat(j)(i)}
        }
    }.flatten.toArray
}

```