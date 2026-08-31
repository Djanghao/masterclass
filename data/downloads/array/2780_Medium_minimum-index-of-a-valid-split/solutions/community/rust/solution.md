# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3849890/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3849890/)

---

# Code
```
impl Solution {
pub fn minimum_index(nums: Vec<i32>) -> i32 {
    use std::collections::HashMap;

    let f = nums.iter().copied().fold(HashMap::new(), |mut acc, v| {
        *acc.entry(v).or_insert(0) += 1;
        acc
    });
    let mut f1 = HashMap::new();
    let mut f2 = HashMap::new();

    for i in 0..nums.len() - 1 {
        *f1.entry(nums[i]).or_insert(0) += 1;
        *f2.entry(nums[i]).or_insert(0) = f[&nums[i]] - f1[&nums[i]];

        if f1[&nums[i]] * 2 > i + 1 && f2[&nums[i]] * 2 > nums.len() - i - 1 {
            return i as i32;
        }
    }

    -1
}
}
```