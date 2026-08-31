# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/champagne-tower/solutions/911095/](https://leetcode.com/problems/champagne-tower/solutions/911095/)

---

```rust
impl Solution {
    pub fn champagne_tower(poured: i32, query_row: i32, query_glass: i32) -> f64 {
        let mut v: Vec<f64> = vec![0.0; 100];
        v[0] = poured as f64;
        for i in 1..=query_row as usize {
            let mut carry = 0.0;
            for val in v.iter_mut().take(i + 1) {
                let q = ((*val - 1.0) / 2.0).max(0.0);
                *val = q + carry;
                carry = q;
            }
        }
        v[query_glass as usize].min(1.0)
    }
}
```