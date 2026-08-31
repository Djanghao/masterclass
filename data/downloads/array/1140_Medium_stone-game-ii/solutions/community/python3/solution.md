# ✅98.55%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 155
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/5662713/](https://leetcode.com/problems/stone-game-ii/solutions/5662713/)

---

# Intuition \u2712\uFE0F
#### The game requires Alice and Bob to maximize the number of stones they can collect, with the additional twist that the number of piles they can take from is limited by the value of `M`, which can grow based on their choices. This dynamic nature suggests that the problem can be approached using dynamic programming, where we can recursively determine the optimal choices for Alice and Bob.

---
# Approach
#### 1.Suffix Sum Calculation:
 - ##### We first calculate a suffix sum array, where each entry `suffix_sum[i]` represents the total stones from pile `i` to the last pile. This helps quickly calculate the total stones available from any given starting point.
#### 2.Dynamic Programming (DP) Table:
- ##### We define `dp[i][m]` as the maximum stones Alice can get starting from index `i` with the current `M = m`.
 - ##### If Alice can take all the remaining piles `(i + 2 * m >= n)`, then she takes them all.
- ##### Otherwise, Alice will consider taking between 1 to `2 * m`piles and will choose the option that maximizes her stones while accounting for Bob\u2019s best possible play after her move.
#### 3.Optimal Strategy:
- #### For each position `i` and each possible value of `M`, we compute the best outcome by trying all possible moves (`x piles`) Alice can take and then using the DP table to determine how Bob would respond optimally. The strategy ensures that Alice's choice maximizes her stones by considering both her immediate gain and the impact of Bob's subsequent move.
----

# Time complexity:
#### The time complexity is $$O(n^3)$$ where n is the number of piles. This arises because:
- ##### We have two nested loops: one for each starting index `i` and one for each possible value of `M`.
- ##### Inside these loops, we have another loop that iterates up to `2 * M`, leading to a cubic complexity.


# Space complexity:
#### The space complexity is $$O(n^2)$$ for storing the DP table `dp[i][m]` and the suffix sum array. Both require space proportional to the number of piles squared.

---
# Code
```python []
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        n = len(piles)
        
        dp = [[0] * (n + 1) for _ in range(n)]
        suffix_sum = [0] * n
        suffix_sum[-1] = piles[-1]
        
        for i in range(n - 2, -1, -1):
            suffix_sum[i] = suffix_sum[i + 1] + piles[i]
        
        for i in range(n - 1, -1, -1):
            for m in range(1, n + 1):
                if i + 2 * m >= n:
                    dp[i][m] = suffix_sum[i]
                else:
                    for x in range(1, 2 * m + 1):
                        dp[i][m] = max(dp[i][m], suffix_sum[i] - dp[i + x][max(m, x)])
        
        return dp[0][1]
```
```C++ []
class Solution {
public:
    int stoneGameII(vector<int>& piles) {
        int n = piles.size();
        
        vector<vector<int>> dp(n, vector<int>(n + 1, 0));
        vector<int> suffixSum(n, 0);
        suffixSum[n - 1] = piles[n - 1];
        
        for (int i = n - 2; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] + piles[i];
        }
        
        for (int i = n - 1; i >= 0; i--) {
            for (int m = 1; m <= n; m++) {
                if (i + 2 * m >= n) {
                    dp[i][m] = suffixSum[i];
                } else {
                    for (int x = 1; x <= 2 * m; x++) {
                        dp[i][m] = max(dp[i][m], suffixSum[i] - dp[i + x][max(m, x)]);
                    }
                }
            }
        }
        
        return dp[0][1];
    }
};

```
```javascript []
var stoneGameII = function(piles) {
    const n = piles.length;
    
    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    const suffixSum = Array(n).fill(0);
    suffixSum[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let m = 1; m <= n; m++) {
            if (i + 2 * m >= n) {
                dp[i][m] = suffixSum[i];
            } else {
                for (let x = 1; x <= 2 * m; x++) {
                    dp[i][m] = Math.max(dp[i][m], suffixSum[i] - dp[i + x][Math.max(m, x)]);
                }
            }
        }
    }
    
    return dp[0][1];
};

```
```java []
class Solution {
    public int stoneGameII(int[] piles) {
        int n = piles.length;
        
        int[][] dp = new int[n][n + 1];
        int[] suffixSum = new int[n];
        suffixSum[n - 1] = piles[n - 1];
        
        for (int i = n - 2; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] + piles[i];
        }
        
        for (int i = n - 1; i >= 0; i--) {
            for (int m = 1; m <= n; m++) {
                if (i + 2 * m >= n) {
                    dp[i][m] = suffixSum[i];
                } else {
                    for (int x = 1; x <= 2 * m; x++) {
                        dp[i][m] = Math.max(dp[i][m], suffixSum[i] - dp[i + x][Math.max(m, x)]);
                    }
                }
            }
        }
        
        return dp[0][1];
    }
}

```
```C# []
public class Solution {
    public int StoneGameII(int[] piles) {
        int n = piles.Length;
        
        int[][] dp = new int[n][];
        for (int i = 0; i < n; i++) {
            dp[i] = new int[n + 1];
        }

        int[] suffixSum = new int[n];
        suffixSum[n - 1] = piles[n - 1];
        
        for (int i = n - 2; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] + piles[i];
        }
        
        for (int i = n - 1; i >= 0; i--) {
            for (int m = 1; m <= n; m++) {
                if (i + 2 * m >= n) {
                    dp[i][m] = suffixSum[i];
                } else {
                    for (int x = 1; x <= 2 * m; x++) {
                        dp[i][m] = Math.Max(dp[i][m], suffixSum[i] - dp[i + x][Math.Max(m, x)]);
                    }
                }
            }
        }
        
        return dp[0][1];
    }
}

```
---
![Screenshot 2023-08-20 065922.png](./images/0.png)


