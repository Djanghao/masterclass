# Solution via Map & Set

**Author:** Andrey_Bukreev
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5453364/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5453364/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
209 ms
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
38.35 MB
# Code
```
class Solution {
    fun isSubstringPresent(s: String): Boolean {
        val map = mutableMapOf<Char,MutableSet<Char>>()
        for(i in 1 until s.length){
            if(map.contains(s[i-1])){
                map[s[i-1]]!!.add(s[i])
            } else {
            map[s[i-1]] = mutableSetOf(s[i])
            }
        }
        for( i in s.length - 1 downTo 1){
            if(map[s[i]] != null && map[s[i]]!!.contains(s[i-1])){
                return true
            }
        }
        return false
    }
}
```