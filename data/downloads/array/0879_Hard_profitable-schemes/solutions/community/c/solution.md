# Recursion -> Error -> Top Down ||  Simple pick/notPick

**Author:** MohakHarjani
**Votes:** 49
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/3439540/](https://leetcode.com/problems/profitable-schemes/solutions/3439540/)

---

## RECURSION [TLE]
```
class Solution {
public:
    int MOD = 1000000007;
    int solve(vector<int>&group, vector<int>&profit, int minProfit, int maxPeople, int index)
    {
        if (maxPeople < 0) return 0; //means that we took more people than we were allowed
        if (index == group.size())
        {

            if (minProfit > 0) return 0; //means that still there is some 'minProfit' left to make
                                         //but now the list of crimes is over :(..so no way to make profit
            else return 1; //either we got (profit = minProfit) or (profit > minProfit)
        }
        
        int pickWays = solve(group, profit, minProfit - profit[index], maxPeople - group[index], index + 1);
        int notPickWays = solve(group, profit, minProfit, maxPeople, index + 1);
        
        return (pickWays + (long long)notPickWays) % MOD;
    }
    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) 
    {
        int ans = solve(group, profit, minProfit, n, 0);
        return ans;
    }
};
```
//=======================================================================================================================
## TOP DOWN [VERSION - 1, Incorrect]
Ok now it\u2019s seems a simple task we need to just memoize our code
3 variables are changing
So we make a **3D dp** to store results
And retrieve results for duplicate calls
**Kaboom done**, Simple

Below is the code 
**Spoiler : It doesn\u2019t work \uD83D\uDE41**
```
class Solution {
public:
    int MOD = 1000000007;
    vector<vector<vector<int>>>dp;
    int solve(vector<int>&group, vector<int>&profit, int minProfit, int maxPeople, int index)
    {
        if (maxPeople < 0) return 0; //means that we took more people than we were allowed
        if (index == group.size())
        {

            if (minProfit > 0) return 0; //means that still there is some 'minProfit' left to make
                                         //but now the list of crimes is over :(..so no way to make profit
            else return 1; //either we got profit = minProfit or profit > minProfit
        }
        
        if (dp[minProfit][maxPeople][index] != -1) return dp[minProfit][maxPeople][index];
        //================================================================================================
        int pickWays = solve(group, profit, minProfit - profit[index], maxPeople - group[index], index + 1);
        int notPickWays = solve(group, profit, minProfit, maxPeople, index + 1);
        //==================================================================================================
        return dp[minProfit][maxPeople][index] = (pickWays + (long long)notPickWays) % MOD;
    }
    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) 
    {
        int sz = group.size();
        dp = vector<vector<vector<int>>>(minProfit + 1, vector<vector<int>>(n + 1, vector<int>(sz, -1)));
        int ans = solve(group, profit, minProfit, n, 0);
        return ans;
    }
};
```
//=======================================================================================================================
## TOP DOWN [VERSION - 2, Accepted]
The reasons why the above code did not work
#Our \u2018**minProfit\u2019 variable would go negative** if we gain more profit than \u2018minProfit\u2019
#as we are decreasing the 'minProfit' variable if we commit a crime (denotes increase in ourProfit)
#minProfit - ourProfit < 0 if (ourProfit > minProfit)
#and **we cannot access negative indexes** in the dp array 

**Solution :** 
#Once minProfit goes negative
#**Reset it to \u20180\u2019 [IMP]**
#This would denote that we achieved our minimum profit
#And we have no profit left to be achieved
#All calls with minProfit <= 0
  would belong to same class => \u2018minProfit = 0\u2019
  
  Corrected Code : 
  ```
  class Solution {
public:
    int MOD = 1000000007;
    vector<vector<vector<int>>>dp;
    int solve(vector<int>&group, vector<int>&profit, int minProfit, int maxPeople, int index)
    {
        if (maxPeople < 0) return 0; //means that we took more people than we were allowed
        if (index == group.size())
        {

            if (minProfit > 0) return 0; //means that still there is some 'minProfit' left to make
                                         //but now the list of crimes is over :(..so no way to make profit
            else return 1; //either we got profit = minProfit or profit > minProfit
        }
        
        if (minProfit < 0) minProfit = 0; //***CHANGED*****
        if (dp[minProfit][maxPeople][index] != -1) return dp[minProfit][maxPeople][index];
        //================================================================================================
        int pickWays = solve(group, profit, minProfit - profit[index], maxPeople - group[index], index + 1);
        int notPickWays = solve(group, profit, minProfit, maxPeople, index + 1);
        //==================================================================================================
        return dp[minProfit][maxPeople][index] = (pickWays + (long long)notPickWays) % MOD;
    }
    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) 
    {
        int sz = group.size();
        dp = vector<vector<vector<int>>>(minProfit + 1, vector<vector<int>>(n + 1, vector<int>(sz, -1)));
        int ans = solve(group, profit, minProfit, n, 0);
        return ans;
    }
};
  ```


