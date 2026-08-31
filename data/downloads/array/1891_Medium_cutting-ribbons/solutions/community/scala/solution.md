# Scala Binary search

**Author:** codecobra
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/1611529/](https://leetcode.com/problems/cutting-ribbons/solutions/1611529/)

---

```
object Solution {
    def maxLength(ribbons: Array[Int], k: Int): Int = {
        
        // Standard binary search algorithm to find the first index(or number from l to h)
        // for which the function f(x) returns true.  
		// This search function is modeled after golang libary sort.Search() as in https://go.dev/src/sort/search.go
        def Search(l: Int, h: Int, f: (Int) => Boolean): Int = {
            if (l >= h) l else {
                val m = l + (h-l)/2
                if (!f(m)) Search(m+1, h, f) else Search(l, m, f)
            }
        }
        
       
        // Use binary search to find the first segment length that you can't
        // cut into k segments with length x.
        val length = Search(1, ribbons.max+1, (x: Int) => {
           ribbons.map(_/x).sum < k
        })
        // You can cut into k segments with the below length.
        length-1
    }
    
    
}
```