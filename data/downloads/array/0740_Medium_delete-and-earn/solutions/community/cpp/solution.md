# Memoization -> Tabulation | DP | C++

**Author:** TusharBhart
**Votes:** 23
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/3229409/](https://leetcode.com/problems/delete-and-earn/solutions/3229409/)

---

# Memoization
```
class Solution {
    int dfs(int i, int n, vector<int> &nums, unordered_map<int, int> &m, vector<int> &dp) {
        if(i == n) return 0;
        if(dp[i] != -1) return dp[i];

        int notpick = 0 + dfs(i + 1, n, nums, m, dp);
        int pick = m[nums[i]] * nums[i];
        if(i + 1 < n && nums[i] + 1 == nums[i + 1]) pick += dfs(i + 2, n, nums, m, dp);
        else if(i + 1 < n && nums[i] + 1 != nums[i + 1]) pick += dfs(i + 1, n, nums, m, dp);
        
        return dp[i] = max(pick, notpick);
    }
public:
    int deleteAndEarn(vector<int>& nums) {
        unordered_map<int, int> m;
        for(int i : nums) m[i]++;

        vector<int> v;
        for(auto i : m) v.push_back(i.first);
        sort(v.begin(), v.end());
        int n = v.size();
        vector<int> dp(n, -1);

        return dfs(0, n, v, m, dp);
    }
};
```

# Tabulation
```
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        unordered_map<int, int> m;
        for(int i : nums) m[i]++;

        vector<int> v;
        for(auto i : m) v.push_back(i.first);
        sort(v.begin(), v.end());
        int n = v.size();
        vector<int> dp(n + 1);

        for(int i=n-1; i>=0; i--) {
            int notpick = 0 + dp[i + 1];
            int pick = m[v[i]] * v[i];
            if(i + 1 < n && v[i] + 1 == v[i + 1]) pick += dp[i + 2];
            else if(i + 1 < n && v[i] + 1 != v[i + 1]) pick += dp[i + 1];
            dp[i] = max(pick, notpick);
        }
        return dp[0];
    }
};
```