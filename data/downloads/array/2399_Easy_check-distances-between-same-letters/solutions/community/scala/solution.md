# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2646127/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2646127/)

---

```
  def checkDistances(s: String, distance: Array[Int]): Boolean = 
    ((('a' to 'z') zip distance).toMap) ++ (s.zipWithIndex.groupBy(_._1).mapValues(n => n.maxBy(_._2)._2 - n.minBy(_._2)._2 - 1)) == (('a' to 'z') zip distance).toMap

```