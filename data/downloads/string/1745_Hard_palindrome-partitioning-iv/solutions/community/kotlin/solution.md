# [Kotlin] 1745. Palindrome Partitioning IV.

**Author:** havran
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1043222/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1043222/)

---

```
class Solution {
    fun checkPartitioning(s: String): Boolean {
        if(s.length<3){
            return false
        }

        val isPalindromDpTable = Array<BooleanArray>(s.length){BooleanArray(s.length)}
                
        for(start2 in 1 until s.length-1){
            for(start3 in start2+1 until s.length){
                if(isPalindrom(s, 0, start2-1, isPalindromDpTable)
                   && isPalindrom(s, start2,start3-1, isPalindromDpTable) 
                   && isPalindrom(s, start3, s.length-1, isPalindromDpTable)){

                    return true
                }
            }
        }
        
        
        return false
    }
    
    fun isPalindrom(s:String, i:Int, j:Int, isPalindromDpTable:Array<BooleanArray>):Boolean{
        if(isPalindromDpTable[i][j]){
            return true
        }
        
        if(i<0 || j>=s.length || i>j){
            return false
        }
        
        var size = j-i+1
        var start = i
        var end = j
        
        while(start<=end) {             
            if(isPalindromDpTable[start][end]){
               return true
            }            
            
            if(s[start]!=s[end]){
                return false
            }
            
            start++
            end--
        }
        
        start = i
        end = j        
        while(start<=end) {
            isPalindromDpTable[start][end] =true
            start++
            end--
        }
        
        return true
    }
}
```