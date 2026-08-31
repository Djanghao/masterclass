# Beats 100.00%

**Author:** stewie667
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5816439/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5816439/)

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
```kotlin []
class Solution {
    fun canAliceWin(nums: IntArray): Boolean {
        
        var sum = 0

        for ( i in nums ) {

            if ( i >= 10 ) {
                sum += i
            } else {
                sum -= i
            }

        }

        return sum != 0

    }
}
```