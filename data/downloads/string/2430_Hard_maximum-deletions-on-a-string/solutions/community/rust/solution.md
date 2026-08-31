# Rust | Bottom-Up DP | With Comments

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648816/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648816/)

---

This is my unrevised submission for the 2022-10-02 Weekly Contest 313. Set up a DP table where positions represent the number of maximum operations to delete the corresponding prefix. For each position, we first check the previous DP entries to see if there are any candidates that would let us increase the number of operations (rather cheap) and for those, we check the corresponding substrings (from the start of the previous entry to the current position, and from the current position forwards an equal number of steps - a more expensive operation). Our answer is then the maximum of any operation count found.

Comment: This took so long to solve, simply because I was intimidated by this being the "hard" problem of the contest. I lost a lot of time thinking about what the catch could be instead of just going for it. Lesson learned.

```
impl Solution {
    pub fn delete_string(s: String) -> i32 {
        let s = s.as_bytes();
        let mut dp = vec![-1; s.len() + 1];
        dp[0] = 1;
        let mut max = 1;
        for i in 1..s.len() {
            let w = i - i.saturating_sub(s.len() - i);
            for j in 1..=w {
                if dp[i - j] != -1 && dp[i - j] >= dp[i] && s[i-j..i] == s[i..i+j] {
                    dp[i] = dp[i-j] + 1;
                    max = max.max(dp[i]);
                }
            }
        }
        max
    }
}
```