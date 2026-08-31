# [Rust] O(h+k) minimalist iterative solution with explanations. (0ms, faster than 100%.)

**Author:** marccarre
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/641848/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/641848/)

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
    pub fn kth_smallest(mut node_opt: Option<Rc<RefCell<TreeNode>>>, mut k: i32) -> i32 {
        let mut nodes = Vec::new();
        while node_opt.is_some() || !nodes.is_empty() {
            // Go to the smallest (i.e. left-most) node:
            while let Some(node) = node_opt {
                nodes.push(node.clone());
                node_opt = node.borrow().left.clone();
            }
            if let Some(node) = nodes.pop() { // nodes contains Rc<RefCell<TreeNode>>s but pop returns Option<T>.
                // Check the current smallest node:
                k -= 1;
                if k == 0 {
                    return node.borrow().val;
                }
                // Check the right sub-tree:
                node_opt = node.borrow().right.clone();    
            }
        }
        unreachable!();
    }
}
```