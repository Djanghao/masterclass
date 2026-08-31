# Easy solution using List in Kotlin

**Author:** passion06
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4333164/](https://leetcode.com/problems/make-three-strings-equal/solutions/4333164/)

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
    fun findMinimumOperations(s1: String, s2: String, s3: String): Int {
        //Calculate the length of all the strings
        //are the strings of equal lemngth- if not which is min?
        //iterate through the length of the min string and keep comparing the char position of all strings. 
        //Keep track of the good characters, i.e- the characters that are equal in the iterations inside the loop. 
        //The mininum number of character removals to be performed is the total Length of the three strings - good Characters calculated in the previous step
        var strLength = listOf(s1.length,s2.length,s3.length)
        var totalLen = strLength.sum()
        var isEqualLength = false
        if(strLength.all{it==s1.length}){
            isEqualLength = true
        }
        
        if(s1[0]!=s2[0]||s2[0]!=s3[0]) return -1
        
        var minLen = strLength.min()
        var goodCharCount = 0
        for(i in 0 until minLen){
            if(s1[i]==s2[i]&& s2[i]==s3[i]){
                goodCharCount+=3
            } else{
                if(isEqualLength)
                return (minLen-i)*3
                else return totalLen-goodCharCount
            }
        }
        
    return totalLen-goodCharCount
    }
}
```