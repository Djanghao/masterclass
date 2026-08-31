# C++ Simple Dynamic Programming Explained Solution

**Author:** YehudisK
**Votes:** 67
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/950659/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/950659/)

---

```
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for (auto a : nums) // Sum up the array
            sum += a;
        
        if (sum % 2) // If the sum is odd - we can never find two equal partitions
            return false;
        
        sum /= 2;
        vector<bool> dp(sum+1, false); // dp keeps for each number if it has a subset or not
        dp[0] = true;
        
        for (auto a : nums) {
            for (int i = sum; i >= a; i--) {
                dp[i] = dp[i] || dp[i-a]; // for each number, either we use it or we don't
            } 
        }
        return dp[sum];
    }
};
```
**Like it? please upvote...**