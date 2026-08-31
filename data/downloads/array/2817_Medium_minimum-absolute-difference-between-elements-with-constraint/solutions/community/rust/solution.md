# Rust BTreeSet solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3905373/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3905373/)

---

# Code
```
impl Solution {
    pub fn min_absolute_difference(nums: Vec<i32>, x: i32) -> i32 {
        use std::collections::BTreeSet;
        let mut set = BTreeSet::new();
        let mut ans = i32::MAX;
        for j in x as usize..nums.len() {
            set.insert(nums[j - x as usize]);
            if let Some(&left) = set.range(..=nums[j]).last() {
                ans = ans.min((nums[j] - left).abs());
            }
            if let Some(&right) = set.range(nums[j]..).take(1).find(|_| true) {
                ans = ans.min((nums[j] - right).abs());
            }
        }
        ans
    }
}
```