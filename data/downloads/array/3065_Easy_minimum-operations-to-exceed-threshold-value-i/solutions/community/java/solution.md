# Simple java solution

**Author:** Siddhant_1602
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4811478/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4811478/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int minOperations(int[] nums, int k) {
        int count=0;
        for(int i=0;i<nums.length;i++)
        {
            if(nums[i]<k)
            {
                count++;
            }
        }
        return count;
    }
}
```