# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/6141009/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/6141009/)

---

```scala []
object Solution {
  def maxCompatibilitySum(students: Array[Array[Int]], mentors: Array[Array[Int]]): Int = 
    List.range(0,students.length).permutations.map{_.zipWithIndex
      .map{case (i,j) =>
        Iterator.range(0,students.head.length)
          .count(k => students(i)(k) == mentors(j)(k))
      }.sum
    }.max
}
```