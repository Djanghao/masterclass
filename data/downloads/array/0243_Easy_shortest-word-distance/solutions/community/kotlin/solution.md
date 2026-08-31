# Beats 100% memory and 95% speed

**Author:** venkat20
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/2916305/](https://leetcode.com/problems/shortest-word-distance/solutions/2916305/)

---



# Complexity
- Time complexity: O(M.N), M is the size of wordsDict and N is the length of word1 and word2
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)

# Code
```
class Solution {
    fun shortestDistance(wordsDict: Array<String>, word1: String, word2: String): Int {
       
       var i = -1
       var j = -1
       var minDistance = wordsDict.size
       var idx = 0
       for(word in wordsDict) {
           if(word == word1) {
               i = idx
           } else if(word == word2) {
               j = idx
           }
           idx++

           if( i != -1 && j != -1) {
               minDistance = Math.min(minDistance, Math.abs(i - j))
           }
       }
       return minDistance
    }

    
}
```