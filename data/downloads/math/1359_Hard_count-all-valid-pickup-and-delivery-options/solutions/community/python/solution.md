# O(n*n) Approach || DP || Very Easy Code || C++ || Java || Python

**Author:** shivam-727
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4026717/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4026717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just Explore both the options of pick/deliver by eliminating the invalid cases.

`for detailed explanation you can refer to my youtube channel` 

[ Video in Hindi click here](https://youtube.com/@LetsCodeTogether72/videos)

or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**: 
   - `dp[505][505]`: A 2D array to store the intermediate results. `dp[i][j]` represents the number of valid orders when there are `i` items not yet picked up and `j` items not yet delivered.
   - `MOD = 1e9 + 7`: A constant to take the modulo of results to prevent integer overflow.
   
2. **solve function**:
   - This is a recursive function that calculates the number of valid orders given the number of items not yet picked up (`notpickup`) and the number of items not yet delivered (`notdelivered`).
   - It uses memoization to store and retrieve previously computed results, so it doesn't calculate the same subproblem multiple times.

   Here's the breakdown of the `solve` function:

   - Base Cases:
     - If both `notpickup` and `notdelivered` are 0, it means all items have been picked up and delivered, so there's one valid order, and it returns 1.
     - If `notpickup` becomes negative, `notdelivered` becomes negative, or `notpickup` exceeds `notdelivered`, it's an invalid order, and it returns 0.

   - Memoization:
     - Before calculating anything, it checks if the result for the given `(notpickup, notdelivered)` pair is already calculated and stored in `dp`. If yes, it directly returns the result from `dp` to avoid recomputation.

   - Recursive Calculation:
     - It calculates the number of valid orders for the current state by considering two possibilities:
       1. Picking up an item: `(notpickup * solve(notpickup - 1, notdelivered))`
       2. Delivering an item that has already been picked up: `((notdelivered - notpickup) * solve(notpickup, notdelivered - 1))`
     - It takes the modulo `MOD` to prevent integer overflow and sums up these two possibilities to get the total number of valid orders for the current state.

   - Finally, it stores the calculated result in `dp[notpickup][notdelivered]` and returns this result.

3. **countOrders function**:
   - This is the public interface for calculating the number of valid orders for `n` items.
   - It initializes the `dp` array with -1 values to indicate that no results have been calculated yet.
   - It calls the `solve` function with `n` for both `notpickup` and `notdelivered`, effectively calculating the total number of valid orders for delivering `n` distinct items.

The code uses dynamic programming and memoization to avoid redundant calculations, making it an efficient solution to the problem of counting valid order combinations for delivering `n` items.

# Complexity
- Time complexity:$$O(n*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++
class Solution {
private:
    int dp[505][505];
    int MOD = 1e9 + 7;
    long long solve(int notpickup, int notdelivered) {
        if (notpickup == 0 && notdelivered == 0) {
            return 1;
        }
        if (notpickup < 0 || notdelivered < 0 || notpickup > notdelivered) {
            return 0;
        }

        if (dp[notpickup][notdelivered] != -1) {
            return dp[notpickup][notdelivered];
        }

        long long res = 0;

        res = (res + notpickup * solve(notpickup - 1, notdelivered)) % MOD;

        res = (res + (notdelivered - notpickup) * solve(notpickup, notdelivered - 1)) % MOD;

        return dp[notpickup][notdelivered] = res;
    }

public:
    int countOrders(int n) {
        memset(dp, -1, sizeof(dp));
        return solve(n, n);
    }
};
```
```java []
class Solution {
    private long[][] dp;
    private static final int MOD = 1000000007;

    private long solve(int notpickup, int notdelivered) {
        if (notpickup == 0 && notdelivered == 0) {
            return 1;
        }
        if (notpickup < 0 || notdelivered < 0 || notpickup > notdelivered) {
            return 0;
        }

        if (dp[notpickup][notdelivered] != -1) {
            return dp[notpickup][notdelivered];
        }

        long res = 0;

        res = (res + notpickup * solve(notpickup - 1, notdelivered)) % MOD;

        res = (res + (notdelivered - notpickup) * solve(notpickup, notdelivered - 1)) % MOD;

        return dp[notpickup][notdelivered] = res;
    }

    public int countOrders(int n) {
        dp = new long[n + 1][n + 1];
        for (long[] row : dp) {
            Arrays.fill(row, -1);
        }
        return (int) solve(n, n);
    }
}

```
```python []
class Solution:
    def __init__(self):
        self.dp = [[-1 for _ in range(505)] for _ in range(505)]
        self.MOD = 10**9 + 7

    def solve(self, notpickup, notdelivered):
        if notpickup == 0 and notdelivered == 0:
            return 1
        if notpickup < 0 or notdelivered < 0 or notpickup > notdelivered:
            return 0

        if self.dp[notpickup][notdelivered] != -1:
            return self.dp[notpickup][notdelivered]

        res = 0

        res = (res + notpickup * self.solve(notpickup - 1, notdelivered)) % self.MOD

        res = (res + (notdelivered - notpickup) * self.solve(notpickup, notdelivered - 1)) % self.MOD

        self.dp[notpickup][notdelivered] = res
        return res

    def countOrders(self, n: int) -> int:
        return self.solve(n, n)

```

