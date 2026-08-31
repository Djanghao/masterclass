# Rust Solution

**Author:** user0036N
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/5213462/](https://leetcode.com/problems/binary-tree-upside-down/solutions/5213462/)

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
    pub fn upside_down_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut root_stack = vec![];
        let mut cursor = root.clone();
        while let Some(cval) = cursor {
            root_stack.push(cval.clone());
            cursor = cval.borrow().left.clone();
        }
        let mut new_root: Option<Rc<RefCell<TreeNode>>> = None;
        let mut cursor_root: Option<Rc<RefCell<TreeNode>>> = None;
        while let Some(mut sval) = root_stack.pop() {
            if let Some(mut cval) = cursor_root.take() {
                cval.borrow_mut().left = sval.borrow_mut().right.take();
                cval.borrow_mut().right = Some(sval.clone());
                if root_stack.is_empty() {
                    sval.borrow_mut().left = None;
                    sval.borrow_mut().right = None;
                }
                cursor_root = Some(sval.clone());
            } else {
                new_root = Some(sval.clone());
                cursor_root = Some(sval.clone());
            }
        }
        new_root
    }
}
```