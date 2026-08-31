# Rust: linear solution

**Author:** 16yuki0702
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/937879/](https://leetcode.com/problems/maximum-subarray/solutions/937879/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Maximum Subarray.
Memory Usage: 2.2 MB, less than 72.73% of Rust online submissions for Maximum Subarray.
```
impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let (mut cur, mut max) = (nums[0], nums[0]);
        for i in 1..nums.len() {
            cur = match cur < 0 {
                true => nums[i],
                _ => cur + nums[i]
            };
            max = max.max(cur);
        }
        max
    }
}
```