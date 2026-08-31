# Scala 2 pointers

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/5051882/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/5051882/)

---

# Complexity
- Time complexity:
$$O(m * n)$$ , where:
m = length of pos1 array (number of occurrences of word1)
n = length of pos2 array (number of occurrences of word2) 

- Space complexity:
 $$O(m + n)$$ 

# Code
```
object Solution {
  def shortestWordDistance(wordsDict: Array[String], word1: String, word2: String): Int = {

    var pos1 = Array.emptyIntArray
    var pos2 = Array.emptyIntArray

    // If word1 == word2
    if (word1 == word2) { 
      var pos = Array.emptyIntArray
      for ((word, i) <- wordsDict.zipWithIndex) { 
        if (word == word1) {
          pos = pos :+ i
        }
      }
      
      var res = Int.MaxValue 
      for (i <- 1 until pos.length) {
        res = Math.min(res, pos(i) - pos(i - 1)) 
      }
      res  
    } else {
      // If word1 != word2
      for ((word, i) <- wordsDict.zipWithIndex) {
        if (word == word1) {
          pos1 = pos1 :+ i
        } else if (word == word2) { 
          pos2 = pos2 :+ i
        }
      }
      
      var res = Int.MaxValue
      var p1 = 0
      var p2 = 0

      while (p1 < pos1.length && p2 < pos2.length) {
        res = Math.min(res, Math.abs(pos1(p1) - pos2(p2)))
        if (pos1(p1) < pos2(p2)) {
          p1 += 1
        } else { 
          p2 += 1 
        } 
      }
      res 
    }
  }
}

```