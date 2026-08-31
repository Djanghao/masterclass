# C++ Best and easy DP Solution

**Author:** 18bce192
**Votes:** 68
**Link:** [https://leetcode.com/problems/combination-sum/solutions/1103237/](https://leetcode.com/problems/combination-sum/solutions/1103237/)

---

Similar idea from the problem [coin-change-2](https://leetcode.com/problems/coin-change-2/) .
it is simplest and fastest dp solution, we don't need to sort elements \uD83D\uDE42
```
class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& nums, int target) {
		// dp vector to store all possible combinations of the target sum
        vector <vector <vector <int>>> dp(target+1);
        dp[0]={{}};
        for(int &i:nums)
        {
		// Iterating through all the elements from array nums aka candidates
            for(int j=i;j<=target;j++)
            {
			// Finding all possible ways to achieve sum j from element i
                for(auto v:dp[j-i])
                {
                    v.push_back(i);
                    dp[j].push_back(v);
                }
            }
        }
		// Finally, returning our ans \uD83D\uDE43
        return dp[target];
    }
};
```
If you liked this solution please upvote\uD83D\uDE4F if you have any query plz comment below \uD83D\uDC47