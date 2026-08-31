# Kotlin fast StringBuilder solution

**Author:** shbazhenov
**Votes:** 2
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/2092739/](https://leetcode.com/problems/license-key-formatting/solutions/2092739/)

---

```
class Solution {
    fun licenseKeyFormatting(s: String, k: Int): String {
        var result = StringBuilder()
        
        for (i in s.length-1 downTo 0) {
            if (s[i] == '-') continue
            if (result.length % (k + 1) == k) result.append('-')
            result.append(s[i].toUpperCase())
        }
        
        return result.reverse().toString()
    }
}
```
Please upvote, if you like the solution)