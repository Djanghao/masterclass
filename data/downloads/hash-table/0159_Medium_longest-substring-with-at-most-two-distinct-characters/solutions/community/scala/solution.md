# scala code

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4457210/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4457210/)

---

# Code
```
import scala.collection.mutable
object Solution {
    def lengthOfLongestSubstringTwoDistinct(s: String): Int = {
    // If the string is shorter than 3, the whole string is the answer
    if (s.length < 3) return s.length
    
    // Initialize pointers and a map to track character indices
    var left = 0
    var maxLen = 2
    var map = mutable.HashMap[Char, Int]()
        
    for ((char, right) <- s.zipWithIndex) {
        // Store the most recent index of each character
        map.put(char, right)
        
        // If there are three distinct characters in the current window
        if (map.size == 3) {
        // Find the leftmost character to remove
        val delIndex = map.minBy(_._2)._2
        // Remove the leftmost character from the map
        map.remove(s.charAt(delIndex))
        // Move the left pointer past the removed character
        left = delIndex + 1
        }
        // Update maxLen if the current window is larger
        maxLen = Math.max(maxLen, right - left + 1)
    }
    // Return the maximum length found
    maxLen
    }
}

```