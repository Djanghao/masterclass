# Concise solution with Approach 2: Using BST properties (careful with reassigning left/right to node)

**Author:** FumiyaShibusawa
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/3552950/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/3552950/)

---

# Intuition
This is a Rust solution with approach 2 by reassigning current node to its left/right node until it finds `p`.

Be careful with its reassiging part since it easily gets many compile errors if you try to iterate loops with a mutable reference to `root` (e.g. `current = &mut root`) like you sometimes would use in other Linked List problems or similar ones.

Simply you can swap nodes by cosuming current with `unwrap()` and reassigning its left/right into `current`.

# Code
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
    pub fn inorder_successor(
        mut root: Option<Rc<RefCell<TreeNode>>>,
        p: Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        let mut successor: Option<Rc<RefCell<TreeNode>>> = None;
        let mut current = root;
        let p_val = p.as_ref().unwrap().borrow().val;
        while current.is_some() {
            if p_val >= current.as_ref().unwrap().borrow().val {
                current = current.unwrap().borrow().right.clone();
            } else {
                successor = current.clone();
                current = current.unwrap().borrow().left.clone();
            }
        }

        successor
    }
}
```


