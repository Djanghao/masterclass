# Rust + DP

**Author:** unknown-
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3667359/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3667359/)

---

```
impl Solution {
    pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
        let mut s0 = -prices[0]; // after buy state
        let mut s1 = 0; // after sell state
        for i in 1..prices.len() {
            let old_s0 = s0;
            s0 = s0.max(s1 - prices[i]);
            s1 = s1.max(old_s0 + prices[i] - fee);
        }
        s0.max(s1)
    }
}
```