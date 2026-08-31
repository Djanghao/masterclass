# inefficient

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5728773/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5728773/)

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
  pub fn number_of_points(nums: Vec<Vec<i32>>) -> i32 {
    // get max end
    let mut range:Vec<bool> = vec![false;101];
    let mut res = 0;
    for car in nums {
      for idx in car[0]..=car[1] {
        if !range[idx as usize] {
          range[idx as usize] = true;
          res += 1;
        }
      }
    }
    res
  }
}
```