# Rust one liner

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/1387082/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/1387082/)

---

```
impl Solution {
    pub fn sum_zero(n: i32) -> Vec<i32> {
        (1..n).chain(std::iter::once(-n * (n - 1) / 2)).collect()
    }
}
```