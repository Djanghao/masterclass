# ✅  1 Liner FP 100% - Beautiful, Clean, Simple Code

**Author:** Kalz337
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5382520/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5382520/)

---

100%

```scala
def maximumImportance(n: Int, roads: Array[Array[Int]]): Long = 
  roads.flatten.groupBy(identity).view.values
  .map(_.size.toLong).toList.sorted.reverse
  .zipWithIndex.map( (c,i) => (n-i) * c)
  .sum
```