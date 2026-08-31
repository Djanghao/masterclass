# sort

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5826422/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5826422/)

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
  pub fn minimum_boxes(apple: Vec<i32>, capacity: Vec<i32>) -> i32 {
    // sort capacities
    let mut capacity = capacity;
    capacity.sort_by(|a,b| b.cmp(a));
    let mut tot_apples:i32 = apple.iter().sum();
    for i in 0..capacity.len() {

      if tot_apples <= 0 { return i as i32 }
      tot_apples-=capacity[i];
    }
    capacity.len() as i32
  }
}
```