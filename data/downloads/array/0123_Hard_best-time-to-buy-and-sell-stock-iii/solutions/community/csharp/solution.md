# 🔥Mastering Buying and Selling Stocks || From Recursion To DP || Complete Guide By Mr. Robot

**Author:** LakshayBrejwal_1_0
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/4191392/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/4191392/)

---

# \u2753 Buying and Selling Stocks with K Transactions \u2753


## \uD83D\uDCA1 Approach 1: Recursive Approach

### \u2728 Explanation
The logic and approach for this solution involve recursively exploring the possibilities of buying and selling stocks with a given number of transactions. The function `Recursive` takes as input the stock prices, the current index (`ind`), a boolean flag (`b` for buy or sell), and the remaining transactions `k`. It returns the maximum profit that can be obtained. The function considers two options at each step: either buying or not buying the stock (if `b` is `true`), or selling or holding the stock (if `b` is `false`). It recursively explores these options to find the maximum profit.

### \uD83D\uDCDD Dry Run
Let's dry run the `Recursive` function with an example:
- Input: `prices = [3, 2, 6, 5, 0, 3], k = 2`
- Start with index 0, `b` is `true`, and `k` is 2.
- At index 0, we can buy the stock, so we explore two options: 
  1. Buy it and move to index 1 (profit: -3), or
  2. Leave it and move to index 1 (profit: 0).
- We choose the first option (buy), and the function moves to index 1 with `k` reduced by 1.
- This process continues, and we explore all possible options until we reach the end. The function returns the maximum profit.

### \uD83D\uDD0D Edge Cases
- The `Recursive` function handles cases where the number of transactions is limited.

### \uD83D\uDD78\uFE0F Complexity Analysis
- Time Complexity: O(2^n), where n is the number of stock prices. The function explores all possible combinations.
- Space Complexity: O(n), for the function call stack.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Codes
```cpp []
class Solution {
public:
    int Recursive(vector<int> &p, int ind, bool b, int k) {
        if (ind >= p.size() || k <= 0) return 0;
        int ans = 0;
        
        if (b) {
            return max(-p[ind] + Recursive(p, ind + 1, !b, k), Recursive(p, ind + 1, b, k));
        } else {
            return max({ p[ind] + Recursive(p, ind + 1, !b, k - 1), Recursive(p, ind + 1, b, k) });
        }
    }

    int maxProfit(int k, vector<int> &prices) {
        return Recursive(prices, 0, true, k);
    }
};
```

```python []
class Solution:
    def recursive(self, p, ind, b, k):
        if ind >= len(p) or k <= 0:
            return 0

        if b:
            return max(-p[ind] + self.recursive(p, ind + 1, not b, k), self.recursive(p, ind + 1, b, k))
        else:
            return max(p[ind] + self.recursive(p, ind + 1, not b, k - 1), self.recursive(p, ind + 1, b, k))

    def maxProfit(self, k, prices):
        return self.recursive(prices, 0, True, k)
```


```java []
class Solution {
    public int recursive(int[] p, int ind, boolean b, int k) {
        if (ind >= p.length || k <= 0)
            return 0;

        int ans = 0;

        if (b) {
            return Math.max(-p[ind] + recursive(p, ind + 1, !b, k), recursive(p, ind + 1, b, k));
        } else {
            return Math.max(p[ind] + recursive(p, ind + 1, !b, k - 1), recursive(p, ind + 1, b, k));
        }
    }

    public int maxProfit(int k, int[] prices) {
        return recursive(prices, 0, true, k);
    }
}
```

```csharp []
public class Solution {
    public int Recursive(int[] p, int ind, bool b, int k) {
        if (ind >= p.Length || k <= 0)
            return 0;

        int ans = 0;

        if (b) {
            return Math.Max(-p[ind] + Recursive(p, ind + 1, !b, k), Recursive(p, ind + 1, b, k));
        } else {
            return Math.Max(p[ind] + Recursive(p, ind + 1, !b, k - 1), Recursive(p, ind + 1, b, k));
        }
    }

    public int MaxProfit(int k, int[] prices) {
        return Recursive(prices, 0, true, k);
    }
}
```


