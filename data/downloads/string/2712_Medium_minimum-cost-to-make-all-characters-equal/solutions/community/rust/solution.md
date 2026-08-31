# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/4166969/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/4166969/)

---

```
impl Solution {
    pub fn minimum_cost(s: String) -> i64 {
        let n = s.len();
        let s = s.as_bytes();
        let mut dp = vec![0i64; n];

        for i in 1..n {
            dp[i] = dp[i - 1];
            if s[i] != s[i - 1] {
                dp[i] += i as i64;
            }
        }

        let (mut res, mut cnt) = (dp[n - 1] as i64, 0);
        for i in (0..n - 1).rev() {
            if s[i] != s[i + 1] {
                cnt += (n - i - 1) as i64;
            }
            res = res.min(dp[i] + cnt);
        }

        res
    }
}

```