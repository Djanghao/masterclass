# Kotlin KMP algorithm solution

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/5105295/](https://leetcode.com/problems/longest-happy-prefix/solutions/5105295/)

---

![Screenshot 2024-05-03 144750.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun longestPrefix(s: String): String {
        val length = s.length
        val lps = IntArray(length)
        var i = 1
        var j = 0

        while (i < length) {
            if (s[i] == s[j]) {
                lps[i++] = ++j
            } else if (j > 0) {
                j = lps[j - 1]
            } else {
                lps[i++] = 0
            }
        }

        return s.substring(0, lps[length - 1])
    }
}
```