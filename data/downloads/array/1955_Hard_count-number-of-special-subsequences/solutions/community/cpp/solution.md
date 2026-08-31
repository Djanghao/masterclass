# Clean and Commented with Explanation

**Author:** rupakk
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1409563/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1409563/)

---

Code:
```
class Solution {
public:
    int countSpecialSubsequences(vector<int>& nums) {
        long long modValue = 1e9 + 7;
        long long dp[3] = {0, 0, 0};
        //dp[0] rerpesnts no of subsequences of 0
        //dp[1] rerpesnts no of subsequences of 0 1
        //dp[2] rerpesnts no of subsequences of 0 1 2
        for (int i = 0; i < nums.size(); ++i)
        {
            switch (nums[i])
            {
            case 0:
            {
                dp[0] = (dp[0] + dp[0] + 1) % modValue;
                // If we find new 0 then three types of subsequences exist
                // 1. Old ones(hence once dp[0])
                // 2. New ones formed by pushing a 0 to old ones(hence another dp[0])
                // 3. One zero itself (hence +1)
                break;
            }
            case 1:
            {
                dp[1] = (dp[1] + dp[0] + dp[1]) % modValue;
                // If we found a 1 then three types of subsequences exist
                // 1. The already present subsequences till that index(hence once dp[1])
                // 2. The new subsequnces formed by pushing a 1 to all the subsequnces of 0(hence dp[0])
                // 3. The new subsequences formed by pushing a 1 to all the old subsequences of 01(hence the last dp[1]) 
                break;
            }
            case 2:
            {
                dp[2] = (dp[2] + dp[1] + dp[2]) % modValue;
                // If we found a 2 then three types of subsequences exist
                // 1. The already present subsequences till that index(hence once dp[2])
                // 2. The new subsequnces formed by pushing a 2 to all the subsequnces of 01(hence dp[1])
                // 3. The new subsequences formed by pusing a 2 to all the old subsequences of 012(hence the last dp[2]) 
                break;
            }
            }
        }
        return dp[2];
    }
};
```