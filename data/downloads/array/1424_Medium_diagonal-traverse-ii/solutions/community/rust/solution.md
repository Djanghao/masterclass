# Rust: queue

**Author:** natekot
**Votes:** 4
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315328/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315328/)

---

```
use std::collections::VecDeque;
  
impl Solution {
  pub fn find_diagonal_order(nums: Vec<Vec<i32>>) -> Vec<i32> {
    
    let n = nums.len();
    let mut q = VecDeque::new();
    let mut ans = vec![];
  
    q.push_back((0, 0));
  
    while let Some((i, j)) = q.pop_front() {
  
      ans.push(nums[i][j]);
  
      if j == 0 && i + 1 < n {
        q.push_back((i + 1, j));
      }
  
      if j + 1 < nums[i].len() {
        q.push_back((i, j + 1));
      }
    }
  
    ans
  }
}
```