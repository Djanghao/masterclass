# Combinatorics + Modular Arithmetic

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4374429/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4374429/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is the Rust implementation of the solution: https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527638/o-k-log-k-math-fermat-s-little-theorem-combinatorics/
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(k * logk)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(logk)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn number_of_ways(start_pos: i32, end_pos: i32, k: i32) -> i32 {
        let n = (end_pos - start_pos).abs();
        let m = k - n;

        if m < 0 || m % 2 > 0 {
            0
        } else if m == 0 {
            1
        } else {
            let l = m / 2;

            let mut kf = 1;
            let mut lif = 1;
            let mut kif = 1;

            for i in 1..k + 1 {
                kf = (kf * (i as i64)) % MOD;

                if i == l {
                    lif = Self::mod_pow(kf, MOD - 2);
                }

                if i == k - l {
                    kif = Self::mod_pow(kf, MOD - 2);
                }
            }

            let mut r = (kf * lif) % MOD;

            r = (r * kif) % MOD;

            r as i32
        }
    }

    pub fn mod_pow(n: i64, m: i64) -> i64 {
        if m == 0 {
            1
        } else {
            let mut l = Self::mod_pow(n, m / 2);

            l = (l * l) % MOD;

            if m % 2 > 0 {
                l = (l * n) % MOD;
            }

            l
        }
    }
}
```