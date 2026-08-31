# Simple single-pass O(n) solution in C++ with comments

**Author:** rkm6
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5061326/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5061326/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Find minNumIndex and maxNumIndex in one O(n) loop.

Subtract the differences of minNumIndex from 0 and maxNumIndex from nums.size()-1. Don't forget to further subtract one common swap of min & max when minNumIndex > maxNumIndex.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

# Space complexity:
$$O(1)$$

# Code
```
class Solution {
public:
    int minimumSwaps(vector<int>& nums)
    {
        int minNum = INT_MAX;
        int maxNum = INT_MIN;
        int minNumIndex = 0, maxNumIndex = nums.size()-1;

        //find minNumIndex and maxNumIndex in one O(n) loop
        for (int i=0; i<nums.size(); i++)
        {
            // >= is crucial to get latest maxNumIndex to minimize swaps
            if (nums[i] >= maxNum)
            {
                maxNum = nums[i];
                maxNumIndex = i;
            }
            // strictly < is crucial to get earliest minNumIndex to minimize swaps
            if (nums[i] < minNum)
            {
                minNum = nums[i];
                minNumIndex = i;
            }
        }

        // when min and max at their respective ends
        if (minNumIndex == 0 && maxNumIndex == nums.size()-1)
        {
            return 0;
        }
        // subtract the differences from their respective ends
        else if (minNumIndex < maxNumIndex)
        {
            return (minNumIndex + (nums.size() - 1 - maxNumIndex));
        }
        // subtract one common swap of min & max when minNumIndex > maxNumIndex
        else
        {
            return (minNumIndex + (nums.size() - 1 - maxNumIndex) - 1);
        }
    }
};
```