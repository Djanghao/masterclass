# Rust comb pow

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4587964/](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4587964/)

---

```rust
impl Solution {
    pub fn string_count(n: i32) -> i32 {
        let n = n as i64;
        const MOD: i64 = 1_000_000_007;
        let qpow = |mut a: i64, mut n: i64| -> i64 {
            let mut ans: i64 = 1;
            while n > 0 {
                if n & 1 == 1 {
                    ans = (ans * a % MOD) % MOD;
                }
                a = (a * a % MOD) % MOD;
                n >>= 1;
            }
            ans
        };
        let mut res = qpow(26, n);
        res = (res - ((n + 75) * qpow(25, n - 1) % MOD) + MOD) % MOD;
        res = (res + ((2 * n + 72) * qpow(24, n - 1)) % MOD) % MOD;
        ((res - ((n + 23) * qpow(23, n - 1)) % MOD + MOD) % MOD) as _
    }
}
```