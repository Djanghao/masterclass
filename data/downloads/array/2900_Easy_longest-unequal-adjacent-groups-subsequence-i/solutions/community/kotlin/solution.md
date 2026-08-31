# simply iterate

**Author:** raghurambtechit
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/6114398/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/6114398/)

---


# Code
```kotlin []
class Solution {
    fun getLongestSubsequence(words: Array<String>, groups: IntArray): List<String> {
        var i = 0
        val n = words.size
        
        val subsequence = mutableListOf<String>()
        while (i < n) {
            subsequence.add(words[i])
            while (i < n - 1 && groups[i] == groups[i + 1]) {
                i++
            } 
            i++
        }
        
        return subsequence
    }
}
```