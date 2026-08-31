# Kotlin: Sliding Window

**Author:** artemasoyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/3109191/](https://leetcode.com/problems/minimum-window-substring/solutions/3109191/)

---

# Code
```
class Solution {
    fun minWindow(s: String, t: String): String {
        val freq = IntArray(128){ 0 }
        t.forEach { freq[it.toInt()]++ }
        
        var res = ""
        var count = t.length
        val (l, r) = 0 to 0
    
        while (r < s.length) {
            if (freq[s[r].toInt()]-- > 0) count--

            while (count == 0) {
                if (res.isEmpty() || res.length > r - l + 1) res = s.substring(l, r + 1)
                freq[s[l].toInt()]++
                if (freq[s[l++].toInt()] > 0) count++
            }
            r++
        }
        return res
    }
}
```