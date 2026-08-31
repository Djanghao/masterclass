# Kotlin simple loop

**Author:** 3AKOH
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/3376472/](https://leetcode.com/problems/frog-jump-ii/solutions/3376472/)

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
    fun maxJump(stones: IntArray): Int {
        var result = stones[1] - stones[0]

        for (i in 2 until stones.size) {
            result = Math.max(result, stones[i] - stones[i - 2])
        }
        return result
    }
}
```