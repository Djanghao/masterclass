# Easy Math 100% 100%

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5881748/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5881748/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
In the case of partitions with coordinates 1, we record the length of each part, and the answer will be the product of the lengths of all the splitting parts.

The only exception is index 0, which has no previous parts to combine.

[0,1,0,0,1,1,0,0,0,1,0,0,0] ->
[0,1] length = 1
[0,0,1] length = 3
[1] length = 1
[0,0,0,1] length = 4
[0,0,0] -> ignore
answer = 1 * 3 * 1 * 4

We don't need to worried about the 0 at the end, the can be part of the last partition

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {

    private val mod: Long = 1_000_000_007

    fun numberOfGoodSubarraySplits(nums: IntArray): Int {
        // Time: O(N), Space: O(N)
        val count = mutableListOf<Int>()
        var sum = 0

        for(num in nums) {
            sum++

            if(num == 1) {
                count.add(sum)
                sum = 0
            }
        }

        if(count.isEmpty()) return 0
        
        var result = 1L
        for(index in 1 .. count.lastIndex) {
            result *= count[index]
            result = result % mod
        }

        return result.toInt()
    }
}
```