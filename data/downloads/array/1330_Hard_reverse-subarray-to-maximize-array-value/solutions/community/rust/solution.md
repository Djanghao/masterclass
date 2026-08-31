# Rust solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5382032/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5382032/)

---

# Intuition
There can be 3 cases of reversing:
1. Reverse `nums[..=i]` (a prefix):
If `abs(nums[0] - nums[i + 1]) > abs(nums[i] - nums[i + 1])`, the **value** can be increased by `abs(nums[0] - nums[i])`.

2. Reverse `nums[i..]` (a suffix):
Similar logic to 1.

3. Reverse `nums[i..=j]`:
Consider the 2 pairs `x = (nums[i - 1], nums[i])` and `y = (nums[j], nums[j + 1])`.
If `min(y) - max(x) > 0`, the **value** can be increased by `(min(y) - max(x)) * 2`. And vice versa for `min(x) - max(y)`.

So the Approach here is find the possible best `i` or `j` for all 3 cases.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn max_value_after_reverse(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            return 0;
        }
        let n = nums.len();
        let mut lo_max = i32::MAX;
        let mut hi_min = i32::MIN;
        let mut value = 0;
        let mut best_l = 0;
        let mut best_r = 0;
        for (a, b) in nums.windows(2).map(|w| (w[0], w[1])) {
            let diff = a.abs_diff(b) as i32;
            value += diff;
            lo_max = lo_max.min(a.max(b));
            hi_min = hi_min.max(a.min(b));
            best_l = best_l.max(nums[0].abs_diff(b) as i32 - diff);
            best_r = best_r.max(nums[n - 1].abs_diff(a) as i32 - diff);
        }
        value + best_l.max(best_r).max((hi_min - lo_max) * 2)
    }
}
```