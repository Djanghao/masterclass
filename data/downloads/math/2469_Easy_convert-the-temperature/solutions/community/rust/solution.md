# Simple Rust Solution

**Author:** HamdanNaseem
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/5848511/](https://leetcode.com/problems/convert-the-temperature/solutions/5848511/)

---

# Code
```rust []
impl Solution {
    pub fn convert_temperature(celsius: f64) -> Vec<f64> {
        vec![celsius+273.15,(celsius*1.80)+32.0]
    }
}
```