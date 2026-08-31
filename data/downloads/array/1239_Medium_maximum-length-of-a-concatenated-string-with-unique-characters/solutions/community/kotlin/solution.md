# Kotlin || Backtracking

**Author:** mahrezz
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/2500270/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/2500270/)

---

```
class Solution {
    fun maxLength(arr: List<String>): Int {
       
        val charSet = mutableSetOf<Char>()
        val temp = mutableSetOf<Char>()
        
        
        fun isPossibleToConcat(word: String): Boolean{         
            temp.clear()
            
            for(indx in 0 until word.length){
                if(charSet.contains(word[indx]) || temp.contains(word[indx])) return false
                temp.add(word[indx])
            }
            
            return true
        }
        
        
        fun backtrack(i: Int): Int{
           
            if(i == arr.size) return charSet.size
         
            var len = 0

            if(isPossibleToConcat(arr[i])){
                for(indx in 0 until arr[i].length) charSet.add(arr[i][indx])
                len = backtrack(i + 1)  
                for(indx in 0 until arr[i].length) charSet.remove(arr[i][indx])
            }

            return Math.max(len, backtrack(i + 1))
        }
        
        
        
        return backtrack(0)
        
    }
}
```