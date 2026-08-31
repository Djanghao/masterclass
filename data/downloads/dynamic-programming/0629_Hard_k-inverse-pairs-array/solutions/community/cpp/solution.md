# 🔥 All 4 DP Solutions 🔥 Hard made Easy

**Author:** bhavik_11
**Votes:** 153
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632589/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632589/)

---

# Intuition
Let's say we have n elements in our permutation then Depending on where we put the element (n+1) in our permutation, we may add 0, 1, 2, ..., n new inverse pairs. For example, if we have some permutation of 1...4, then:

- 5 x x x x creates 4 new inverse pairs
- x 5 x x x creates 3 new inverse pairs
  ...
- x x x x 5 creates 0 new inverse pairs


# Approach
dp[n][k] = dp[n - 1][k - 0] + dp[n - 1][k - 1] + ... + dp[n - 1][k - (n - 1)]


# Complexity
- Time complexity: $$O(n*k*k)$$ to $$O(n*k)$$

- Space complexity:$$O(n*k)$$ to $$O(k)$$

# Code
# Memoization
```
class Solution {
private:
    const int mod=int(1e9+7);
    int dp[1001][1001];
    int f(int n,int k) {
        //base case
        if(k<=0) return k==0;
        if(dp[n][k]!=-1) return dp[n][k];


        int ans=0;
        for(int i=0;i<n;++i) {
            ans+=f(n-1,k-i);
            ans%=mod;
        }
        return dp[n][k]=ans;
    }
public:
    int kInversePairs(int n, int k) {
        memset(dp,-1,sizeof(dp));
        return f(n,k);
    }
};
```

# Tabulation
```
class Solution {
private:
    const int mod=int(1e9+7);
public:
    int kInversePairs(int n, int k) {
        vector<vector<int>> dp(n+1,vector<int>(k+1,0));
        //base case
        for(int N=0;N<=n;++N) dp[N][0]=1;
        for(int N=1;N<=n;++N) {
            for(int K=0;K<=k;++K) {
                int ans=0;
                for(int i=0;i<min(N,K+1);++i) {
                    ans+=dp[N-1][K-i];
                    ans%=mod;
                }
                dp[N][K]=ans;
            }
        }
        return dp[n][k];
    }
};
```

# Optimization Idea

f(n, k) = f(n-1, k) + f(n-1, k-1) + f(n-1, k-2) + ... + f(n-1, k-n+1) --->(1)

f(n, k-1) = f(n-1, k-1) + f(n-1, k-2) + f(n-1, k-3) + ... + f(n-1, k-n+1)+ f(n-1, k-n) --->(2)

subtract eqn 2 from eqn 1,we get

**f(n, k) = f(n, k-1) + f(n-1, k) - f(n-1, k-n)**


# Time-Optimized Tabulation
```
class Solution {
private:
    const int mod=int(1e9+7);
public:
    int kInversePairs(int n, int k) {
        vector<vector<int>> dp(n+1,vector<int>(k+1,0));
        //base case
        for(int N=0;N<=n;++N) dp[N][0]=1;
        for(int N=1;N<=n;++N) {
            for(int K=0;K<=k;++K) {
                dp[N][K] = (dp[N - 1][K] + (K > 0 ? dp[N][K - 1] : 0)) % mod;
                dp[N][K] = (dp[N][K] + mod - (K >= N ? dp[N-1][K-N] : 0)) % mod;
            }
        }
        return dp[n][k];
    }
};
```

# Time & Space Optimized Tabulation
```
class Solution {
private:
    const int mod=int(1e9+7);
public:
    int kInversePairs(int n, int k) {
        vector<int> prev(k+1,0),curr(k+1,0);
        prev[0]=curr[0]=1;
        for(int N=1;N<=n;++N) {
            for(int K=0;K<=k;++K) {
                curr[K] = (prev[K] + (K > 0 ? curr[K - 1] : 0)) % mod;
                curr[K] = (curr[K] + mod - (K >= N ? prev[K-N] : 0)) % mod;
            }
            prev = curr;
        }
        return curr[k];
    }
};
```




Hope you found this helpful
If so please do Upvote it
Happy Coding!!

![leetcode.png](./images/0.png)

