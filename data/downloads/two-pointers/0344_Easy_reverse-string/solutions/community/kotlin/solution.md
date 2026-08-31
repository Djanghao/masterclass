# Kotlin Solution

**Author:** taobit
**Votes:** 9
**Link:** [https://leetcode.com/problems/reverse-string/solutions/231834/](https://leetcode.com/problems/reverse-string/solutions/231834/)

---

```
class Solution {
    fun reverseString(s: CharArray): Unit {
        var start = 0
        var end = s.lastIndex
        while (start < end){
            s[start] = s[end].also { s[end] = s[start] }
            start++
            end--
        }
    }
}
```