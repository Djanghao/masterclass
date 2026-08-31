# Rust non-recursive solution

**Author:** williamcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3636441/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3636441/)

---


```
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
    pub fn get_minimum_difference(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut res = i32::MAX;
        let mut stack = vec![];
        let mut curr = root;
        let mut pre = -1;

        while !stack.is_empty() || curr.is_some() {
            while let Some(node) = curr {
                curr = node.borrow().left.clone();
                stack.push(node);
            }

            let node = stack.pop().unwrap();
            if pre >= 0 {
                res = res.min(node.borrow().val - pre);
            }
            pre = node.borrow().val;

            curr = node.borrow().right.clone();
        }

        res
    }
}
```