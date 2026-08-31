# Kotlin solution using map

**Author:** lakhansoren
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/689582/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/689582/)

---

```
class Solution {
    fun canReorderDoubled(A: IntArray): Boolean {
        A.sort()
        
        val map = mutableMapOf<Int , Int>()
        
        for(i in 0 until A.size) {
            val x = map[A[i]]?:0 
            if(map.contains(A[i])) map[A[i]] = x + 1
            else map[A[i]] = 1
        }
                
        for(i in A.size  - 1 downTo 0) {
            if(map[A[i]] == 0) continue
            if(A[i] >= 0) if(A[i] % 2 != 0) return false
            if(A[i] >= 0 ) if(false == map.contains(A[i] / 2) || map[A[i] / 2] == 0)  { 
                return false 
            }
            if(A[i] < 0){ 
                if(false == map.contains(A[i] * 2) || map[A[i] * 2] == 0) {  
                return false 
            }
            }
            if(A[i] >= 0) { 
                var x = map[A[i] / 2]?:0
                map[A[i] / 2] = x - 1
            }
            if(A[i] < 0) { 
                var x = map[A[i] * 2]?:0 
                map[A[i] * 2] = x  - 1
            }
            var x = map[A[i]]?:0
            map[A[i]] = x - 1
        }
        
        return true
    }
}
```