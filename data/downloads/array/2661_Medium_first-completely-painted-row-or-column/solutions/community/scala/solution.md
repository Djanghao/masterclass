# scala easy solution

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3519669/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3519669/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def firstCompleteIndex(arr: Array[Int], mat: Array[Array[Int]]): Int = {
    val all = arr.zipWithIndex.toMap
    val cols = mat.map(_.map(all.getOrElse(_, Int.MaxValue)).max)
    val rows = mat.transpose.map(_.map(all.getOrElse(_, Int.MaxValue)).max)
    cols.min min rows.min
  }
}
```