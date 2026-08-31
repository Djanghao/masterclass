# Single-liner

**Author:** rrrrrr111
**Votes:** 2
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4105087/](https://leetcode.com/problems/monotonic-array/solutions/4105087/)

---

# Intuition
Just single pass

# Complexity Time $$O(n)$$, Space $$O(1)$$

# Code
```
class Solution {
    fun isMonotonic(nums: IntArray): Boolean =
        nums.asSequence()
            .windowed(2) { (it[0] <= it[1]) to (it[1] <= it[0]) }
            .fold(true to true) { acc, next -> 
                if (!acc.first && !acc.second) // some optimisation
                    return false
                (acc.first && next.first) to (acc.second && next.second) 
            }
            .let { it.first || it.second }
}
```