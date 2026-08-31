# Simple, single-pass solution

**Author:** hiyosilver
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/5983458/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/5983458/)

---

# Intuition
Keeping track of the highest value encountered should be all the information that is needed for a solution.

# Approach
Loop over the array and keep track of the highest value known to be on the left (threshold), aswell as the highest value seen so far.
If the current value is below the threshold value, it is guaranteed to be in the left half, as is the highest number seen, which becomes the new threshold value.
Return the index of the last time this happened + 1.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution {
    public int PartitionDisjoint(int[] nums) {
        int maxValue = nums[0];
        int maxSeen = maxValue;
        int idx = 0;
        for(int i = 1; i < nums.Length; i++) {
            maxSeen = Math.Max(maxSeen, nums[i]);
            if(nums[i] < maxValue) {
                maxValue = maxSeen;
                idx = i;
            }
        }
        return idx + 1;
    }
}
```