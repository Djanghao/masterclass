# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/1570764/](https://leetcode.com/problems/smallest-range-i/solutions/1570764/)

---

```
impl Solution {
    pub fn smallest_range_i(nums: Vec<i32>, k: i32) -> i32 {
        let (min_val, max_val) = nums
            .iter()
            .fold((i32::MAX, i32::MIN), |(min_val, max_val), &x| {
                (min_val.min(x), max_val.max(x))
            });

        (max_val - min_val - 2 * k).max(0)
    }
}
```