# In place reverse using kotlin

**Author:** user7927FP
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4254631/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4254631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(1)

# Code
```
class Solution {

    fun reverse(s: CharArray, l: Int, r: Int){
        var left = l
        var right = r
        while(left < right){
            s[left] = s[right].also{ s[right] =  s[left]}
            left++
            right--
        }
    }

    fun reverseWord(s: CharArray){
        var start =0 
        var end = 0
        while(end < s.size){
            if(s[end].toString() == " "){
                reverse(s, start, end-1)
                start = end+1
            }
            end++
        }
        reverse(s, start, s.size-1)

    }


    fun reverseWords(s: CharArray): Unit {
        reverse(s, 0, s.size-1)
        reverseWord(s)

    }
}
```