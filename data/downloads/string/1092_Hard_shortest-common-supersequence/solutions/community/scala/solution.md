# Simple Bottom up Approach || Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/5235722/](https://leetcode.com/problems/shortest-common-supersequence/solutions/5235722/)

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
  def shortestCommonSupersequence(s1: String, s2: String): String = {
    val m = s1.length
    val n = s2.length

    val t = Array.ofDim[Int](m + 1, n + 1)

    for (i <- 0 to m) {
      for (j <- 0 to n) {
        if (i == 0 || j == 0) {
          t(i)(j) = i + j
        } else if (s1(i - 1) == s2(j - 1)) {
          t(i)(j) = 1 + t(i - 1)(j - 1)
        } else {
          t(i)(j) = 1 + math.min(t(i - 1)(j), t(i)(j - 1))
        }
      }
    }

    val scsBuilder = new StringBuilder
    var i = m
    var j = n
    while (i > 0 && j > 0) {
      if (s1(i - 1) == s2(j - 1)) {
        scsBuilder.append(s1(i - 1))
        i -= 1
        j -= 1
      } else {
        if (t(i - 1)(j) < t(i)(j - 1)) {
          scsBuilder.append(s1(i - 1))
          i -= 1
        } else {
          scsBuilder.append(s2(j - 1))
          j -= 1
        }
      }
    }

    while (i > 0) {
      scsBuilder.append(s1(i - 1))
      i -= 1
    }
    while (j > 0) {
      scsBuilder.append(s2(j - 1))
      j -= 1
    }

    scsBuilder.reverse.toString
  }
}

```