# Efficient Scala solution

**Author:** tumakha
**Votes:** 2
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/930883/](https://leetcode.com/problems/flipping-an-image/solutions/930883/)

---

```scala
def flipAndInvertImage(A: Array[Array[Int]]): Array[Array[Int]] = 
  A.map(_.view.map(_ ^ 1).reverse.toArray)
```