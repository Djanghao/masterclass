# Kotlin simple Two Pointers

**Author:** aliam
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3625118/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3625118/)

---

# Code
```
class Solution {
    fun longestSemiRepetitiveSubstring(s: String): Int {
        var left = 0
        var max = 1
        var last = -1
        
        for ((right, c) in s.withIndex()){ 
            if (right > 0 && c == s[right - 1]) {
                if (last != -1)
                    left = last
                last = right
            }
            
            max = maxOf(max, right - left + 1)
        }
        
        return max
    }
}
```