```javascript []
class Solution {
    recursive(p, ind, b, k) {
        if (ind >= p.length || k <= 0)
            return 0;

        if (b) {
            return Math.max(-p[ind] + this.recursive(p, ind + 1, !b, k), this.recursive(p, ind + 1, b, k));
        } else {
            return Math.max(p[ind] + this.recursive(p, ind + 1, !b, k - 1), this.recursive(p, ind + 1, b, k));
        }
    }

    maxProfit(k, prices) {
        return this.recursive(prices, 0, true, k);
    }
}
```





---

## \uD83D\uDCA1 Approach 2: Dynamic Programming

### \u2728 Explanation
The dynamic programming approach optimizes the previous solution by using memoization to store previously computed results. The function `RecursionWithMemoisation` is similar to the `Recursive` function but with memoization to avoid redundant calculations.

### \uD83D\uDCDD Dry Run
The `RecursionWithMemoisation` function follows the same logic as the recursive approach but uses a memoization table to store and reuse intermediate results. This significantly improves the efficiency of the algorithm.

### \uD83D\uDD0D Edge Cases
- The `RecursionWithMemoisation` function handles cases where the number of transactions is limited.

### \uD83D\uDD78\uFE0F Complexity Analysis
- Time Complexity: O(n * k), where n is the number of stock prices, and k is the maximum number of transactions allowed.
- Space Complexity: O(n * k), for the memoization table.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Codes
```cpp []
class Solution {
public:
    int RecursionWithMemoisation(vector<int> &p, int ind, bool canBuy, int k, vector<vector<vector<int>>> &dp) {
        if (ind >= p.size() || k <= 0) return 0;
        
        if (dp[ind][canBuy][k] != -1) return dp[ind][canBuy][k];
        
        if (canBuy) {
            dp[ind][canBuy][k] = max(-p[ind] + RecursionWithMemoisation(p, ind + 1, !canBuy, k, dp), RecursionWithMemoisation(p, ind + 1, canBuy, k, dp));
        } else {
            dp[ind][canBuy][k] = max({ p[ind] + RecursionWithMemoisation(p, ind + 1, !canBuy, k - 1, dp), RecursionWithMemoisation(p, ind + 1, canBuy, k, dp) });
        }
        
        return dp[ind][canBuy][k];
    }
    
    int maxProfit(vector<int> &prices) {
        int k = 2; // change the value of k as per the question 
        vector<vector<vector<int>>> dp(prices.size() + 1, vector<vector<int>>(3,vector<int>(k+1,-1)));
        return RecursionWithMemoisation(prices, 0, true, 2, dp);
    }
};
```
```python []
class Solution:
    def recursion_with_memoization(self, p, ind, can_buy, k, dp):
        if ind >= len(p) or k <= 0:
            return 0

        if dp[ind][can_buy][k] != -1:
            return dp[ind][can_buy][k]

        if can_buy:
            dp[ind][can_buy][k] = max(-p[ind] + self.recursion_with_memoization(p, ind + 1, not can_buy, k, dp), self.recursion_with_memoization(p, ind + 1, can_buy, k, dp))
        else:
            dp[ind][can_buy][k] = max(p[ind] + self.recursion_with_memoization(p, ind + 1, not can_buy, k - 1, dp), self.recursion_with_memoization(p, ind + 1, can_buy, k, dp))

        return dp[ind][can_buy][k]

    def max_profit(self, prices):
        k = 2  # change the value of k as per the question
        dp = [[[[-1 for _ in range(k + 1)] for _ in range(3)] for _ in range(len(prices) + 1)]
        return self.recursion_with_memoization(prices, 0, True, k, dp)
```

