# Rust functional (just code, no explanation)

**Author:** panekk
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5089049/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5089049/)

---

I think there's no point in repeating explanations posted multiple times already, so here's just my Rust code.

# Code
```
impl Solution {
    pub fn subsequence_sum_or(nums: Vec<i32>) -> i64 {
        nums.iter()
            .fold((0 as i64, 0 as i64), |acc, &n| {
                let sum = acc.0 + n as i64;
                let or = acc.1 | n as i64 | sum;
                (sum, or)
            })
            .1
    }
}
```