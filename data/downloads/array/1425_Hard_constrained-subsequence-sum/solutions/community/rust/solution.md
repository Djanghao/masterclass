# RUST_Daily Question: constrained_subset_sum

**Author:** clementj
**Votes:** 0
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4199006/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4199006/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn constrained_subset_sum(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut dp = nums.clone();
        let mut deque = VecDeque::new();
        let mut result = nums[0];

        for i in 0..nums.len() {
            if let Some(&j) = deque.front() {
                dp[i] += dp[j];
            }
            while deque.back().map_or(false, |&j| dp[j] < dp[i]) {
                deque.pop_back();
            }
            if dp[i] > 0 {
                deque.push_back(i);
            }
            if i >= k && deque.front().map_or(false, |&j| i - j >= k) {
                deque.pop_front();
            }
            result = result.max(dp[i]);
        }

        result
    }
}
```