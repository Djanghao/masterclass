# 💥💥100% beats runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/5809877/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/5809877/)

---

# Intuition
We need to maximize the profit from cutting and selling pieces of wood. The idea is to determine the best way to cut a large piece of wood into smaller pieces so that I can earn the most money based on given prices for various piece sizes.


# Approach
Dynamic Programming Table: I use a 2D table (dp) where each cell dp[h][w] keeps track of the maximum profit I can get from a piece of wood of height h and width w.


Populate Prices: First, I set up the table with the maximum profit for each specific piece size based on the prices given.


Consider Cuts: For each piece size, I explore all possible vertical and horizontal cuts to see if splitting the piece into smaller ones gives a higher profit. I update the table with the best possible profit for each piece size.


# Complexity
- Time complexity:
O(m * n * (m + n)).
This comes from looping through every piece size (h, w) and considering all possible cuts for both dimensions.


- Space complexity:
 O(m * n).
This is due to the 2D table storing profit values for each piece size.


# Code
```typescript []
function sellingWood(m: number, n: number, prices: number[][]): number {
    // Initialize the DP table
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Populate the DP table based on the prices
    for (const [hi, wi, pricei] of prices) {
        dp[hi][wi] = Math.max(dp[hi][wi], pricei);
    }

    // Update the DP table considering all possible cuts
    for (let h = 1; h <= m; h++) {
        for (let w = 1; w <= n; w++) {
            // Vertical cuts
            for (let i = 1; i <= h / 2; i++) {
                dp[h][w] = Math.max(dp[h][w], dp[i][w] + dp[h - i][w]);
            }
            // Horizontal cuts
            for (let j = 1; j <= w / 2; j++) {
                dp[h][w] = Math.max(dp[h][w], dp[h][j] + dp[h][w - j]);
            }
        }
    }

    return dp[m][n];
}


```