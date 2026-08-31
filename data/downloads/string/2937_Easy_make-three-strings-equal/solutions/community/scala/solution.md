# [scala] - characters size - longest common prefix

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4314482/](https://leetcode.com/problems/make-three-strings-equal/solutions/4314482/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def findMinimumOperations(s1: String, s2: String, s3: String): Int = {
    val min = s1.zip(s2).zip(s3).takeWhile { case ((c1, c2), c3) => c1 == c2 && c2 == c3 }.size
    if (min == 0) -1 else List(s1, s2, s3).map(_.size - min).sum
  }
}
```