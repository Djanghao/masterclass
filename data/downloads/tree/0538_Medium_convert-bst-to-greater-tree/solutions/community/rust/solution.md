# Rust 0ms 🔥 3.06Mb ☄️ One Function Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/5475968/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/5475968/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    pub fn convert_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn solve(root: Option<Rc<RefCell<TreeNode>>>, mut x: i32) -> (Option<Rc<RefCell<TreeNode>>>, i32) {
            if let Some(n) = root {
                let mut node = n.borrow_mut();
        
                let (right, x) = solve(node.right.take(), x);
                node.right = right;
                
                let x = x + node.val;
                node.val = x;
                
                let (left, x) = solve(node.left.take(), x);
                node.left = left;

                drop(node);
                (Some(n), x)
            } else {(None, x)}
        }
        solve(root, 0).0
    }
}
```