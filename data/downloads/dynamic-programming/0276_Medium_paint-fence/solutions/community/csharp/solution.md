# C# DP O(n) + O(1), another way to understand

**Author:** nonox530
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/5329321/](https://leetcode.com/problems/paint-fence/solutions/5329321/)

---

# Approach
We have `k` different colors: j=0, j=1, j=2, ..., j=k
- `dp[i][j]`: With `j` as the Last.color
- `dp_helper[i][j]`: With `j` as Last.Color, but Last.Color != SecondLast.Color. 

### DP rule:
1. dp[i][j] = case_1 + case_2
  - case_1 = dp[i-1][0] + ... + dp[i-1][j-1] + dp[i-1][j+1] + ...
  - case_2 = dp_helper[i-1][j]
2. dp_helper[i][j] = case_1

# Why Space Complexity O(1)
I gave the original code that has $$O(n^2)$$. But it's indeed $$O(1)$$. 

## Because:
### Observation 1: 
In the for loop, we obviously can use two 1d vector (that represent each step) instead of two 2d matrix.  
### Observation 2: 
**Colors are identical**. So dp[i][0] == dp[i][1] == ....
(Value in the 1d arrays are the same)

# Why Time Complexity O(n)
I gave the original code that has $$O(n^2)$$. But it's indeed $$O(n)$$. 

Because **Colors are identical**

# Code
```
public class Solution {
    public int NumWays(int n, int k) {
        int[][] dp_helper = new int[n][];
        dp_helper[0] = new int[k];
        int [][] dp = new int[n][];
        dp[0] = new int[k];
        for (int j = 0; j < k; j++) {
            dp_helper[0][j] = 1;
            dp[0][j] = 1;
        }

        for (int i = 1; i < n; i++) {
            dp_helper[i] = new int[k];
            dp[i] = new int[k];
            
            for (int j = 0; j < k; j++) {
                // 1. SecondLast.Color != j
                dp[i][j] += dp[i-1].Sum() - dp[i-1][j];
                // 2. SecondLast.Color == j
                dp[i][j] += dp_helper[i-1][j];

                dp_helper[i][j] = dp[i-1].Sum() - dp[i-1][j];
            }
        }
        return dp[n-1].Sum();
    }
}
```