# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5442247/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5442247/)

---

```scala
object Solution {
  def minSteps(s: String, t: String): Int =
    lazy val (s1,t1) = (s.groupMapReduce(identity)(_ => 1)(_ + _), t.groupMapReduce(identity)(_ => 1)(_ + _))
    (s1.iterator.map{case (k,v) => v - t1.getOrElse(k,0)}.filter(_ > 0) ++
    t1.iterator.map{case (k,v) => v - s1.getOrElse(k,0)}.filter(_ > 0)).sum
}
```