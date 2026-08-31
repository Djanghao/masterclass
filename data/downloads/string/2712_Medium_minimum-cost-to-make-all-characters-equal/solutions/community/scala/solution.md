# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3591078/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3591078/)

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
  def minimumCost(s: String): Long = {
    val n = s.length
    (1 until n).foldLeft(0L)((acc, i) =>{
      if(s.charAt(i) != s.charAt(i - 1)) acc + (i min n - i)
      else acc
    })
  }
}
```