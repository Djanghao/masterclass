# Recursion + Memoization | Simple and easy to understand | C++ | Java | Python

**Author:** kshivam
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739274/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739274/)

---

# Intuition
At every index we can have n possible jumps, so this gives us the idea of recursion. Using recurison the complexity will be O(n^n) which is not at all feasible, and so we need to apply memoization. (store answer of the sub-problems)

# Approach
1. From every index we will try to jump at every possible index. (ensuring the required condition is met)
2. The current jump will add 1 to our answer and recursion call will give the number of jumps rerquired for that sub problem.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) stack space and O(n) size of the dp

# C++
```
class Solution {
public:
    int solve(int idx, vector<int>& dp, vector<int>& nums, int target){
        if(idx==nums.size()-1) return 0;
        
        if(dp[idx]!=-1) return dp[idx];
        
        int res=INT_MIN;
        for(int i=idx+1; i<nums.size(); i++){
            if(nums[i]-nums[idx]<=target && nums[i]-nums[idx]>=-target){
                res=max(res,1+solve(i,dp,nums,target));
            }
        }
        
        return dp[idx]=res;
    }
    int maximumJumps(vector<int>& nums, int target) {
        int n=nums.size();
        vector<int> dp(n,-1);
        
        int ans=solve(0,dp,nums,target);
        return ans<0 ? -1 : ans;
        
    }
};
```

# Java
```
class Solution {
    public int solve(int idx, int[] dp, int[] nums, int target) {
        if (idx == nums.length - 1) return 0;

        if (dp[idx] != -1) return dp[idx];

        int res = Integer.MIN_VALUE;
        for (int i = idx + 1; i < nums.length; i++) {
            if (nums[i] - nums[idx] <= target && nums[i] - nums[idx] >= -target) {
                res = Math.max(res, 1 + solve(i, dp, nums, target));
            }
        }

        return dp[idx] = res;
    }

    public int maximumJumps(int[] nums, int target) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, -1);

        int ans = solve(0, dp, nums, target);
        return ans < 0 ? -1 : ans;
    }
}
```

# Python
```
class Solution:
    def solve(self, idx, dp, nums, target):
        if idx == len(nums) - 1:
            return 0

        if dp[idx] != -1:
            return dp[idx]

        res = float('-inf')
        for i in range(idx + 1, len(nums)):
            if nums[i] - nums[idx] <= target and nums[i] - nums[idx] >= -target:
                res = max(res, 1 + self.solve(i, dp, nums, target))

        dp[idx] = res
        return dp[idx]

    def maximumJumps(self, nums, target):
        n = len(nums)
        dp = [-1] * n

        ans = self.solve(0, dp, nums, target)
        return -1 if ans < 0 else ans
```
