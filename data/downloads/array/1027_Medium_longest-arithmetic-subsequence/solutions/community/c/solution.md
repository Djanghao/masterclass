# C++ DP Solution | DP | [1027]

**Author:** SameerNITW
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/1854353/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/1854353/)

---

dp[i][diff] gives us the length of the arthematic sequence ends at index i with difference diff
So for each dp[j][diff] which has a difference diff with previous index i will be maximum(2,dp[i][diff])--> 2 means the sequence has just begun at these two indices where if previous i has already sme length then the length is increased by 1.
Result will be maximum of all dp[j][diff]

While **declaring dp matrix** we use the maximum length of 1001 here because as per the given constraints the difference can have a minimum value of -500 and maximum value of 500 so the difference will be increased by 500 to keep the index positive in the matrix.

```
class Solution {
public:
    int longestArithSeqLength(vector<int>& nums) {
        int n = nums.size(),res = 2,diff;
        vector<vector<int>>dp(n,vector<int>(1001,0));
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                diff = nums[j]-nums[i]+500;
                dp[j][diff] = max(2,dp[i][diff]+1);
                res = max(res,dp[j][diff]);
            }
        }
        return res;
    }
};
```

Feel free to comment your queries if any
**Upvote** if found useful
**Thank You :)**