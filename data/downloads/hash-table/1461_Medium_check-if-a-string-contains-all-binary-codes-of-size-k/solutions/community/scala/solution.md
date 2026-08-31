# 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5397425/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5397425/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(nk)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(nk)
# Code
```
object Solution {
  def hasAllCodes(s: String, k: Int): Boolean = {
    val total = Math.pow(2, k)
    checkBinaryCode(k, k, s, total, Set())
  }

  private def checkBinaryCode(k: Int, idx: Int, s: String, total: Double, set: Set[String]): Boolean = {
    if (idx > s.length)
      total == 0
    else {
      val str = s.substring(idx - k, idx)
      if (set.contains(str)) {
        checkBinaryCode(k, idx + 1, s, total, set)
      } else checkBinaryCode(k, idx + 1, s, total - 1, set.+(str))
    }
  }
}
```