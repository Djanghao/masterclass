# Clean DP solution with explanation

**Author:** zzg_zzm
**Votes:** 46
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/471601/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/471601/)

---

**Validation for merging into a single pile**
For any merge step, `K` piles are replaced by a single pile, so the number of piles is reduced by `(K-1)`. Eventually, we require to have a single pile, so the original number of piles `N` must be 1 after mod by `(K-1)`, i.e.,
`(N-1)%(K-1) == 0`.

**DP to conpute min cost**
For any index `0 <= i <= j < N`, define

`dp[i][j]:` the min cost to merge max number of stones in interval `[i,j]` with `stones[i]` involved in merge if possible.

**NOTE:**
1. If the validation holds `(j-i)%(K-1) == 0`, all stones must be merged into one pile. The cost of last merge must be the sum in `[i,j]`.
2. Otherwise, multiple piles (less than `K`) are left, and `stones[i]` must be in the left most pile. The left most pile is formed by stones in some interval `[i,k]`, where `k = i + multiple*(K-1)`. The rest piles are formed by stones in interval `[k+1,j]`.
3. DP equation: 
   `dp[i][j] = min(dp[i][k] + dp[k+1][j])` for all such `k = i + multiple*(K-1)` if we can't merge into a single pile; 
   otherwise, add another cost of the sum in `[i,j]` onto the `dp[i][j]` above.

```cpp
    int mergeStones(vector<int>& stones, int K) 
    {
      int N = stones.size();
      if ((N-1)%(K-1) > 0) return -1; // validation to merge into a single pile
      
      // partial sum
      int sum[N+1] = {0};
      for (int i = 1; i <= N; i++)
        sum[i] = sum[i-1] + stones[i-1];
      
      // dp[i][j]: the minimum cost needed to merge stones[i] ~ stones[j] 
      // with the left most element stones[i] always involved in merge if possible
      vector<vector<int>> dp(N, vector<int>(N, 0));
      
      for (int L = K; L <= N; L++) // L: length of interval [i,j]
        for (int i = 0, j = i+L-1; j < N; i++, j++) { // each interval [i,j] of length L in [0,N]
          
          dp[i][j] = INT_MAX;          
          
          // when stones[i] is merged, it must be merged with multiple of (K-1) other stones
          for (int k = i; k < j; k += (K-1))
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j]);
          
          // all stones in [i,j] can be merged into one pile
          if ((L-1)%(K-1) == 0)
            dp[i][j] += (sum[j+1] - sum[i]); // add sum in [i,j]
        }
      
      return dp[0][N-1];
    }
```