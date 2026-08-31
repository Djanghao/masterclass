# [C++/Python] || DP || With Approach || Easy to Understand

**Author:** Aditya00
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739047/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739047/)

---

# Approach 
The approach utilizes dynamic programming with an array dp to store the maximum jumps from index 0 to index i. Initially, all elements in dp are set to -1, except for dp[0] which is set to 0 to represent the starting index.

The code then iterates through each index from 1 to n-1 (where n is the size of nums). For each index, it looks back at previous indices (from i - 1 to max(0, i - target)) and checks if the jump from that index to the current index is within the given target range. If it is, and if there is a valid jump from that previous index (dp[j] != -1), the code updates the current dp[i] value by either setting it for the first time or taking the minimum of the current value and dp[j] + 1.

Finally, the code returns the value at the last index of dp, which represents the maximum number of jumps required to reach the last index. If dp[n - 1] is still -1, it means reaching the last index is not possible, so the code returns -1 as the result.


# Code
```
class Solution {
public:
    int maximumJumps(vector<int>& nums, int target) {
        int n = nums.size();
        vector<int> dp(n, -1); // dp[i] represents the maximum jumps from index 0 to index i
        
        dp[0] = 0; // Starting index
        
        for (int i = 1; i < n; i++) {
            for (int j = i - 1; j >= max(0, i - target); j--) {
                if (nums[j] >= nums[i] - target && nums[j] <= nums[i] + target) {
                    if (dp[j] != -1) {
                        if (dp[i] == -1) {
                            dp[i] = dp[j] + 1;
                        }
                        else {
                            dp[i] = min(dp[i], dp[j] + 1);
                        }
                    }
                }
            }
        }
        
        return dp[n - 1] == -1 ? -1 : dp[n - 1];
    }
};
```
# Python
```
class Solution:
    def maximumJumps(self, nums: List[int], target: int) -> int:
        dp = [-1] * len(nums)
        dp[0] = 0

        for i in range(1, len(nums)):
            for j in range(i - 1, -1, -1):
                if -target <= nums[i] - nums[j] and nums[i] - nums[j] <= target:
                    if dp[j] > -1:
                        dp[i] = max(dp[i], dp[j] + 1)

        return dp[-1]

```