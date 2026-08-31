# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3204052/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3204052/)

---

# Code
```
impl Solution {
    pub fn minimize_sum(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let n = nums.len();
        let mut min = nums[n - 1] - nums[2];
        let v = nums[n - 3] - nums[0];
        let v2 = nums[n - 2] - nums[1];
        min = min.min(v);
        min = min.min(v2);
        min
    }
}
```