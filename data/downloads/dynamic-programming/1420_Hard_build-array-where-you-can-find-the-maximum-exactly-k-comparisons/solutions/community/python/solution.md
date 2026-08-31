# Simple Solution || Beginner Friendly || Easy to Understand ✅

**Author:** Anirban_Pramanik10
**Votes:** 66
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139929/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139929/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- We are given three integers `n, m, and k`.
- We need to find the number of ways to build an array `arr` of `n` positive integers, each ranging from 1 to `m`, such that the "search_cost" of the array is equal to `k`.
- "Search_cost" is defined as the number of elements in the array that are greater than all the elements to their left.
- We use dynamic programming to solve this problem, creating a 3D array `dp` to store intermediate results.
- `dp[i][cost][max_val]` represents the number of ways to build an array of length i+1 with a maximum value of `max_val+1` and a search cost of cost+1.
- We initialize the base case where `i = 0`, and `cost = 0`, setting `dp[0][0][max_val]` to 1 for all possible `max_val`.
- We iterate through the remaining values of `i`, `cost`, and `max_val`, calculating the number of ways to build the array based on the previous values in `dp`.
- To calculate `dp[i][cost][max_val]`, we consider two cases:
1. Adding `max_val+1` as the maximum element to the array.
1. Not adding max_val+1 as the maximum element to the array.
- We update `dp[i][cost][max_val]` accordingly and take care of the modulo operation to prevent overflow.
- Finally, we sum up the values of `dp[n-1][k-1][max_val]` for all possible `max_val` to get the total number of arrays with the desired properties.
- The result is returned as `(int) ans` after taking the modulo `10^9 + 7`.

# Complexity
- Time complexity: `O(n * m * k)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n * k * m)` 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int numOfArrays(int n, int m, int k) {
        long[][][] dp = new long[n][k][m];
        long mod = 1000000007;
        Arrays.fill(dp[0][0], 1);
        
        for (int i = 1; i < n; i++) {
            for (int cost = 0; cost < Math.min(i + 1, k); cost++) {
                for (int max = 0; max < m; max++) {
                    dp[i][cost][max] = (dp[i][cost][max] + (max + 1) * dp[i - 1][cost][max]) % mod;
                    if (cost != 0) {
                        long sum = 0;
                        for (int prevMax = 0; prevMax < max; prevMax++) {
                            sum += dp[i - 1][cost - 1][prevMax];
                            sum %= mod;
                        }
                        dp[i][cost][max] = (dp[i][cost][max] + sum) % mod;
                    }
                }
            }
        }
        long ans = 0;
        for (int max = 0; max < m; max++) {
            ans += dp[n - 1][k - 1][max];
            ans %= mod;
        }
        return (int) ans;
    }
}
```
```python3 []
class Solution:
    def numOfArrays(self, n, m, k):
        if m < k: return 0
        dp = [[1] * m] + [[0] * m for _ in range(k - 1)]
        mod = 10 ** 9 + 7
        for _ in range(n - 1):
            for i in range(k - 1, -1, -1):
                cur = 0
                for j in range(m):
                    dp[i][j] = (dp[i][j] * (j + 1) + cur) % mod
                    if i: cur = (cur + dp[i - 1][j]) % mod
        return sum(dp[-1]) % mod
```
```python []
class Solution:
    def numOfArrays(self, n: int, m: int, k: int) -> int:
        
        MOD = 10**9 + 7

        def helper(indx, curr_max, cost, m, dp):

            tpl = (indx, curr_max, cost)

            if tpl in dp:
                return dp[tpl]

            if indx == 1 and cost == 1:
                return 1
            elif indx == 1:
                return 0
            elif cost == 0:
                return 0
            
            numberWays = 0

            for j in range(1, m+1):
                if j <= curr_max:
                    numberWays += helper(indx-1, curr_max, cost, m, dp)
                else:
                    numberWays += helper(indx-1, j, cost-1, m, dp)
            dp[tpl] = numberWays % MOD

            return dp[tpl]

        ans = 0

        dp = {}

        for j in range(1, m+1):
            ans = (ans + helper(n, j, k, m, dp)) % MOD
            
        return ans
```
```C++ []
class Solution {
public:
    int dp[51][101][51], pre[51][101][51], mod = 1e9 + 7;
        
    int numOfArrays(int n, int m, int k) {
        for (int j = 0; j<= m; j++) {
            dp[1][j][1] = 1;
            pre[1][j][1] = j;
        }
        
        for (int len = 2; len <= n; len++) {
            for (int mx = 1; mx <= m; mx++) {
                for (int cost = 1; cost <=k; cost++) {
                    /* In this first case, we can append any element from [1, mx] to the end of the array. */
                    dp[len][mx][cost] = (1LL * mx * dp[len-1][mx][cost]) % mod;
                    
                    /* In this second case, we can append the element "mx" to the end of the array. 
                    for (int i = 1; i < mx; i++) dp[len][mx][cost] += ways[len - 1][i][cost - 1];*/
                    dp[len][mx][cost] = (dp[len][mx][cost] + pre[len-1][mx-1][cost-1]) % mod;\\
                    
                    pre[len][mx][cost] = (pre[len][mx-1][cost] + dp[len][mx][cost]) % mod;
                }
            }
        }
        return pre[n][m][k];
    }
};
```
```C []
class Solution {
public:
    int n,m,k,dp[55][105][55],mod=1e9+7;
    
    int sol(int id,int mx,int inv)
    {
        // cout<<id<<" "<<mx<<" "<<inv<<endl;
        if(id==n) return (inv==k);
        if(inv>k) return 0;
        
        long ans=dp[id][mx][inv];
        if(ans!=-1) return ans;
        ans=0;
        
        for(int l=1;l<=m;l++)
        {
            if(l<=mx) ans+=sol(id+1,mx,inv);
            else ans+=sol(id+1,l,inv+1);
            ans%=mod;
        }
        return dp[id][mx][inv]=ans;
    }
    
    int numOfArrays(int nn, int mm, int kk) 
    {
        n=nn; m=mm; k=kk;
        memset(dp,-1,sizeof(dp));
        return sol(0,0,0);
    }
};
```