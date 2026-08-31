# Rust simple solution

**Author:** OleksaM
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/585803/](https://leetcode.com/problems/range-addition-ii/solutions/585803/)

---

```
impl Solution {
    pub fn max_count(m: i32, n: i32, ops: Vec<Vec<i32>>) -> i32 {
        if ops.is_empty() {
            return m * n;
        }
        let mut m_max = i32::max_value();
        let mut n_max = i32::max_value();
        for op in ops {
            m_max = std::cmp::min(m_max, op[0]);
            n_max = std::cmp::min(n_max, op[1]);
        }
        return m_max * n_max;
    }
}
```
