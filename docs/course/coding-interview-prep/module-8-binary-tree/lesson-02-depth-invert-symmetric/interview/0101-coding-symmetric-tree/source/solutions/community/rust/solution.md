# rust recursive dfs

**Author:** bayle
**Votes:** 6
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/2911945/](https://leetcode.com/problems/symmetric-tree/solutions/2911945/)

---

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
type Node = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        Self::dfs(&root, &root)
    }
    
    fn dfs(n1: &Node, n2: &Node) -> bool {
        match (n1, n2) {
            (Some(n1), Some(n2)) => {
                n1.borrow().val == n2.borrow().val &&
                Self::dfs(&n1.borrow().left, &n2.borrow().right) &&
                Self::dfs(&n1.borrow().right, &n2.borrow().left)
            },
            (None, None) => true,
            (_, _) => false,
        }
    }
}
```