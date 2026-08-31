# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/4131233/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/4131233/)

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
  def canMakeSubsequence(str1: String, str2: String): Boolean = {
    def f(i1: Int, i2: Int): Boolean = {
      if(i2 == str2.length) return true
      if(i1 == str1.length) return false
      if(str1(i1) == str2(i2) || str1(i1) + 1 == str2(i2) || str1(i1) - 25 == str2(i2)) f(i1 + 1, i2 + 1)
      else f(i1 + 1, i2)
    }

    f(0, 0)
  }
}
```