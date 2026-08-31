# Rust top-down DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/5193711/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/5193711/)

---

# Approach
-Convert `prices` to a (m + 1) * (n + 1) size 2D Vec `pieces`, where each `prices[i] = [h, w, val]` will be expressed as `pieces[h][w] = val`.

-Also make use of cells `pieces[h][0]` to store the minimum width among the pieces with height = `h`. Same logic for `pieces[0][w]` for minimum height with width = `w`. We can use this information to reduce unnecessary recursive calls.
(e.g. if the wood's width is 10, and `pieces[h][0]` is 12, we won't do a cut to make a h * 10 size since all fit pieces with height `h` require larger width.)

-Use memoization to find the answer. Make use of the recursive definition:
```
dp[m][n] = max(fit_piece, best_verti_split, best_hori_split)

where:
 fit_piece = pieces[m][n] if there exists a m x n piece,
 best_verti_split = max(dp[h][n] + dp[m - h][n]) for all 0 < h < m,
 best_hori_split = max(dp[m][w] + dp[m][n - w]) for all 0 < w < n.
```

# Complexity
- Time complexity: $$O(m * n * (m + n))$$

- Space complexity: $$O(m * n)$$

# Code
```
impl Solution {
    pub fn selling_wood(m: i32, n: i32, prices: Vec<Vec<i32>>) -> i64 {
        let mut pieces = vec![vec![i64::MAX; n as usize + 1]; m as usize + 1];
        for v in prices.iter() {
            pieces[v[0] as usize][0] = pieces[v[0] as usize][0].min(v[1] as i64);
            pieces[0][v[1] as usize] = pieces[0][v[1] as usize].min(v[0] as i64);
            pieces[v[0] as usize][v[1] as usize] = v[2] as i64;
        }
        let mut dp = vec![vec![-1i64; n as usize + 1]; m as usize + 1];
        let ans = Self::memo(m as usize, n as usize, &mut dp, &pieces);
        ans
    }

    fn memo(m: usize, n: usize, dp: &mut Vec<Vec<i64>>, pieces: &Vec<Vec<i64>>) -> i64 {
        if dp[m][n] == -1 {
            dp[m][n] = 0;
            if pieces[m][n] != i64::MAX {
                dp[m][n] = pieces[m][n];
            }
            for h in 1..=m / 2 {
                if pieces[h][0] <= n as i64 || pieces[m - h][0] <= n as i64 {
                    let res = Self::memo(h, n, dp, pieces) + Self::memo(m - h, n, dp, pieces);
                    dp[m][n] = dp[m][n].max(res);
                }
            }
            for w in 1..=n / 2 {
                if pieces[0][w] <= m as i64 || pieces[0][n - w] <= m as i64 {
                    let res = Self::memo(m, w, dp, pieces) + Self::memo(m, n - w, dp, pieces);
                    dp[m][n] = dp[m][n].max(res);
                }
            }
        }
        dp[m][n]
    }
}
```