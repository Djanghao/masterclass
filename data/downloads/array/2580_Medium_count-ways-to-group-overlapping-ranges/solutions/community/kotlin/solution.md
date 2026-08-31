# 🚀️🔥️ Kotlin beats 100% - O(n*log(n)) with sorting

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3257331/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3257331/)

---

# Approach
Sort ranges by start, then keep track of the max range end up to index i. If the range at index i overlaps the max, then we'll just update the max. Else there is another range which means we must increase count of different range groups.

The answer is multiplied by 2 because every time we find a non overlapping range, we foud a new group of independent ranges.

We can create 2 groups of n different ranges 2^n different ways.

# Complexity
- Time complexity:
$$O(n*log(n))$$ 

- Space complexity:
$$O(1)$$ 

# Code
```
import kotlin.math.pow
class Solution {
    fun countWays(ranges: Array<IntArray>): Int {
        ranges.sortBy { it[0] }
        var rangesCount = 1
        var lastRange = ranges[0][1]
        var ans = 2

        for (i in 1 until ranges.size) {
            if (lastRange < ranges[i][0]) {
                ans = (ans * 2) % 1000000007    
            }
            
            lastRange = maxOf(lastRange, ranges[i][1])
        }
        return ans
    }
}
```