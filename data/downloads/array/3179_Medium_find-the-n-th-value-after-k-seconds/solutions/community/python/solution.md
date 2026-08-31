# Easy Video Solution 🔥 || How to 🤔 in Interview || Dynamic Programming 🔥

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282084/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282084/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***



# ***Easy Video Explanation***

https://youtu.be/twrhzzJbvmg
    

# Code (Space O(N*N))


```C++ []
class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        vector<vector<int>>dp(k+1,vector<int>(n));
        for(int i=0;i<n;i++) {
            dp[0][i]=1;
        }
        int mod=1e9+7;
        for(int i=1;i<=k;i++) {
            dp[i][0]=1;
            for(int j=1;j<n;j++) {
                dp[i][j]=((dp[i][j-1])%mod+(dp[i-1][j])%mod)%mod;
            }
        }
        return dp[k][n-1]%mod;
    }
};

```
```python []
class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        dp = [[0] * n for _ in range(k + 1)]
        for i in range(n):
            dp[0][i] = 1
        mod = 10**9 + 7
        for i in range(1, k + 1):
            dp[i][0] = 1
            for j in range(1, n):
                dp[i][j] = (dp[i][j - 1] % mod + dp[i - 1][j] % mod) % mod
        return dp[k][n - 1] % mod

```
```Java []
class Solution {
    public int valueAfterKSeconds(int n, int k) {
        int[][] dp = new int[k + 1][n];
        for (int i = 0; i < n; i++) {
            dp[0][i] = 1;
        }
        int mod = 1000000007;
        for (int i = 1; i <= k; i++) {
            dp[i][0] = 1;
            for (int j = 1; j < n; j++) {
                dp[i][j] = (dp[i][j - 1] % mod + dp[i - 1][j] % mod) % mod;
            }
        }
        return dp[k][n - 1] % mod;
    }
}

```

# Code (Space O(N))


```C++ []
class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        vector<int>dp(n);
        for(int i=0;i<n;i++) {
            dp[i]=1;
        }
        int mod=1e9+7;
        for(int i=1;i<=k;i++) {
            for(int j=1;j<n;j++) {
                dp[j]=((dp[j-1])%mod+(dp[j])%mod)%mod;
            }
        }
        return dp[n-1]%mod;
    }
};
```
```python []
class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        dp = [1] * n
        mod = 10**9 + 7
        for i in range(1, k + 1):
            for j in range(1, n):
                dp[j] = (dp[j - 1] % mod + dp[j] % mod) % mod
        return dp[n - 1] % mod

```
```Java []
class Solution {
    public int valueAfterKSeconds(int n, int k) {
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
        }
        int mod = 1000000007;
        for (int i = 1; i <= k; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] = (dp[j - 1] % mod + dp[j] % mod) % mod;
            }
        }
        return dp[n - 1] % mod;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00