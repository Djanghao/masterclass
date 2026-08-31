# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3852573/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3852573/)

---

# Code
```
impl Solution {
    pub fn find_value_of_partition(mut nums: Vec<i32>) -> i32 {
        nums.sort();
        let mut ans = i32::MAX;
        for i in (1..nums.len()).rev() {
            ans = ans.min((nums[i - 1] - nums[i]).abs());
        }
        ans
    }
}
```