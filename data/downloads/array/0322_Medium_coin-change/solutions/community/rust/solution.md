# Rust DP solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/coin-change/solutions/1104496/](https://leetcode.com/problems/coin-change/solutions/1104496/)

---

```rust
impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        let amount = amount as usize;
        let mut dp = vec![None; amount + 1];
        dp[0] = Some(0);
        for i in 1..=amount {
            dp[i] = coins
                .iter()
                .filter_map(|&j| {
                    let j = j as usize;
                    if j <= i {
                        dp[i - j].map(|n| n + 1)
                    } else {
                        None
                    }
                })
                .min();
        }
        dp[amount].unwrap_or(-1)
    }
}
```