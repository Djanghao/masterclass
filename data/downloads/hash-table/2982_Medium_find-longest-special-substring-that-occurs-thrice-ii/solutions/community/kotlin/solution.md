# Kotlin using binary search and map

**Author:** user3122LQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4846989/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4846989/)

---



# Code
```
class Solution {
   fun maximumLength(s: String): Int {

    var low = 0
    var high = s.length-1

    while(low<high){
        var mid = low + (high-low)/2
        if(isThereThreeSpecialSubstrings(s,mid)) {
            low = mid +1
        }else{
            high = mid
        }
    }

    return low-1
}

private fun isThereThreeSpecialSubstrings(s:String, k:Int):Boolean{
    var specialMap = mutableMapOf<Char,Int>()
    var window = mutableMapOf<Char,Int>()
    var j= 0
    while(j <k){
        window.put(s[j], (window[s[j]]?:0)+1)
        j++
    }
    
    // check if it is special and if yes add to special map
    if(window.size==1) specialMap.put(window.asIterable().first().key,1)

    for (i in k..s.length-1){ 
        //remove first character
        window.put(s[i-k], (window.get(s[i-k])?:0)-1)
        if(window.getValue(s[i-k])<=0) window.remove(s[i-k])

        // add new charactre
        window.put(s[i], (window[s[i]]?:0)+1)

        // check if it is special and if yes add to special map
        if(window.size==1) specialMap.put(s[i],(specialMap[s[i]]?:0)+1)
        
        // check is we have 3 instance os special character
        if(specialMap.values.any{it == 3}) return true
    }
    
    return false
}
}
```