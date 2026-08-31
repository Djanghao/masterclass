# Easy Scala KMP Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/5241118/](https://leetcode.com/problems/longest-happy-prefix/solutions/5241118/)

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
    def longestPrefix(s: String): String = {
        //Step 1 = TO CALCULATE THE LPS ( Longest Prefix Suffix )
        //Step 2 = MATCH THE LENGTH FROM THE WAY OF J-LENGTH
        val n = s.length
        val lps = new Array[Int](n)
        var len = 0
        var i = 1
        while (i < n) {
            if (s.charAt(i) == s.charAt(len)) {
                len += 1
                lps(i) = len
                i += 1
            } else {
                if (len != 0) {
                    len = lps(len - 1)
                } else {
                    lps(i) = 0
                    i += 1
                }
            }
        }
        s.substring(0, lps(n - 1))
    }
}
```