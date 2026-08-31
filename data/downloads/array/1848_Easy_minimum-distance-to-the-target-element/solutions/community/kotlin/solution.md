# kotlin easy solution

**Author:** frcndk
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/3261658/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/3261658/)

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
import kotlin.math.abs

class Solution {
    fun getMinDistance(nums: IntArray, target: Int, start: Int): Int {
        var list = mutableListOf<Int>()

        for(i in nums.indices) {
            if(nums[i] == target) {
                list.add(abs(i - start))
            }
        }
        return list.min()!!
    }
}
```