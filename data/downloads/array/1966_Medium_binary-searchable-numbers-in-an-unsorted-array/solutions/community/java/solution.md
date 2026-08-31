# Best Solution using Prefix, Suffix approach

**Author:** KuvonchbekN
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/5369868/](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/5369868/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The target will not be found if it is removed from the sequence. When does this occur?

# Approach
<!-- Describe your approach to solving the problem. -->
If a pivot is to the left of and is greater than the target, then the target will be removed. The same occurs when the pivot is to the right of and is less than the target.
Since any element can be chosen as the pivot, for any target NOT to be removed, the condition described in the previous sentence must never occur.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int binarySearchableNumbers(int[] nums) {
        if(nums.length == 1){
            return 1;
        }
        int n = nums.length;
        int leftBiggers[] = new int[n]; //we need maxes on the left
        int rightSmallers[] = new int[n];//we need mins on the right

        int max = Integer.MIN_VALUE;
        for(int i=0; i<n; i++){
            leftBiggers[i] = Math.max(max, nums[i]); 
            max = Math.max(max, nums[i]);
        }

        int min = Integer.MAX_VALUE;
        for(int i=n-1; i>=0; i--){
            rightSmallers[i] = Math.min(nums[i], min);
            min = Math.min(nums[i], min);
        }

        int cnt = 0;
        for(int i=0; i<nums.length; i++){
            if(rightSmallers[i] != nums[i] || leftBiggers[i] != nums[i])continue;
            cnt++;
        }

        return cnt;
    }
}
```