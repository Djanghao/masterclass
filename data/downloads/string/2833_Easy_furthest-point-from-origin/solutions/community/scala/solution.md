# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3997152/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3997152/)

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
  def furthestDistanceFromOrigin(moves: String): Int = {
    val ls = moves.filter(_=='L').size
    val rs = moves.filter(_=='R').size
    val n = moves.length
    if(ls > rs) n - rs * 2 else n - ls * 2
  }
}
```