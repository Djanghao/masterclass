# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/3242156/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/3242156/)

---

# Code
```
impl Solution {
    pub fn min_non_zero_product(p: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        pub fn pow(a: i64, times: i64) -> i64 {
            if times <= 0 {
                1
            } else if times == 1 {
                a
            } else {
                let r = pow(a, times / 2) % MOD;
                let addx = if times % 2 == 1 { a } else { 1 };
                (((addx * r) % MOD) * r) % MOD
            }
        }

        let base: i64 = 2;
        let layer: i64 = base.pow(p as u32);
        let a: i64 = (layer - 1) % MOD;
        (a * pow(a - 1, layer / 2 - 1) % MOD) as i32
    }
}
```