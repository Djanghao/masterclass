# 💡 [VIDEO] Dynamic Programming Approach to Solve "Express Integer as Sum of Powers" 💡

**Author:** vanAmsen
**Votes:** 4
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3803381/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3803381/)

---

# Intuition
This problem asks us to find out the number of ways an integer can be expressed as the sum of the x-th power of unique positive integers. Our initial thought is to use dynamic programming to solve this problem because it involves solving overlapping subproblems. 

https://youtu.be/n8VjQsvLFSI

# Approach
We use a bottom-up dynamic programming approach, where we initialize a 2D DP table where `dp[i][j]` will represent the number of ways we can get a sum of `j` using the x-th power of numbers up to `i`. We then iterate over the table, and for each cell, we calculate the total number of ways by adding two scenarios: either we use the current number, or we don't. 

# Complexity
- Time complexity: The time complexity is \\(O(n \\cdot \\sqrt{n})\\) for \\(x = 2\\), which is the worst-case scenario. For other values of \\(x\\), the time complexity is even better because the maximum number of unique positive integers will be less than \\(\\sqrt{n}\\).
- Space complexity: The space complexity is \\(O(n \\cdot \\sqrt{n})\\) as we maintain a 2D DP table of size `n` x `sqrt(n)`.

# Code
```Python []
class Solution:
    def numberOfWays(self, n: int, x: int) -> int:
        MOD = 10**9 + 7 
        max_num = int(n**(1.0/x)) + 1 
        dp = [[0 for _ in range(n+1)] for _ in range(max_num+1)] 
        for i in range(max_num+1): 
            dp[i][0] = 1 
        for i in range(1, max_num+1): 
            for j in range(1, n+1): 
                if j < i**x: 
                    dp[i][j] = dp[i-1][j] 
                else: 
                    dp[i][j] = (dp[i-1][j] + dp[i-1][j-i**x]) % MOD   
        return dp[max_num][n] 
```
``` C++ []
#define MOD 1000000007
class Solution {
public:
    int numberOfWays(int n, int x) {
        int max_num = pow(n, 1.0/x) + 1;
        vector<vector<int>> dp(max_num + 1, vector<int>(n + 1, 0));

        for (int i = 0; i <= max_num; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i <= max_num; i++) {
            for (int j = 1; j <= n; j++) {
                if (j < pow(i, x)) {
                    dp[i][j] = dp[i-1][j];
                } else {
                    dp[i][j] = (dp[i-1][j] + dp[i-1][j - (int)pow(i, x)]) % MOD;
                }
            }
        }
        return dp[max_num][n];
    }
};
```
``` Java []
public class Solution {
    private static final int MOD = 1000000007;

    public int numberOfWays(int n, int x) {
        int maxNum = (int) Math.pow(n, 1.0 / x) + 1;
        int[][] dp = new int[maxNum + 1][n + 1];

        for (int i = 0; i <= maxNum; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i <= maxNum; i++) {
            for (int j = 1; j <= n; j++) {
                if (j < Math.pow(i, x)) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - (int)Math.pow(i, x)]) % MOD;
                }
            }
        }
        return dp[maxNum][n];
    }
}
```
``` JavaScript []
var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;
    const maxNum = Math.floor(Math.pow(n, 1.0 / x)) + 1;
    let dp = Array.from(Array(maxNum + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= maxNum; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= maxNum; i++) {
        for (let j = 1; j <= n; j++) {
            if (j < Math.pow(i, x)) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - Math.pow(i, x)]) % MOD;
            }
        }
    }
    return dp[maxNum][n];    
};
```
``` C# []
public class Solution {
    private const int MOD = 1000000007;
    public int NumberOfWays(int n, int x) {
        int maxNum = (int) Math.Pow(n, 1.0 / x) + 1;
        int[][] dp = new int[maxNum + 1][];
        for (int i = 0; i <= maxNum; i++) {
            dp[i] = new int[n + 1];
            dp[i][0] = 1;
        }

        for (int i = 1; i <= maxNum; i++) {
            for (int j = 1; j <= n; j++) {
                if (j < Math.Pow(i, x)) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - (int)Math.Pow(i, x)]) % MOD;
                }
            }
        }
        return dp[maxNum][n];        
    }
}
```