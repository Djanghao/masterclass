# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/slowest-key/solutions/2075895/](https://leetcode.com/problems/slowest-key/solutions/2075895/)

---

```
 def slowestKey(releaseTimes: Array[Int], keysPressed: String): Char = {
    (((List(0) :::releaseTimes.toList) zip releaseTimes.toList).map(n => n._2 - n._1) zip keysPressed).maxBy(n => (n._1, n._2))._2
  }

```