```java []
class Solution {
    public int recursionWithMemoization(int[] p, int ind, boolean canBuy, int k, int[][][] dp) {
        if (ind >= p.length || k <= 0)
            return 0;

        if (dp[ind][canBuy ? 1 : 0][k] != -1)
            return dp[ind][canBuy ? 1 : 0][k];

        int maxProfit;
        if (canBuy) {
            maxProfit = Math.max(-p[ind] + recursionWithMemoization(p, ind + 1, false, k, dp), recursionWithMemoization(p, ind + 1, true, k, dp));
        } else {
            maxProfit = Math.max(p[ind] + recursionWithMemoization(p, ind + 1, false, k - 1, dp), recursionWithMemoization(p, ind + 1, true, k, dp));
        }

        dp[ind][canBuy ? 1 : 0][k] = maxProfit;
        return maxProfit;
    }

    public int maxProfit(int[] prices) {
        int k = 2; // change the value of k as per the question
        int[][][] dp = new int[prices.length + 1][3][k + 1];
        for (int i = 0; i <= prices.length; i++) {
            for (int j = 0; j < 3; j++) {
                Arrays.fill(dp[i][j], -1);
            }
        }
        return recursionWithMemoization(prices, 0, true, k, dp);
    }
}
```

```csharp []
public class Solution {
    public int RecursionWithMemoization(int[] p, int ind, bool canBuy, int k, int[][][] dp) {
        if (ind >= p.Length || k <= 0)
            return 0;

        if (dp[ind][canBuy ? 1 : 0][k] != -1)
            return dp[ind][canBuy ? 1 : 0][k];

        int maxProfit;
        if (canBuy) {
            maxProfit = Math.Max(-p[ind] + RecursionWithMemoization(p, ind + 1, false, k, dp), RecursionWithMemoization(p, ind + 1, true, k, dp));
        } else {
            maxProfit = Math.Max(p[ind] + RecursionWithMemoization(p, ind + 1, false, k - 1, dp), RecursionWithMemoization(p, ind + 1, true, k, dp));
        }

        dp[ind][canBuy ? 1 : 0][k] = maxProfit;
        return maxProfit;
    }

    public int MaxProfit(int[] prices) {
        int k = 2; // change the value of k as per the question
        int[][][] dp = new int[prices.Length + 1][][];
        for (int i = 0; i <= prices.Length; i++) {
            dp[i] = new int[3][];
            for (int j = 0; j < 3; j++) {
                dp[i][j] = new int[k + 1];
                for (int l = 0; l <= k; l++) {
                    dp[i][j][l] = -1;
                }
            }
        }
        return RecursionWithMemoization(prices, 0, true, k, dp);
    }
}
```





---

## \uD83D\uDCA1 Approach 3: Bottom-Up Dynamic Programming

### \u2728 Explanation
The bottom-up dynamic programming approach solves the problem by iteratively calculating the maximum profit for each possible state. The function `bottomup` uses a 3D DP array to store results and iterates through the stock prices, transactions, and buying/selling states.

### \uD83D\uDCDD Dry Run
The `bottomup` function iterates through the stock prices, transactions, and buying/selling states, filling in the DP table with the maximum profit at each state. It starts from the last day and works backward to compute the final result.

### \uD83D\uDD0D Edge Cases
- The `bottomup` function handles cases where the number of transactions is limited.

### \uD83D\uDD78\uFE0F Complexity Analysis
- Time Complexity: O(n * K), where n is the number of stock prices, and K is the maximum number of transactions allowed.
- Space Complexity: O(n * 2 * K), for the 3D DP table.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Codes
```cpp []
class Solution {
public:
    int bottomup(int K, vector<int> &p) {
        vector<vector<vector<int> > > dp(p.size() + 1, vector<vector<int>>(3, vector<int>(K + 1, 0)));
        
        for (int ind = p.size() - 1; ind >= 0; ind--) {
            for (int b = 0; b <= 1; b++) {
                for (int k = 1; k <= K;

 k++) {
                    if (b) {
                        dp[ind][b][k] = max(-p[ind] + dp[ind + 1][!b][k], dp[ind + 1][b][k]);
                    } else {
                        dp[ind][b][k] = max(p[ind] + dp[ind + 1][!b][k - 1], dp[ind + 1][b][k]);
                    }
                }
            }
        }
        return dp[0][1][K];
    }

    int maxProfit(int k, vector<int> &prices) {
        return bottomup(k, prices);
    }
};
```


