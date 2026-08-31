# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/3220691/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/3220691/)

---

# Code
```
impl Solution {
    pub fn max_nice_divisors(prime_factors: i32) -> i32 {
        let prime_factors = prime_factors as i64;
        let st = [0_i64, 1, 2, 3, 4, 6];
        let modu = 1_000_000_007;
        if prime_factors < 6 {
            return st[prime_factors as usize] as _;
        }
        let mut result = st[3 + prime_factors as usize % 3];
        let mut base = 3;
        let mut exp = prime_factors / 3 - 1;
        while exp > 0 {
            if exp & 1 == 1 {
                result = result * base % modu;
            }
            base = base * base % modu;
            exp >>= 1;
        }
        result as _
    }
}
```