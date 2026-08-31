# Rust Math Solution | Beats 100% CPU & Memory | i64

**Author:** ritou11
**Votes:** 2
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/1622663/](https://leetcode.com/problems/nth-magical-number/solutions/1622663/)

---

Treat common multiple as one group;
Skip all complete groups;
Search answer in the last group;
```rust
impl Solution {
    pub fn nth_magical_number(n: i32, a: i32, b: i32) -> i32 {
        let CLIP = 1000_000_007;
        let (a, b) = (a.min(b), a.max(b));
        if b % a == 0 { return ((n as i64 * a as i64) % CLIP) as i32; }
        let g = Solution::gcd(a, b);
        let (ka, kb) = (b/g, a/g);
        let nk = ka + kb - 1;
        let base = ((n / nk) as i64 * ka as i64 * a as i64 % CLIP) as i32;
        let r = n % nk;
        let (mut pa, mut pb) = (0, 0);
        while pa + pb < r {
            if (pa + 1) * a <  (pb + 1) * b {
                pa += 1;
            } else {
                pb += 1;
            }
        }
        return ((base as i64 + (pa as i64 * a as i64).max(pb as i64 * b as i64)) % CLIP) as i32;
    }
    fn gcd(a: i32, b: i32) -> i32 {
        let r = a % b;
        if r == 0 { b }
        else { Solution::gcd(b, r) }
    }
}
```