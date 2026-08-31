# Rust Solution using Greedy

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/3949573/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/3949573/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn catch_maximum_amountof_people(team: Vec<i32>, dist: i32) -> i32 {
    let dist = dist as usize;
    let n = team.len();
    let mut zeros: VecDeque<usize> = VecDeque::new();
    let mut ones: VecDeque<usize> = VecDeque::new();

    let mut result = 0;
    for i in 0..n {
      if team[i] == 1 {
        if let Some(_) = zeros.pop_front() {
          result += 1;
        } else {
          ones.push_back(i);
        }
      } else {
        if let Some(_) = ones.pop_front() {
          result += 1;
        } else {
          zeros.push_back(i);
        }
      }

      if dist < zeros.len() + ones.len() {
        let zero_val = if let Some(&zero_val) = zeros.get(0) {
          zero_val
        } else {
          1_000_000_000
        };

        let one_val = if let Some(&one_val) = ones.get(0) {
          one_val
        } else {
          1_000_000_000
        };

        if zero_val < one_val {
          zeros.pop_front();
        } else {
          ones.pop_front();
        }
      }
    }
    result
  }
}
```