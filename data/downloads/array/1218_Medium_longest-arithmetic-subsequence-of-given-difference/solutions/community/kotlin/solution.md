# Kotlin - DP by following tips

**Author:** alialialiiiiii
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/2365748/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/2365748/)

---

```
class Solution {
    fun longestSubsequence(arr: IntArray, difference: Int): Int {
        val map = HashMap<Int, Int>()
        
        for(i in 0 .. arr.lastIndex){
          val previousValueCount = map.getOrDefault(arr[i] - difference, 0)
          map.put(arr[i], previousValueCount + 1)
        }
        return map.values.max()?:1
    }
```