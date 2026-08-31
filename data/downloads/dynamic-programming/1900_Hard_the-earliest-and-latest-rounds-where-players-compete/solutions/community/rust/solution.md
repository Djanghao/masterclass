# Rust memoization

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/5326174/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/5326174/)

---

# Approach
1. Convert `first_player` and `second_player` to `i` and `j`, which are 0-based and `i < j`.

2. When a player (let's say `a`) other than `i` and `j` advances to next round, there are 3 cases to consider regarding to `a`'s position:
- Region 0 (left -> l): `a < i`.
- Region 1 (middle -> m): `i < a < j`.
- Region 2 (right -> r): `j < a`.
```
[...i...j...]
  \u2191   \u2191   \u2191
  0   1   2
```

3. Considering that when two players compete, there can be different cases of what region the winner can fall into after each match. Some variables (`l`, `m`, `lr`, `lm`, `mr`) are used here to count each possibility. (There is no `r` simply because it is not needed for calculation in step 4.)

4. Use those variables (`l`, `m`, `lr`, `lm`, `mr`) to **iterate through all possibilities** of what **new indices** `i` and `j` can fall into in the next round.

4. Add top-down DP logic to get the answer using the memoized answers of next round.
# Code
```
impl Solution {
    pub fn earliest_and_latest(n: i32, first_player: i32, second_player: i32) -> Vec<i32> {
        let n = n as usize;
        let i = first_player as usize - 1;
        let j = second_player as usize - 1;;
        let mut dp = vec![vec![vec![vec![-1; 2]; j + 1]; i + 1]; n + 1];
        Self::memo(n, i, j, &mut dp);
        dp[n][i].pop().unwrap()
    }

    fn memo(n: usize, i: usize, j: usize, dp: &mut Vec<Vec<Vec<Vec<i32>>>>) {
        if dp[n][i][j][0] != -1 {
            return;
        }
        if i + j + 1 == n {
            dp[n][i][j][0] = 1;
            dp[n][i][j][1] = 1;
            return;
        }
        let n2 = (n + 1) / 2;
        let i_seq = i.min(n - i - 1);
        let j_seq = j.min(n - j - 1);
        let mut l = 0;
        let mut m = 0;
        let mut lr = 0;
        let mut lm = 0;
        let mut mr = 0;
        for a in 0..n2 {
            if a == i_seq || a == j_seq {
                continue;
            }
            let b = n - a - 1;
            match (Self::get_region(a, i, j), Self::get_region(b, i, j)) {
                (0, 0) => l += 1,
                (0, 1) => lm += 1,
                (0, 2) => lr += 1,
                (1, 1) => m += 1,
                (1, 2) => mr += 1,
                (2, 2) => (),
                _ => unreachable!(),
            }
        }
        dp[n][i][j][0] = i32::MAX;
        dp[n][i][j][1] = i32::MIN;
        for lr_i in 0..=lr {
            for lm_i in 0..=lm {
                for mr_i in 0..=mr {
                    let i2 = l + lr_i + lm_i;
                    let j2 = l + m + lr_i + lm + mr_i + 1;
                    Self::memo(n2, i2, j2, dp);
                    dp[n][i][j][0] = dp[n][i][j][0].min(dp[n2][i2][j2][0] + 1);
                    dp[n][i][j][1] = dp[n][i][j][1].max(dp[n2][i2][j2][1] + 1);
                }
            }
        }
    }

    fn get_region(a: usize, i: usize, j: usize) -> i32 {
        if a < i { 0 } else if a < j { 1 } else { 2 }
    }
}
```