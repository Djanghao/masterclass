# Rust recursive 100%

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/3198880/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/3198880/)

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
impl Solution {
    pub fn insert_into_max_tree(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
            if let Some(r) = root.clone() {
                let mut r = r.borrow_mut();
                if r.val > val {
                    r.right = dfs(r.right.clone(), val);
                    root
                } else {
                    Some(Rc::new(RefCell::new(TreeNode {
                        val,
                        left: root,
                        right: None,
                    })))
                }
            } else {
                Some(Rc::new(RefCell::new(TreeNode {
                    val,
                    left: None,
                    right: None,
                })))
            }
        }
        dfs(root, val)   
    }
}
```