# Rust DP solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195753/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195753/)

---

```rust
impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        let s1 = word1.as_bytes();
        let s2 = word2.as_bytes();
        let mut dp = vec![vec![0; s2.len() + 1]; s1.len() + 1];
        for (i, b1) in s1.iter().enumerate() {
            for (j, b2) in s2.iter().enumerate() {
                dp[i + 1][j + 1] = if b1 == b2 {
                    dp[i][j] + 1
                } else {
                    dp[i + 1][j].max(dp[i][j + 1])
                }
            }
        }
        (s1.len() + s2.len() - 2 * dp[s1.len()][s2.len()]) as i32
    }
}
```

with optimized O(n) space:

```rust
impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        let s2 = word2.as_bytes();
        let mut dp = vec![0; s2.len() + 1];
        for b1 in word1.as_bytes() {
            let mut prev = dp[0];
            for (j, b2) in s2.iter().enumerate() {
                let val = dp[j + 1].max(if b1 == b2 { prev + 1 } else { dp[j] });
                prev = dp[j + 1];
                dp[j + 1] = val;
            }
        }
        (word1.len() + word2.len() - 2 * dp[s2.len()]) as i32
    }
}
```