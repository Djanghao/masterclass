# Easy to Understand | Kotlin | Recursion | Well Written

**Author:** user9743m
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3590980/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3590980/)

---

# Code
```
class Solution {
    fun longestSubstring(s: String, k: Int): Int {
        val n = s.length
        if(n == 0)
            return 0
        
        if(k == 0 || k == 1)
            return n
        
        var map: MutableMap<Char, Int> = mutableMapOf()
        s.forEach {
            map.put(it, map.getOrDefault(it, 0) + 1)
        }
        
        var length = 0
        while(length < n && map.getOrDefault(s[length], 0) >= k)
            length += 1
        
        if(length >= n - 1) 
            return length
            
        val len1 = longestSubstring(s.substring(0, length), k)
        while(length < n && map.getOrDefault(s[length], 0) < k) length++
        val len2 = longestSubstring(s.substring(length), k)

        return Math.max(len1, len2)
    }
}
```