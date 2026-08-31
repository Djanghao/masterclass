# 100%runtime and memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/6039009/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/6039009/)

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
  def splitString(s: String): Boolean = {
    isValid(None, 0, s)
  }

  private def isValid(prev: Option[BigInt], idx: Int, s: String): Boolean = {
    if (idx == s.length ) true
    else {
      s.indices.filter(_ >= idx).exists { i =>
        val next = s.substring(idx, i + 1)
        (next!=s)&&(prev.isEmpty || (prev.isDefined && prev.get - BigInt(next) == 1)) &&
          isValid(Some(BigInt(next)), i + 1, s)
      }
    }
  }
}
```