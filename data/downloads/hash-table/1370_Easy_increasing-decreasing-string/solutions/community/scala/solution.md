# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/3599888/](https://leetcode.com/problems/increasing-decreasing-string/solutions/3599888/)

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
    def sortString(s: String): String = {
      val charCount = Array.ofDim[Int](26)
      s.foreach(c => charCount(c - 'a') += 1)
      var result = ""
      while (result.length < s.length) {
        for (i <- 0 until 26 if charCount(i) > 0) {
          result += (i + 'a').toChar
          charCount(i) -= 1
        }
        for (i <- 25 to 0 by -1 if charCount(i) > 0) {
          result += (i + 'a').toChar
          charCount(i) -= 1
        }
      }
      result
    }
}
```