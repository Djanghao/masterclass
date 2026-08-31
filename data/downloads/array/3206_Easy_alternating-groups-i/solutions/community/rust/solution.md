# extend vec

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5897648/](https://leetcode.com/problems/alternating-groups-i/solutions/5897648/)

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
  pub fn number_of_alternating_groups(colors: Vec<i32>) -> i32 {
    let mut colors_extended:Vec<i32> = colors.clone();
    colors_extended.push(colors[0]);
    colors_extended.push(colors[1]);
    let mut n = colors_extended.len();
    let mut res = 0;
    for i in 0..n-2 {
      if colors_extended[i] != colors_extended[i+1] && colors_extended[i+2] != colors_extended[i+1] {
        res+=1;
      }
    }
    res
  }
}
```