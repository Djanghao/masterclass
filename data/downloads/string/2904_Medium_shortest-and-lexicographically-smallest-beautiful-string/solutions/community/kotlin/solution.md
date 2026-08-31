# Two pointers

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4280407/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4280407/)

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
class Solution {
    fun shortestBeautifulSubstring(s: String, k: Int): String {
        var left = 0 
        var res: String? = null 
        var count = 0

        for( (right, c) in s.withIndex()){

            if( c == '0') continue 

            count++ 

            if( count < k) continue 

            while(left < s.length && count >= k){
            if( count == k && betterAns(res,s.substring(left, right + 1))){
                res = s.substring(left, right + 1)
            }                 
            
            if( s[left++] =='1')
                    count--
                
            }
        }

        return if( res == null) "" else res
        
    }

    fun betterAns(s: String?, res: String): Boolean{
        return when {
            s == null -> true 
            res.length < s.length -> true
            res.length == s.length && res < s -> true 
            else -> false 
        }
    }
}
```