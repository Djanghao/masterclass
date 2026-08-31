# Kotlin + stack

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/3047629/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/3047629/)

---

# Code
```
class Solution {
    fun minInsertions(s: String): Int {
        var q = ArrayDeque<Char>()
        var i = 0
        var res = 0
        while (true) {
            if (i >= s.length) break
            var c = s[i]
            
            if (c == ')') {
                if (q.size > 0) q.pop() else res++
                if (i < s.length - 1 && s[i + 1] == ')') {
                    i += 2
                } else {
                    res++
                    i++
                }
            } else {
                q.push(c)
                i++
            }
        }
        if (q.size != 0) res += 2 * q.size

        return res
    }
}
```