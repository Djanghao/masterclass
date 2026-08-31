# Easy to Understand | Well written | Beats 100%

**Author:** user9743m
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4037453/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4037453/)

---

# Approach
Traverse the nums array - Keep a counter for delete whenever the condition breaks, use that counter to calculate the new index for following elements

# Complexity
- Time complexity:
O(N)

- Space complexity:
Constant

# Code
```
class Solution {
    fun minDeletion(nums: IntArray): Int {
        var result = 0; var delete = 0
        for(i in 0 until nums.size - 1) {
            val index = i - delete
            if(index % 2  == 0 && nums[i] == nums[i + 1]) {
                delete++
            }
        }

        if((nums.size - delete) % 2 != 0)
            delete++

        return delete
    }
}
```