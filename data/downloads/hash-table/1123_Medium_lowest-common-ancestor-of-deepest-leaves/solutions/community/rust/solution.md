# Rust 1ms 🔥 2.14Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/5557454/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/5557454/)

---

# Complexity
- Time complexity:  $$O(n)$$
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
    pub fn lca_deepest_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn depth(root: &Option<Rc<RefCell<TreeNode>>>, d: usize) -> usize {
            if let Some(n) = root {
                let n = n.borrow();
                depth(&n.left, d+1).max(depth(&n.right, d+1))
            } else {d-1}
        }
        fn lca(root: &Option<Rc<RefCell<TreeNode>>>, d: usize, max: usize) -> Option<Rc<RefCell<TreeNode>>> {
            if let Some(node) = root {
                if d == max {return Some(node.clone());}
                let mut n = node.borrow();
                let left = lca(&n.left, d+1, max);
                let right = lca(&n.right, d+1, max);

                match (left.is_some(), right.is_some()) {
                    (true, true) => {drop(n); Some(node.clone())},
                    (true, false) => left,
                    (false, true) => right,
                    (false, false) => None,
                }
            } else {None}
        }
        lca(&root, 0, depth(&root, 0))
    }
}
```