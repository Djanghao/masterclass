# Simple Kotlin code O(n)

**Author:** raagapranitha
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3027474/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3027474/)

---

# Approach
You just need to keep track of the maximum damage in any level. You can only use the armor one time and you can only take block as much as the armor can take.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    fun minimumHealth(damage: IntArray, armor: Int): Long {
        var ans: Long = 1
        var maxDamage = Int.MIN_VALUE
        for(d in damage) {
            maxDamage = Math.max(maxDamage, d)
            ans += d
        }
        return ans - Math.min(armor, maxDamage)
    }
}
```