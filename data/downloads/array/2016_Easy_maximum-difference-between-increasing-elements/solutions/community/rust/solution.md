# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1492046/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1492046/)

---

```
impl Solution {
    pub fn maximum_difference(nums: Vec<i32>) -> i32 {
        let mut diff = -1;
        let (mut max, mut min) = (nums[0], nums[0]);
        for &val in nums[1..].iter() {
            if val < min {
                min = val;
                max = val;
            } else if val > max {
                max = val;
                diff = diff.max(max - min);
            }
        }
        diff
    }
}
```