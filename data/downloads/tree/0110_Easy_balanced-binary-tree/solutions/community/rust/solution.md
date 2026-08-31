# Rust: DFS solution

**Author:** 16yuki0702
**Votes:** 5
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/984240/](https://leetcode.com/problems/balanced-binary-tree/solutions/984240/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Balanced Binary Tree.
Memory Usage: 2.9 MB, less than 40.00% of Rust online submissions for Balanced Binary Tree.
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
    pub fn is_balanced(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
            match root {
                Some(root) => {
                    let left = dfs(root.borrow().left.clone());
                    let right = dfs(root.borrow().right.clone());
                    if (left-right).abs() > 1 || left == -1 || right == -1 {
                        return -1
                    }
                    left.max(right) + 1
                }
                None => 0
            }
        }
        dfs(root) != -1
    }
}
```