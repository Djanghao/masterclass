# Rust one-liner, faster than 100%

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3321584/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3321584/)

---

```
impl Solution {
    pub fn even_odd_bit(n: i32) -> Vec<i32> {
        vec![(n & 0x5555).count_ones() as i32, (n & 0xAAAA).count_ones() as i32]
    }
}

```