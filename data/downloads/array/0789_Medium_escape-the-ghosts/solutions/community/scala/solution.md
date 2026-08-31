# scala twoliner. manhattan distance

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/5450017/](https://leetcode.com/problems/escape-the-ghosts/solutions/5450017/)

---

```scala
object Solution {
  def escapeGhosts(ghosts: Array[Array[Int]], target: Array[Int]): Boolean =
    def dist(a: Array[Int])(b: Array[Int]):Int = (a zip b).map{case (n,m) => (n-m).abs}.sum
    dist(Array(0,0))(target) < ghosts.map(dist(target)).min
}
```