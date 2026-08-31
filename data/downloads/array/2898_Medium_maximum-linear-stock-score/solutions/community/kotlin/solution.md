# Kotlin Beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/5424381/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/5424381/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maxScore(prices: IntArray): Long {
        val map = HashMap<Int,Long>()
        prices.forEachIndexed{ i, p -> 
            map[p - i] = map.getOrDefault(p - i, 0L) + p
        }
        

        return map.values.max()!!
    }
}
```