# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/2965755/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/2965755/)

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
    pub fn subtree_with_all_deepest(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn dfs(node: Option<Rc<RefCell<TreeNode>>>) -> Option<(Option<Rc<RefCell<TreeNode>>>, i32)> {
            if node.is_none() {
                return Some((node, -1));
            }
            if node.as_ref()?.borrow().left.is_none() && node.as_ref()?.borrow().right.is_none() {
                return Some((node, 0));
            }

            let (right, depth_right_subtree) = dfs(node.as_ref()?.borrow().right.clone())?;
            let (left, depth_left_subtree) = dfs(node.as_ref()?.borrow().left.clone())?;

            let depth_right_subtree = depth_right_subtree + 1;
            let depth_left_subtree = depth_left_subtree + 1;

            match depth_left_subtree.cmp(&depth_right_subtree) {
                std::cmp::Ordering::Equal => Some((node, depth_right_subtree)),
                std::cmp::Ordering::Greater => Some((left, depth_left_subtree)),
                std::cmp::Ordering::Less => Some((right, depth_right_subtree)),
            }
        }

        if root.is_none() {
            return root;
        }
        if root.as_ref()?.borrow().left.is_none() && root.as_ref()?.borrow().right.is_none() {
            return root;
        }

        let (right, depth_right_subtree) = dfs(root.as_ref()?.borrow().right.clone())?;
        let (left, depth_left_subtree) = dfs(root.as_ref()?.borrow().left.clone())?;

        let depth_right_subtree = depth_right_subtree + 1;
        let depth_left_subtree = depth_left_subtree + 1;

        match depth_left_subtree.cmp(&depth_right_subtree) {
            std::cmp::Ordering::Equal => root,
            std::cmp::Ordering::Greater => left,
            std::cmp::Ordering::Less => right,
        }
    }
}
```