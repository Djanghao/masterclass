# Scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/4436736/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/4436736/)

---

# Code
```
import scala.collection.mutable.Map

object Solution {
    def countLetters(S: String): Int = {
        
        if (S == null || S.length() == 0) return 0
        if (S.length() == 1) return 1
        
        var start = 0
        var end = 0
        var ans = 0
        
        val map: Map[Char, Int] = Map()
        
        while (end < S.length()) {
            
            val right = S.charAt(end)
            
            map(right) = map.getOrElse(right, 0) + 1
            
            while (map.size > 1) {
                
                val left = S.charAt(start)
                
                map(left) = map(left) - 1
                
                if (map(left) == 0) map.remove(left)
                
                start += 1
            }
            
            ans += map(right)
            end += 1
        }
        ans
    }
}


```