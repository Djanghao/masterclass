# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/3443162/](https://leetcode.com/problems/count-binary-substrings/solutions/3443162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countBinarySubstrings(s: String): Int = {
      var count = 0
      var prevCount = 0
      var currCount = 1
      for (i <- 1 until s.length) {
        if (s(i) == s(i-1)) currCount += 1
        else {
          prevCount = currCount
          currCount = 1
        }
        if (prevCount >= currCount) count += 1
      }
      count
    }
}
```