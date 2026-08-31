# C++ || Monotonic Stack || next greater and next smaller || top-down DP

**Author:** target_locked
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/4978354/](https://leetcode.com/problems/jump-game-viii/solutions/4978354/)

---

# Intuition
We have 2 options for the present index, either choose the next greater or next smaller. 

# Approach
Calculate next greater and next smaller element. Use top down DP to choose min of the options. If either of them is -1(no next larger or smaller element), we skip the computation for that. 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(3 * N) => O(N)

# Code
```
class Solution {
public:
    vector <int> next_greater(vector <int>& nums) {
        stack <int> st;
        int n = nums.size();
        vector <int> nge(nums.size(), -1);
        for (int i = n - 1; i >= 0; i--) {
            while (!st.empty() and nums[st.top()] < nums[i]) st.pop();
            if (!st.empty()) nge[i] = st.top();
            st.push(i);
        }
        return nge;
    }

    vector <int> next_smaller(vector <int>& nums) {
        stack <int> st;
        int n = nums.size();
        vector <int> nse(nums.size(), -1);
        for (int i = n - 1; i >= 0; i--) {
            while (!st.empty() and nums[st.top()] >= nums[i]) st.pop();
            if (!st.empty()) nse[i] = st.top();
            st.push(i);
        }
        return nse;
    }
    
    long long score(vector <int>& costs, vector <int>& nge, vector <int>& nse, int i, vector < long long >& dp) {
        if (i == costs.size() - 1) return 0;
        if (dp[i] != -1) return dp[i];
        long long small = LONG_MAX, large = LONG_MAX;
        if (nse[i] != -1) {
            small = costs[nse[i]] + score(costs, nge, nse, nse[i], dp);
        }
        if (nge[i] != -1) {
            large = costs[nge[i]] + score(costs, nge, nse, nge[i], dp);
        }
        return dp[i] = min(small, large);
    }

    long long minCost(vector<int>& nums, vector<int>& costs) {
        vector <int> nge = next_greater(nums);
        vector <int> nse = next_smaller(nums);
        vector < long long > dp(nums.size(), -1);
        return score(costs, nge, nse, 0, dp);
    }
};
```