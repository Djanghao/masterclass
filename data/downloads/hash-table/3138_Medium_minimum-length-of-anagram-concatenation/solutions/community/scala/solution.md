# Scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5124669/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5124669/)

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
  def minAnagramLength(s: String): Int = {
    def f(n: Int, res: Int): Int = {
      if(n == 0) res
      else {
        if(s.size % n == 0 && s.sliding(n, n).map(_.sorted).toSet.size == 1) f(n - 1,n)
        else f(n - 1, res)
      }
    }
    f(s.size, s.size)
  }
}
```