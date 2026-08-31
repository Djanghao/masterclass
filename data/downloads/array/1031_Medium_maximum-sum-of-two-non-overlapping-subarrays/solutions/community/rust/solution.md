# Rust implementation

**Author:** amithapa
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3226492/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3226492/)

---

# Approach
- We create a prefix sum vector storing the sum so we don't recompute the sum and we can derive a sum of an index range by subracting the prefix sum whenever we need.
- We calculate the sum of subarray by first computing the first window + second window and the by computing the second window + first window. And take the max of them.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
pub fn max_sum(prefix_sum: &[i32], first_len: usize, second_len: usize) -> i32 {
    let mut ans = 0;
    let mut max_low = 0;

    let start_index = (first_len + second_len) as usize;

    for i in start_index..prefix_sum.len() {
        max_low = max_low.max(prefix_sum[i - second_len] - prefix_sum[i - first_len - second_len]);
        ans = ans.max(max_low + prefix_sum[i] - prefix_sum[i - second_len]);
    }

    ans
}

impl Solution {
    pub fn max_sum_two_no_overlap(nums: Vec<i32>, first_len: i32, second_len: i32) -> i32 {
        let n = nums.len();
        let first_len = first_len as usize;
        let second_len = second_len as usize;

        let mut prefix: Vec<i32> = vec![0; n + 1];

        for (i, &num) in nums.iter().enumerate() {
            prefix[i + 1] = prefix[i] + num;
        }

        max_sum(&prefix, first_len, second_len).max(max_sum(&prefix, second_len, first_len))
    }
}
```