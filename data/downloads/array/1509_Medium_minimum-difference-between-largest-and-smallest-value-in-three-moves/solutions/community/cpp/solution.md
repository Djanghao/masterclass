# Optimal + Easy sol | Time - o(nlogn) | Easy Vid Explanation also

**Author:** Atharav_s
**Votes:** 50
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406187/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406187/)

---

https://youtu.be/wQUB0lhYK6Y
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to minimize the difference between the maximum and minimum values in the array after making at most 3 moves. Since we can make up to 3 changes, effectively we can remove up to 3 elements from either end (start or end) of the sorted array to minimize the difference. The main insight is to try out the combinations of removing elements from both ends and find the minimum possible difference.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array nums.
2. If the size of the array n is less than or equal to 4, return 0 since we can remove all elements to get an empty array which results in a difference of 0.
3. Calculate the minimum difference by removing elements in these combinations:
- Remove the last 3 elements.
- Remove the first 3 elements.
- Remove the first 1 and last 2 elements.
- Remove the first 2 and last 1 elements.

The result will be the minimum of these differences.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- \uD835\uDC42(\uD835\uDC5Blog\uD835\uDC5B)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- O(1)

# Code
```
class Solution {
public:
    int minDifference(vector<int>& nums) {

        sort(nums.begin(),nums.end());

        int minVal = INT_MAX;

        int n = nums.size();

        if(n <= 4) return 0;

        minVal = min(minVal, nums[n-4] - nums[0]);
        minVal = min(minVal, nums[n-1] - nums[3]);
        minVal = min(minVal, nums[n-2] - nums[2]);
        minVal = min(minVal, nums[n-3] - nums[1]);

        return minVal;
        
    }
};
```