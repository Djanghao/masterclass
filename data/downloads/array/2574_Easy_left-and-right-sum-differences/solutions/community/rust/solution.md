# Space-Optimized Rust Solution

**Author:** TylerBloom
**Votes:** 2
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3234374/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3234374/)

---

# Intuition
There is no need to calculate and store`leftSum`and`rightSum`. We can calculate them on the fly simply by calculating the sum of`nums`.
Also, since we are given ownership of`nums`, we can modify`nums`in-place to avoid a second allocation for our final answer.

# Approach
We scan through`nums`twice, once to calculate it sum and again to get our final answer.
In order to calculate the left sum during the second scan, we need a buffer, contains the last element we iterated over.

# Complexity
- Time complexity:
    $$O(n)$$

- Space complexity:
    Not counting`nums`: $$O(1)$$
    Counting`nums`: $$O(n)$$

# Code
```
impl Solution {
    pub fn left_rigth_difference(mut nums: Vec<i32>) -> Vec<i32> {
        let mut left = 0;
        let mut right: i32 = nums.iter().sum();
        let mut buf = 0;
        nums
            .iter_mut()
            .for_each(|i| {
                right -= *i;
                left += buf;
                buf = *i;
                *i = (left - right).abs();
            });
        nums
    }
}
```