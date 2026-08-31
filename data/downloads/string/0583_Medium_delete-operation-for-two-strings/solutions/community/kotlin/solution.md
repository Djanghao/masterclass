# Kotlin || Memoization

**Author:** mahrezz
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2408643/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2408643/)

---

```
class Solution {
    fun minDistance(word1: String, word2: String): Int {
        
           
        val word1Len = word1.length
        val word2Len = word2.length
        
        val memo = Array(word1Len){IntArray(word2Len) { -1 }}
     
        
        
        fun helper(index1: Int, index2: Int): Int{         
                  
            // means we reached to both end of the words, no need to delete any character anymore
            if(index1 == word1Len && index2 == word2Len) return 0
           
            // means we reached to the end of the word1 but word2 still has extra characters so 
            // we need to delete them as well
            if(index1 == word1Len || index2 == word2Len) 
                return Math.max(word2Len - index2,word1Len - index1)

            if(memo[index1][index2] != -1) return memo[index1][index2]!!

            if(word1[index1] == word2[index2]){
                return helper(index1 + 1, index2 + 1)
            }else{
                
                val firstOption = helper(index1 + 1,index2)
                val secondOption = helper(index1,index2 + 1)

                val ans = 1 + Math.min(firstOption,secondOption)
                
                memo[index1][index2] = ans
                
                return ans
            }
            
        }
        
        return helper(0,0)
    }
}
```