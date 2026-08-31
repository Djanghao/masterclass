# Scala simple solution based on char frequencies

**Author:** gorbenkoya
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/6126908/](https://leetcode.com/problems/reorganize-string/solutions/6126908/)

---

# Intuition
My intuition was wrong, I tried recusive approach which lead me to Mem limit exceeded problem

# Approach
find champion character, place it in even indexes in the result array,
place all other chars in any free positions

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ - we need new result array with the size of the string

# Code
```scala []
import collection.mutable.Map
import scala.collection.immutable.ListMap

object Solution {
    def reorganizeString(s: String): String = {
        // count char frequencies and find champion character
        var champC = s.head
        var champFreq = 0
        val freq = collection.mutable.Map[Char, Int]()
        for (c <- s) {
            val f = freq.getOrElse(c, 0)
            val incFreq = f + 1
            freq.put(c, incFreq)
            if (incFreq > champFreq) {
                champFreq = incFreq
                champC = c
            }
        }

        // if single char takes more than half of the string then impossible to rearrange
        val oneCharHalfExists = freq.exists { case (k, f) => f > ((s.length + 1) / 2)}
        if (oneCharHalfExists) return ""

        var ind = 0
        var result = new Array[Char](s.length)
        
        // place champion char
        for (i <-1 to freq(champC)) {
            result(ind) = champC
            ind = ind + 2
        }

        // place rest of chars 
        for (kv <- freq) {
            var (c, f) = kv
            if (c != champC) {
                while (f > 0) {
                    if (ind > s.length -1) ind = 1
                    result(ind) = c
                    ind = ind + 2
                    f = f - 1 
                }
            }
        }
        result.mkString("")
    }    
}
```