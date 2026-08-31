# Rust Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6056853/](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6056853/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the minimum difference between adjacent values in an array while possibly replacing `-1` entries with values from adjacent elements. The key idea is to minimize the maximum difference between adjacent values, possibly taking advantage of the `-1` values as flexible placeholders.

- First, we need to find the largest difference between adjacent positive values, `max_adj`.
- Then, we need to find the smallest and largest values around the `-1` entries (treated as gaps). We want to replace `-1` values in such a way that the differences between adjacent numbers are minimized.

# Approach
<!-- Describe your approach to solving the problem. -->
 1. **Initial Pass**:
   - Traverse the array to identify the largest absolute difference between consecutive positive integers (`max_adj`).
   - Track the smallest (`mina`) and largest (`maxb`) positive numbers that are adjacent to a `-1`. This helps us understand how to fill in gaps caused by `-1`s.
   
2. **Second Pass (Gap Handling)**:
   - Traverse the array again to handle sequences of `-1` values. For each such sequence:
     - Identify the values before and after the gap (if they exist).
     - Attempt to minimize the maximum difference that would result from replacing the `-1` values with those before and after the gap.
   
3. **Final Result**:
   - The final result will be the larger of `max_adj` (the largest difference found in the first pass) or half of the calculated result from handling the gaps.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn min_difference(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut max_adj = 0;
        let mut mina = i32::MAX;
        let mut maxb = i32::MIN;

        // First pass: find max_adj, mina, maxb
        for i in 0..(n - 1) {
            let a = nums[i];
            let b = nums[i + 1];
            if a > 0 && b > 0 {
                max_adj = max_adj.max((a - b).abs());
            } else if a > 0 || b > 0 {
                mina = mina.min(a.max(b));
                maxb = maxb.max(a.max(b));
            }
        }

        let mut res = 0;

        // Second pass: check gaps between -1's and find the maximum result
        let mut i = 0;
        while i < n {
            if (i > 0 && nums[i - 1] == -1) || nums[i] > 0 {
                i += 1;
                continue;
            }

            let mut j = i;
            while j < n && nums[j] == -1 {
                j += 1;
            }

            let mut a = i32::MAX;
            let mut b = i32::MIN;

            if i > 0 {
                a = a.min(nums[i - 1]);
                b = b.max(nums[i - 1]);
            }
            if j < n {
                a = a.min(nums[j]);
                b = b.max(nums[j]);
            }

            if a <= b {
                if j - i == 1 {
                    res = res.max((maxb - a).min(b - mina));
                } else {
                    res = res.max((maxb - a).min(b - mina).min((maxb - mina + 2) / 3 * 2));
                }
            }

            i = j;
        }

        max_adj.max((res + 1) / 2)
    }
}

```