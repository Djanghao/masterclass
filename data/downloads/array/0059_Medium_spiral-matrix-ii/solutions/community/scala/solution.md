# scala 4 lines recursive solution with transpose & reverse

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3013843/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3013843/)

---

# Approach
**transpose** then **reverse** each row == **rotate** by +90
# Code
```
  def generateMatrix(n: Int): Array[Array[Int]] = {
    def impl(seq: Seq[Int], acc: Seq[Seq[Int]]): Array[Array[Int]] =
      if(seq.isEmpty) acc.map(_.toArray).toArray
      else impl(seq.drop(acc.size), (seq.take(acc.size).reverse) +: (acc.transpose.map(_.reverse)) )
    impl((1 until (n*n)).reverse.toList, List(List(n*n)))
  }
```