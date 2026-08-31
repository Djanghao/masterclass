# Java -  Keep track of Increasing and Decreasing subarray lengths

**Author:** Makubex74
**Votes:** 43
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985479/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985479/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Compare current and previous elements of the array and update the strictly increasing subarray length and strictly decreasing subarray length when their respective conditions are met.
# Approach
<!-- Describe your approach to solving the problem. -->
- Keep track of the strictly increasing subarray length and the strictly decreasing subarray length.
- If the previous element is smaller than the current element, it is a strictly increasing sequence, so we increment the `incLength` by 1 and reset the `decLength` to `1`.
- If the previous element is greater than the current element, it is a strictly decreasing sequence, so we increment the `decLength` by 1 and reset the `incLength` to `1`.
- If the previous element and current element are the same, reset both `incLength` and `decLength` to 1.
- Update the `maxLength` at the end of every iteration.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int maxLength = 1;
        int incLength = 1;
        int decLength = 1;
        for(int i = 1; i < nums.length; i++) {
            if(nums[i] > nums[i - 1]) {
                incLength++;
                decLength = 1;
            } else if(nums[i] < nums[i - 1]) {
                decLength++;
                incLength = 1;
            } else {
                incLength = 1;
                decLength = 1;
            }
            maxLength = Math.max(maxLength, Math.max(incLength, decLength));
        }
        return maxLength;
    }
}
```