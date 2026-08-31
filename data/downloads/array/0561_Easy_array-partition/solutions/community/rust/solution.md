# Rust 3 lines

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/array-partition/solutions/246648/](https://leetcode.com/problems/array-partition/solutions/246648/)

---

```
impl Solution {
    pub fn array_pair_sum(nums: Vec<i32>) -> i32 {
        let mut nums_v = nums;
        nums_v.sort_unstable();
        nums_v.iter().step_by(2).sum()
    }
}
```