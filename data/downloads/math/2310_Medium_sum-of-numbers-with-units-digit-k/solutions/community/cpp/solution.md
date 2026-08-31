# Coin Change Variation | Infinite supply DP Pattern | CPP

**Author:** zuks_100
**Votes:** 66
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2168185/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2168185/)

---

**DP Pattern**
 * DP on Subsequence / infinite supply problem
* this given question is just a variation of coin change problem (https://leetcode.com/problems/coin-change/)
     since question says
```
Note:
The set can contain multiple instances of the same integer, and the sum of an empty set is considered 0.
 The units digit of a number is the rightmost digit of the number.
```
    
```
class Solution {
public:
   
    //same code as that of coin change
    int coinChange(vector<int>& coins, int amount) {
        int Max = amount + 1;
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 0; i <= amount; i++) {
            for (int j = 0; j < coins.size(); j++) {
                if (coins[j] <= i && dp[i-coins[j]] !=INT_MAX) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] == INT_MAX ? -1 : dp[amount];
    }
 
    
    
    int minimumNumbers(int num, int k) {
    vector<int>res;
    for (int i = 0; i <= num; i++){
        if (i % 10 == k)
           res.push_back(i);
        }
       return coinChange(res, num);

       
    }
    
};
```