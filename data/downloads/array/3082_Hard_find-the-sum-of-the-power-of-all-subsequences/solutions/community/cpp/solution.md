# Take - NotTake DP

**Author:** kreakEmp
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884161/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884161/)

---


# Approach
- We need to go for recursive solution with take and not-take each of the item from the nums array and keep evaluating sum and numbers of itmes we have taken.
- While doing so, check if the sum equals to the k, then we can have 2^(nums.size() - count) times subsequences that have sum equal k for a particular subsequence considered.
- We need to memorise the answer to optimise runtime.


# Code
```
class Solution {
public:
    int m = 1e9 + 7;
    vector<vector<vector<int>>> dp;
    
    long long power(int n){
        if(n <= 1) return (n+1);
        long long res = power(n/2);
        if(n%2) return (((res*res)%m)*2)%m;
        return ((res*res)%m);
    }
    
    long long solve(vector<int>& nums, int k, int i, int sum, int count){
        if(sum == k) {
            return power(nums.size() - count);
        }
        if(i >= nums.size() || sum > k ) return 0;
        if(dp[i][count][sum] != -1) return dp[i][count][sum];
        
        long long take = solve(nums, k, i + 1, sum + nums[i], count + 1);
        long long notTake = solve(nums, k, i + 1, sum, count);
        return dp[i][count][sum] = (take + notTake)%m;
    }
    
    int sumOfPower(vector<int>& nums, int k) {
        dp.resize(100, vector<vector<int>>(110, vector<int>(110, -1)));
        return solve(nums, k, 0, 0, 0);
    }
};
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---