# Easy Video Solution 🔥 || How to 🤔 in Interview || 3D DP  || O(50*50*N)

**Author:** ayushnemmaniwar12
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5619799/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5619799/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can build the logic



***Easy Video Explanation***
    
https://youtu.be/W9Job3hNmvA

# Code


```C++ []
class Solution {
public:
    int mod=1e9+7;
    int dp[2001][52][52];
    int solve(int i,int n,vector<int>&v,int prev1,int prev2) {
        if(i==n)
            return 1;
        if(dp[i][prev1][prev2]!=-1)
            return dp[i][prev1][prev2];
        int ans=0;
        for(int j=prev1;j<=v[i];j++) {
            int x1=j;
            int x2=v[i]-j;
            if(x1>=prev1 && x2<=prev2) {
                ans=(ans+solve(i+1,n,v,x1,x2))%mod;
            } 
        }
        return dp[i][prev1][prev2]=ans;
    }
    int countOfPairs(vector<int>& v) {
        int n=v.size();
        memset(dp,-1,sizeof(dp));
        int ans=solve(0,n,v,0,50);
        return ans;
    }
};
```
```python []
class Solution:
    def __init__(self):
        self.mod = 1000000007
        self.dp = None

    def solve(self, i, n, v, prev1, prev2):
        if i == n:
            return 1
        if self.dp[i][prev1][prev2] != -1:
            return self.dp[i][prev1][prev2]
        
        ans = 0
        for j in range(prev1, v[i] + 1):
            x1 = j
            x2 = v[i] - j
            if x1 >= prev1 and x2 <= prev2:
                ans = (ans + self.solve(i + 1, n, v, x1, x2)) % self.mod
        
        self.dp[i][prev1][prev2] = ans
        return ans

    def countOfPairs(self, v):
        n = len(v)
        self.dp = [[[-1] * 52 for _ in range(52)] for _ in range(n)]
        return self.solve(0, n, v, 0, 50)

# Example usage:
solution = Solution()
v = [1, 2, 3]
result = solution.countOfPairs(v)
print(f"Result: {result}")  # Replace with actual test case

```
```Java []
import java.util.*;

class Solution {
    private static final int MOD = 1000000007;
    private int[][][] dp;

    private int solve(int i, int n, List<Integer> v, int prev1, int prev2) {
        if (i == n) {
            return 1;
        }
        if (dp[i][prev1][prev2] != -1) {
            return dp[i][prev1][prev2];
        }
        
        int ans = 0;
        for (int j = prev1; j <= v.get(i); j++) {
            int x1 = j;
            int x2 = v.get(i) - j;
            if (x1 >= prev1 && x2 <= prev2) {
                ans = (ans + solve(i + 1, n, v, x1, x2)) % MOD;
            }
        }
        
        dp[i][prev1][prev2] = ans;
        return ans;
    }

    public int countOfPairs(List<Integer> v) {
        int n = v.size();
        dp = new int[n][52][52];
        for (int[][] row : dp) {
            for (int[] col : row) {
                Arrays.fill(col, -1);
            }
        }
        
        return solve(0, n, v, 0, 50);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        List<Integer> v = Arrays.asList(1, 2, 3);
        int result = solution.countOfPairs(v);
        System.out.println("Result: " + result);  // Replace with actual test case
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(50*50*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(50*50*N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00