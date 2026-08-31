# kotlin beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/4838690/](https://leetcode.com/problems/bold-words-in-string/solutions/4838690/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sliding Window 

leverage sliding window to check whether word in words is a substring in s. 

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
    fun boldWords(words: Array<String>, s: String): String {
        val isSubArray = BooleanArray(s.length)

        words.forEach{
            checkSub(isSubArray, it, s)
        }

        val sb = StringBuilder()
        
        var i = 0 
        while( i < s.length){
            var isFalse = i 
            while(isFalse < s.length && !isSubArray[isFalse]){
                sb.append(s[isFalse++])
            }
            var isTrue = isFalse 
            if( isTrue < s.length) sb.append("<b>")

            while(isTrue < s.length && isSubArray[isTrue]){
                sb.append(s[isTrue++])
            }
            if( isTrue != isFalse) sb.append("</b>")
            isFalse = isTrue 
            i = isFalse
            println(i)
        }
        return sb.toString()
    }

    fun checkSub(isSubArray: BooleanArray, word: String, s: String){
        val n = word.length 

        var i = n 

        while( i <= s.length){
            if( s.substring(i - n , i) == word ){
                for( j in i - n until i)
                    isSubArray[j] = true
            }
            i++
        }
    }
}
```