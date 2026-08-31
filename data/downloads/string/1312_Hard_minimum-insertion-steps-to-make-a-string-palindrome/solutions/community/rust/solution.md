# Rust, DP, short and concise solution ✅🔔🚩

**Author:** dfomin
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443346/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443346/)

---

# Intuition
Simple dynamic programming approach. The subtask is to solve it for substring of length `j` starting with index `i`.
`dp[i][j]` - the number of insersions to make palindrome from substring `s[i..=i+j]`.
Every time you add one more character to substring you check if it's the same as first character, if so, `dp[i][j] = dp[i - 2][j]`, otherwise, to make it palindrome you need to make one insersion to the beginning or the end, so `dp[i][j] = min(dp[i - 1][j], dp[i - 1][j + 1]) + 1`.

# Code
```
use std::cmp::min;

impl Solution {
    pub fn min_insertions(s: String) -> i32 {
        let chars: Vec<char> = s.chars().collect();
        let mut dp = vec![vec![0; chars.len()]; chars.len() + 1];
        for i in 2..chars.len() + 1 {
            for j in 0..chars.len() - i + 1 {
                if chars[j] == chars[j + i - 1] {
                    dp[i][j] = dp[i - 2][j + 1];
                } else {
                    dp[i][j] = min(dp[i - 1][j], dp[i - 1][j + 1]) + 1;
                }
            }
        }

        return dp[chars.len()][0];
    }
}
```