# Rust iterator solution | 19ms

**Author:** stevenylai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6132055/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6132055/)

---

# Intuition
We can first sort nums by value and index. After that, we iterate through the array while keeping track of the visited items.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    pub fn find_score(nums: Vec<i32>) -> i64 {
        let mut nums = nums
          .into_iter()
          .enumerate()
          .collect::<Vec<_>>();

        nums.sort_unstable_by_key(|&(i, n)| (n, i));
        let n = nums.len();

        let mut occur = vec![false; n];
        nums
          .into_iter()
          .fold(0_i64, |sum, (i, x)| {
            if occur[i] {
                sum
            } else {
                if i > 0 {
                    occur[i - 1] = true;
                }
                if i < n - 1 {
                    occur[i + 1] = true;
                }
                sum + x as i64
            }
          })
    }
}
```