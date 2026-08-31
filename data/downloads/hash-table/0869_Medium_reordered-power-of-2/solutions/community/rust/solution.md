# Rust counting solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/1120112/](https://leetcode.com/problems/reordered-power-of-2/solutions/1120112/)

---

```rust
impl Solution {
    pub fn reordered_power_of2(n: i32) -> bool {
        let digit_counts = |n: i32| -> [usize; 10] {
            let mut n = n;
            let mut d = [0; 10];
            while n > 0 {
                d[(n % 10) as usize] += 1;
                n /= 10;
            }
            d
        };
        let counts = digit_counts(n);
        (0..31).any(|i| digit_counts(1 << i) == counts)
    }
}
```