# Kotlin Fast Solution

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/3217272/](https://leetcode.com/problems/longest-duplicate-substring/solutions/3217272/)

---

# Intuition
Given a fixed length, if we calculate the hashes and we found the same hashes on different substrings, then we can conclude (with high confidence) that there are duplicate substrings. We can use sliding window to quickly calculate the hashes.

# Complexity
- Time complexity:  $$O(N Log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  fun longestDupSubstring(s: String): String {

    val PRIME = 131L
    fun fastPow(a: Long, b: Int): Long {
      var res = 1L
      var base = a
      var pow = b
      while (pow > 0) {
        if ((pow and 1) == 1)
          res *= base
        pow = pow shr 1
        base *= base
      }
      return res
    }

    var res = -1
    fun helper(length: Int): Boolean {
      val REMOVE = fastPow(PRIME, length - 1)
      val seen = mutableMapOf<Long, Int>()

      var i = 1 - length
      var sum = 0L
      for (j in 0 until s.length) {
        sum = (sum * PRIME) + s[j].toLong()

        if (i >= 0) {
          val prev = seen.put(sum, i)
          if (prev != null) {
            res = i
            return true
          }
          sum -= s[i].toLong() * REMOVE
        }
        i++;
      }
      return false
    }

    var l = 1
    var h = s.length - 1
    while (l <= h) {
      val m = (l + h) shr 1
      if (helper(m))
        l = m + 1
      else
        h = m - 1
    }
    if (h == 0) return ""
    helper(h)
    return s.substring(res, res + h);
  }
}
```