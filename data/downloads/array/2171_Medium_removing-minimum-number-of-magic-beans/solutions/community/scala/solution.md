# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/2650179/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/2650179/)

---

```
  def minimumRemoval(beans: Array[Int]): Long = {
    val t = beans.map(_.toLong).sum
    (beans.sorted zip (beans.length to 1 by -1)).map(n => t - n._2.toLong * n._1).min
  }
```