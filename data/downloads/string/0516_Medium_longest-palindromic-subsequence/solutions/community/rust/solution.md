# Rust + DP

**Author:** unknown-
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3415092/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3415092/)

---

```
impl Solution {
    pub fn longest_palindrome_subseq(s: String) -> i32 {
        let n = s.len();
        let s = s.as_bytes();
        let mut dp = vec![0; n];
        let mut t = vec![0; n];

        for i in (0..n).rev() {
            dp[i] = 1;
            for j in i + 1..n {
                if s[i] == s[j] {
                    dp[j] = t[j - 1] + 2;
                } else {
                    dp[j] = t[j].max(dp[j - 1]);
                }
            }
            t.copy_from_slice(&dp);
        }

        dp[n - 1]
    }
}
```