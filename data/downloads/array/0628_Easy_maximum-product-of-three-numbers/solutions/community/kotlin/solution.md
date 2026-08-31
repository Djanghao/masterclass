# Kotlin O(n), sorting short lists.

**Author:** ZZJJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3799502/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3799502/)

---

cost of sorting a short list (size 3 or 4) is  O(1). 

# Code
```
class Solution {
    fun maximumProduct(ns: IntArray): Int {
        val small = LinkedList<Int>()
        val large = LinkedList<Int>()

        for(n in ns){
            small +=n
            small.sort() // size 3 at most,O(1)
            if(small.size >2)
                small.removeLast()

            large +=n 
            large.sort() // size 4 at most , O(1) 
            if(large.size > 3)
                large.removeFirst()
            
        }

        return maxOf(large[0] * large[1] * large[2] , large[2] * small[0] * small[1])
        
    }
}
```