```python []
class Solution:
    def bottomup(self, K, p):
        dp = [[[0 for _ in range(K + 1)] for _ in range(3)] for _ in range(len(p) + 1)]
        
        for ind in range(len(p) - 1, -1, -1):
            for b in range(2):
                for k in range(1, K + 1):
                    if b:
                        dp[ind][b][k] = max(-p[ind] + dp[ind + 1][0][k], dp[ind + 1][b][k])
                    else:
                        dp[ind][b][k] = max(p[ind] + dp[ind + 1][1][k - 1], dp[ind + 1][b][k])
        
        return dp[0][1][K]

    def maxProfit(self, k, prices):
        return self.bottomup(k, prices)
```


```java []
class Solution {
    public int bottomup(int K, int[] p) {
        int[][][] dp = new int[p.length + 1][3][K + 1];
        
        for (int ind = p.length - 1; ind >= 0; ind--) {
            for (int b = 0; b <= 1; b++) {
                for (int k = 1; k <= K; k++) {
                    if (b == 1) {
                        dp[ind][b][k] = Math.max(-p[ind] + dp[ind + 1][0][k], dp[ind + 1][b][k]);
                    } else {
                        dp[ind][b][k] = Math.max(p[ind] + dp[ind + 1][1][k - 1], dp[ind + 1][b][k]);
                    }
                }
            }
        }
        return dp[0][1][K];
    }

    public int maxProfit(int k, int[] prices) {
        return bottomup(k, prices);
    }
}
```

```csharp []
public class Solution {
    public int BottomUp(int K, int[] p) {
        int[][][] dp = new int[p.Length + 1][][];
        for (int i = 0; i <= p.Length; i++) {
            dp[i] = new int[3][];
            for (int j = 0; j < 3; j++) {
                dp[i][j] = new int[K + 1];
            }
        }
        
        for (int ind = p.Length - 1; ind >= 0; ind--) {
            for (int b = 0; b <= 1; b++) {
                for (int k = 1; k <= K; k++) {
                    if (b == 1) {
                        dp[ind][b][k] = Math.Max(-p[ind] + dp[ind + 1][0][k], dp[ind + 1][b][k]);
                    } else {
                        dp[ind][b][k] = Math.Max(p[ind] + dp[ind + 1][1][k - 1], dp[ind + 1][b][k]);
                    }
                }
            }
        }
        return dp[0][1][K];
    }

    public int MaxProfit(int k, int[] prices) {
        return BottomUp(k, prices);
    }
}
```

```javascript []
class Solution {
    bottomUp(K, p) {
        const dp = new Array(p.length + 1);
        for (let i = 0; i <= p.length; i++) {
            dp[i] = new Array(3);
            for (let j = 0; j < 3; j++) {
                dp[i][j] = new Array(K + 1).fill(0);
            }
        }

        for (let ind = p.length - 1; ind >= 0; ind--) {
            for (let b = 0; b <= 1; b++) {
                for (let k = 1; k <= K; k++) {
                    if (b === 1) {
                        dp[ind][b][k] = Math.max(-p[ind] + dp[ind + 1][0][k], dp[ind + 1][b][k]);
                    } else {
                        dp[ind][b][k] = Math.max(p[ind] + dp[ind + 1][1][k - 1], dp[ind + 1][b][k]);
                    }
                }
            }
        }
        return dp[0][1][K];
    }

    maxProfit(k, prices) {
        return this.bottomUp(k, prices);
    }
}
```

---

#

---

## \uD83D\uDCAF Related Questions and Practice
Here are some related questions and practice problems to further enhance your coding skills:

1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
3. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
4. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

Feel free to explore these problems to gain more experience and understanding of similar concepts.

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

-- *MR. ROBOT SIGNING OFF*

---
