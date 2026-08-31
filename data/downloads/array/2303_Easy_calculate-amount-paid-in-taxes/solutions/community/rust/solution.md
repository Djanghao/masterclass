# Rust | 0ms | 1-liner

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5887885/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5887885/)

---

# Code
```rust []
impl Solution {
    pub fn calculate_tax(brackets: Vec<Vec<i32>>, mut income: i32) -> f64 {
        [vec![vec![0, 0]], brackets]
            .concat()
            .windows(2)
            .map(|win| {
                let dif = win[1][0] - win[0][0];
                let tax = (dif.min(income) as f64) * win[1][1] as f64 / 100.0;
                income = (income - dif).max(0);
                tax
            })
            .sum()
    }
}
```