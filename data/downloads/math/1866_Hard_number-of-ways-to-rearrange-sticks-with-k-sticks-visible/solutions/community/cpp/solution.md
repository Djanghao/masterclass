# Recursive + Memoization Approach

**Author:** upadhyayabhi0107
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2859201/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2859201/)

---

# Intuition + Approach
Since We can see that if we take the biggest stick we cant see the rest stick that comes right to it so one time fix the big stick and other times we don't take it.


# Complexity
- Time complexity: O(n * k)

- Space complexity: O(n * k)

# Code
```
#define ll long long
class Solution {
public:

    int mod = 1e9 + 7;
    ll dfs(int n , int k , vector<vector<int>>& dp){
        if(k > n || k == 0) return 0;
        if(n <= 2) return 1; // if there are 1 and 2
                            // remaining there is 1 way to keep them

        if(dp[n][k] != -1) return dp[n][k];

        ll ans = 0;

        // IF we take this value then there is 1 less 
        // and since we took big stick 
        // the k-1 goes biggest stick
        ans = (ans + dfs(n-1 , k-1 , dp))%mod;
        // If we don't take the biggest stick the ways are n-1 
        ans = (ans + (n-1) * dfs(n-1 , k , dp))%mod;

        return dp[n][k] = ans;
    }
    int rearrangeSticks(int n, int k) {
        vector<vector<int>> dp (n+1 , vector<int>(k + 1 , -1));
        return dfs(n , k , dp);
    }
};
```