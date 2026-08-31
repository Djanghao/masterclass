# simple rust pattern matching

**Author:** sym233
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-sum/solutions/2901105/](https://leetcode.com/problems/path-sum/solutions/2901105/)

---

# Intuition
simple problem. trying to write it gracefully. not sure if it can unwrap `Rc<RefCell<T>>` in a better way

# Approach
recurisve dfs

# Code
```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> bool {
        root.map_or(false, |root| {
            match &*root.borrow() {
                &TreeNode {val, left: None, right: None} => val == target_sum,
                &TreeNode {val, ref left, ref right} => 
                    Self::has_path_sum(left.clone(), target_sum - val) || Self::has_path_sum(right.clone(), target_sum - val),
            }
        })
    }
}
```