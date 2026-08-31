# Modular Arithmetic

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4365331/](https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4365331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is the Rust implementation of the solution: https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4356005/stars-and-bars/
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n * log(n))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::max;

const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn number_of_sequence(n: i32, sick: Vec<i32>) -> i32 {
        let m = 100_000;
        let mut f = vec![0; m + 1];
        let mut v = vec![0; m + 1];

        f[0] = 1;

        for i in 1..=m {
            f[i] = (f[i - 1] * (i as i64)) % MOD;
        }

        v[m] = Self::mod_pow(f[m], MOD - 2);

        for i in (0..m).rev() {
            v[i] = (v[i + 1] * (i as i64 + 1)) % MOD;
        }

        let mut r = 1;

        for i in 1..sick.len() {
            let g = (sick[i] - sick[i - 1] - 1) as i64;

            r = (r * Self::mod_pow(2, max(0, g - 1))) % MOD;

            let l = (sick[i] - i as i32) as i64;

            r = (r * Self::binom(l, g, &f, &v)) % MOD;
        }

        let l = (n - sick.len() as i32) as i64;
        let p = sick.last().unwrap();
        let q = (n - p - 1) as i64;

        r = (r * Self::binom(l, q, &f, &v)) % MOD;

        r as i32
    }   

    pub fn mod_pow(x: i64, n: i64) -> i64 {
        if n == 0 {
            1 % MOD
        } else {
            let mut u = Self::mod_pow(x, n / 2);

            u = (u * u) % MOD;

            if n % 2 > 0 {
                u = (u * x) % MOD;
            }

            u % MOD
        }
    }

    pub fn binom(n: i64, k: i64, f: &Vec<i64>, v: &Vec<i64>) -> i64 {
        max(1, (((f[n as usize] * v[k as usize]) % MOD) * v[n as usize - k as usize]) % MOD)
    }
}
```