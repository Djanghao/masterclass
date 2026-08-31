# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/5142510/](https://leetcode.com/problems/largest-values-from-labels/solutions/5142510/)

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
  def largestValsFromLabels(values: Array[Int], labels: Array[Int], numWanted: Int, useLimit: Int): Int = 
    (values zip labels).sortBy(-_._1).foldLeft((0, numWanted, Map[Int, Int]())) {
      case ((sum, 0, _), _) => (sum, 0, Map())
      case ((sum, num, map), (value, label)) if map.getOrElse(label, 0) < useLimit =>
        (sum + value, num - 1, map.updated(label, map.getOrElse(label, 0) + 1))
      case ((sum, num, map), _) => (sum, num, map)
    }._1
  
}
```