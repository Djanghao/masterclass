# [Rust] DFS Solution | 0 ms | 2.2 mb

**Author:** youmin1017
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/2424158/](https://leetcode.com/problems/sum-of-left-leaves/solutions/2424158/)

---

```rust
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn sum_of_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        Solution::helper(root.as_ref(), false)
    }
    
    pub fn helper(root: Option<&Rc<RefCell<TreeNode>>>, is_left: bool) -> i32 {
        match root {
            Some(root) => {
                let node = root.borrow();
                if is_left
                   && node.left.is_none()
                   && node.right.is_none() {
                    return node.val;
                }
                Solution::helper(node.left.as_ref(), true)
                + Solution::helper(node.right.as_ref(), false)
            },
            None => 0,
        }
    }
}
```