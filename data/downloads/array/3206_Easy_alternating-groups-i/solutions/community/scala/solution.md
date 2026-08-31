# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5431027/](https://leetcode.com/problems/alternating-groups-i/solutions/5431027/)

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
  def numberOfAlternatingGroups(colors: Array[Int]): Int = 
    (colors ++ colors.take(2)).sliding(3, 1).count { case Array(a, b, c) => a != b && b != c }
  
}
```