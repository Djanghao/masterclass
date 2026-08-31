# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2990982/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2990982/)

---

# Code
```
impl Solution {
    pub fn num_perms_di_sequence(s: String) -> i32 {
        let n = s.len();
        let m = 1_000_000_007;
        let mut dp = vec![vec![0; n + 1]; n + 1];
        dp[0][0] = 1;
        for i in 1..=n {
            for j in 0..=i {
                if s.chars().nth(i - 1).unwrap() == 'D' {
                    for k in j..=i - 1 {
                        dp[i][j] = dp[i][j] % m + dp[i - 1][k] % m;
                    }
                } else if j > 0 {
                    for k in 0..=j - 1 {
                        dp[i][j] = dp[i][j] % m + dp[i - 1][k] % m;
                    }
                }
            }
        }
        let mut res = 0;
        for i in 0..=n {
            res = res % m + dp[n][i] % m;
        }
        (res % m) as _
    }
}
```