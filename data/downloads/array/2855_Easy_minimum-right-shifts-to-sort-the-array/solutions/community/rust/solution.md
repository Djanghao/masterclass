# tricky

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5728813/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5728813/)

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
  pub fn minimum_right_shifts(nums: Vec<i32>) -> i32 {
    // check for -1
    let mn = *nums.iter().min().unwrap();
    let mut start = nums.iter().position(|&x| x == mn).unwrap();
    let n = nums.len();
    let mut prev = mn-1;
    for i in 0..n {
        let idx = (i+start)%n;
        if nums[idx] < prev { return -1 }

        prev = nums[idx];
    }
    if start == 0 { return 0 }
    (n-start) as i32
  }
}
```