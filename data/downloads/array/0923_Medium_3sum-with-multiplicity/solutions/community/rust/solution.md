# Rust Counting with Cases solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123865/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123865/)

---

```rust
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn three_sum_multi(arr: Vec<i32>, target: i32) -> i32 {
        let mut counts = vec![0_i64; 101];
        arr.iter().for_each(|&n| counts[n as usize] += 1);
        let mut answer = 0;
        for i in 0..=100 {
            for j in i..=100 {
                let k = target - i - j;
                if (j..=100).contains(&k) {
                    let (ci, cj, ck) = (counts[i as usize], counts[j as usize], counts[k as usize]);
                    answer += match (i == j, j == k) {
                        (false, false) => ci * cj * ck,
                        (false, true) => ci * cj * (cj - 1) / 2,
                        (true, false) => ci * (ci - 1) / 2 * ck,
                        (true, true) => ci * (ci - 1) * (ci - 2) / 6,
                    };
                    answer %= MOD;
                }
            }
        }
        answer as i32
    }
}
```