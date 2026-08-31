# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/3182027/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/3182027/)

---

# Code
```
impl Solution {
    pub fn number_of_sets(n: i32, k: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
    
        fn ncr(n: usize, r: usize, fact: &[i64], invfact: &[i64]) -> i64 {
            if r > n {
                return 0;
            }
            mult(mult(fact[n], invfact[n - r]), invfact[r])
        }

        fn mult(a: i64, b: i64) -> i64 {
            a * b % MOD
        }

        let (n, k) = (n as usize, k as usize);
        let mut fact = vec![0; n + k + 1];
        let mut inv = vec![0; n + k + 1];
        let mut invfact = vec![0; n + k + 1];

        fact[0] = 1;
        invfact[0] = 1;
        fact[1] = 1;
        invfact[1] = 1;
        inv[1] = 1;
        for i in 2..n + k + 1 {
            fact[i] = mult(fact[i - 1], i as i64);
            inv[i] = mult(inv[MOD as usize % i], MOD - MOD / i as i64);
            invfact[i] = mult(invfact[i - 1], inv[i]);
        }

        ncr(n + k - 1, 2 * k, &fact, &invfact) as _
    }
}
```