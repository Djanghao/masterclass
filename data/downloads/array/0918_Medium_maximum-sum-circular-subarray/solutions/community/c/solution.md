# C++ Simple and Short Explained Solution, O(n) TC O(1) SC

**Author:** YehudisK
**Votes:** 69
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/1457933/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/1457933/)

---

**Idea:**
This solution is very similar to the regular maximum subarray solution https://leetcode.com/problems/maximum-subarray/discuss/784202/C%2B%2B-DP-solution-simple-and-short.
But, instead of only calculating the maximum subarray, we also calculate the minimum subarray.
The reason is, that to find a maximum subarray in a circular array where it splits into to parts, we can find the minimum subarray and subtract it from the total sum and it will give us the same solution.
**Time Complexity:** O(n)
**Space Complexity:** O(1)
```
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int max_sum = nums[0], min_sum = nums[0], sum = nums[0], prev_min = nums[0], prev_max = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            sum += nums[i];
            
            prev_max = max(prev_max + nums[i], nums[i]);
            max_sum = max(max_sum, prev_max);
            
            prev_min = min(prev_min + nums[i], nums[i]);
            min_sum = min(min_sum, prev_min);
        }
        
        return sum == min_sum ? max_sum : max(max_sum, sum-min_sum);
    }
};
```
**Like it? please upvote!**