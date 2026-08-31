# 🦀 Rust 🦀 - beats 100%

**Author:** spankem
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3558310/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3558310/)

---


# Code
```
impl Solution {
    pub fn final_prices(prices: Vec<i32>) -> Vec<i32> {
        prices
            .iter()
            .enumerate()
            .map(|(i, &price)| {
                let discount = prices
                    .iter()
                    .skip(i + 1)
                    .find(|&p| p <= &price)
                    .unwrap_or(&0);
                price - discount
            })
            .collect()
    }
}
```