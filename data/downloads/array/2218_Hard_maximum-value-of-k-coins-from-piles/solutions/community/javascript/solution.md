# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 64
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418129/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418129/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be approached using dynamic programming by breaking it down into subproblems. We can create a 2D array dp[i][j] to store the maximum value of coins for choosing j coins from the first i piles. Then, we can iterate through the array and compute the maximum value of coins for each subproblem by trying all possible choices for the current pile and updating the maximum result.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a 2D array dp[i][j] to store the maximum value of coins for choosing j coins from the first i piles.
2. Fill the first row and column of the array with zeros.
3. Iterate through the array and compute the maximum value of coins for each subproblem by trying all possible choices for the current pile and updating the maximum result.
4. If not choosing any coin from the current pile gives a better result, use that instead.
5. The last element of the array is the maximum value of coins for choosing k coins from all the piles.

  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^3), where n is the maximum number of coins in a pile. The outer loop runs n times, the inner loop runs k times, and the innermost loop runs n times in the worst case.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(nk), since we are using a 2D array of size (n+1) x (k+1) to store the results.

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public int maxValueOfCoins(List<List<Integer>> piles, int k) {
        // create a 2D array to store the maximum value of coins for choosing j coins from the first i piles
        int[][] dp = new int[piles.size() + 1][k + 1];
        // fill the first row of the array with zeros
        Arrays.fill(dp[0], 0);
        // fill the first column of the array with zeros
        for (int i = 1; i <= piles.size(); i++) {
            dp[i][0] = 0;
        }
        // iterate through the array and compute the maximum value of coins for each subproblem
        for (int i = 1; i <= piles.size(); i++) {
            for (int j = 1; j <= k; j++) {
                int cur = 0;
                // try all possible choices for the current pile and update the maximum result
                for (int x = 0; x < Math.min(piles.get(i - 1).size(), j); x++) {
                    cur += piles.get(i - 1).get(x);
                    dp[i][j] = Math.max(dp[i][j], cur + dp[i - 1][j - x - 1]);
                }
                // if not choosing any coin from the current pile gives a better result, use that instead
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            }
        }
        // the last element of the array is the maximum value of coins for choosing k coins from all the piles
        return dp[piles.size()][k];
    }
}
```
```javascript []
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
 
var maxValueOfCoins = function(piles, k) {
    // Initialize a 2D array dp with dimensions (n+1) x (k+1) to store the maximum value of coins
    // for choosing j coins from the first i piles
    const n = piles.length;
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));
    
    // Iterate through the rows of dp and compute the maximum value of coins for each subproblem
    for (let i = 1; i <= n; i++) {
        // Iterate through the columns of dp and compute the maximum value of coins for each subproblem
        for (let j = 1; j <= k; j++) {
            let cur = 0;
            // Iterate through the first j coins of the ith pile and compute the maximum value of coins
            // for choosing x coins from the ith pile and (j-x) coins from the first (i-1) piles
            for (let x = 0; x < Math.min(j, piles[i-1].length); x++) {
                cur += piles[i-1][x];
                dp[i][j] = Math.max(dp[i][j], cur + dp[i-1][j-x-1]);
            }
            // Take the maximum value of coins for choosing j coins from the first (i-1) piles
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j]);
        }
    }
    // Return the maximum value of coins for choosing k coins from all the piles
    return dp[n][k];
};

```
```python []
class Solution(object):
    def maxValueOfCoins(self, piles, k):
        """
        :type piles: List[List[int]]
        :type k: int
        :rtype: int
        """
        dp = [[0] * (k + 1) for _ in range(len(piles) + 1)]
        for i in range(1, len(piles) + 1):
            for j in range(1, k + 1):
                cur = 0
                for x in range(min(len(piles[i - 1]), j)):
                    cur += piles[i - 1][x]
                    dp[i][j] = max(dp[i][j], cur + dp[i - 1][j - x - 1])
                dp[i][j] = max(dp[i][j], dp[i - 1][j])
        return dp[len(piles)][k]
```
```C++ []
class Solution {
public:
    int maxValueOfCoins(vector<vector<int>>& piles, int k) {
        int n = piles.size();
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, 0));
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                int cur = 0;
                for (int x = 0; x < min(j, (int)piles[i-1].size()); x++) {
                    cur += piles[i-1][x];
                    dp[i][j] = max(dp[i][j], cur + dp[i-1][j-x-1]);
                }
                dp[i][j] = max(dp[i][j], dp[i-1][j]);
            }
        }
        return dp[n][k];
    }
};
```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```