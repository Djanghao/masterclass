# scala brute force solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/5917563/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/5917563/)

---

```scala []
object Solution {
  def minDominoRotations(tops: Array[Int], bottoms: Array[Int]): Int = {
    lazy val tbs = (tops.toList zip bottoms).map{case (a,b) => List(a,b)}
    (1 to 6).toList.flatMap{n => (0 to 1).map{j =>
        tbs.map{case l => if(l(j)==n) Some(0) else if(l(1-j)==n) Some(1) else None}
    }}.collect{case l if l.forall(m => m.nonEmpty) => l.flatten.sum}
      .minOption.getOrElse(-1)
  }
}
```