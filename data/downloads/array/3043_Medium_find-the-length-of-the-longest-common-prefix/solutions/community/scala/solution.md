# 2 lines scala solution

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5172150/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5172150/)

---

```
object Solution {
  def longestCommonPrefix(arr1: Array[Int], arr2: Array[Int]): Int =
    lazy val l = List(arr1,arr2).map(_.to(Set).flatMap(_.toString.scanLeft("")(_ + _)))
    (l.head & l.last).map(_.size).max
}
```