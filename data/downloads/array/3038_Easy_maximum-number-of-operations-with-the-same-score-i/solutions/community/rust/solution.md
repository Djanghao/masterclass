# chunks

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5826120/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5826120/)

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
```rust []
impl Solution {
  pub fn max_operations(nums: Vec<i32>) -> i32 {
    let mut count = 0;
    let mut prev_sum = -1;

    for chunk in nums.chunks(2) {  // TIL: chunk - takes 2 items at a time
      if chunk.len() == 2 {
        let sum = chunk[0] + chunk[1];
        if prev_sum >= 0 {
          if sum!=prev_sum { return count }
        }
        prev_sum = sum;
        count += 1;
      }
    }

    count
  }
}
```