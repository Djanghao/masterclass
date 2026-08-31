# Rust

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/4225870/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/4225870/)

---

only two patterns,  012 | 010, for each rows

```
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn num_of_ways(n: i32) -> i32 {
        ((1..n)
            .fold([6, 6], |[p012, p010], _| {
                let nxt_p012 = (2 * p012 + 2 * p010) % MOD;
                let nxt_p010 = (2 * p012 + 3 * p010) % MOD;
                [nxt_p012, nxt_p010]
            })
            .iter()
            .sum::<i64>()
            % MOD) as _
    }
}
```