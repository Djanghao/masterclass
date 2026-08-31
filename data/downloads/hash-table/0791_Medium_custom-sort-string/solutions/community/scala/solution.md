# Scala FP: simple

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4859038/](https://leetcode.com/problems/custom-sort-string/solutions/4859038/)

---

# Code
```
object Solution {
  def customSortString(order: String, s: String): String = {
    val ord = order.zipWithIndex.toMap.withDefaultValue(0)
    s.sortBy(ord)  
  }
}
```