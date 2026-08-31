# Kotlin + Binary Search (time: O(target.len * log(source.len)))

**Author:** ivv135uk
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/3271707/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/3271707/)

---

```
class Solution {
    
    //Shortest Way to Form String
    //https://leetcode.com/problems/shortest-way-to-form-string/solution/
    //time: O(target.len * log(source.len))
    //space: O(1)
    fun shortestWay(source: String, target: String): Int { 
      
        val charMap = mutableMapOf<Char, MutableList<Int>>()
        for(i in 0 until source.length){
            charMap.computeIfAbsent(source[i]){ mutableListOf<Int>() }.add(i)
        }
        
        var count = 1
        var left = 0
        
        for(i in 0 until target.length){
            
            val char = target[i]
            
            if(char !in charMap){
                return -1
            }
            
            val r1 = findChar(char, charMap, left)

            if(r1 != -1) {
                left = r1 + 1
            }else {
                count++
                left = 0
                val r2 = findChar(char, charMap, left)
                left = if(r2 == -1){
                    return -1
                }else{
                    r2 + 1
                }
            }
        }
        
        return count
    }
        
    private fun findChar(char :  Char, charMap: MutableMap<Char, MutableList<Int>>, minIndex : Int) : Int{
        
        val arr :  MutableList<Int> = if(charMap[char] != null) charMap[char]!! else return -1
      
        var res = -1
        
        var start = 0
        var end = arr.size - 1
        
        while(start <= end){
            
            var mid = start + (end - start)/2
            
            val index = arr[mid]
            if(index < minIndex){
                start = mid + 1
            }else if(index >= minIndex){
                res = index
                end = mid - 1
            }
        }
        
        return res
    }
}
```