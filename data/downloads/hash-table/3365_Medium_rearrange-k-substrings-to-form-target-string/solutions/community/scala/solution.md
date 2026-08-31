# scala 2 lines solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6138391/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6138391/)

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
```scala []
object Solution {
  def isPossibleToRearrange(s: String, t: String, k: Int): Boolean = {
    val n = s.size / k
    s.sliding(n, n).toList.sorted == t.sliding(n, n).toList.sorted
  }
}
```