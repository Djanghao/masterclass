# Rust + DFS + Backtrace

**Author:** unknown-
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747967/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747967/)

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

type Node = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn distance_k(root: Option<Rc<RefCell<TreeNode>>>, target: Option<Rc<RefCell<TreeNode>>>, k: i32) -> Vec<i32> {
        let mut path = vec![root.clone()];
        let mut ret = vec![];
        Self::dfs(&root, target.unwrap().borrow().val, k, &mut path, &mut ret);
        ret
    }

    fn dfs(root: &Node, target: i32, k: i32, path: &mut Vec<Node>, ret: &mut Vec<i32>) {
        if let Some(root) = root {
            let root = root.borrow();
            if root.val == target {
                let mut used = vec![false; 501];
                for i in (0..=k).rev() {
                    if let Some(root) = path.pop() {
                        Self::backtrace(&root, i, ret, &mut used);
                    }
                }
                return;
            }

            let left = &root.left;
            path.push(left.clone());
            Self::dfs(left, target, k, path, ret);
            path.pop();

            let right = &root.right;
            path.push(right.clone());
            Self::dfs(right, target, k, path, ret);
            path.pop();
        }
    }

    fn backtrace(root: &Node, k: i32, ret: &mut Vec<i32>, used: &mut [bool]) {
        if let Some(root) = root {
            let root = root.borrow();
            if used[root.val as usize] {
                return;
            }
            used[root.val as usize] = true;

            if k == 0 {
                ret.push(root.val);
                return;
            }

            Self::backtrace(&root.left, k - 1, ret, used);
            Self::backtrace(&root.right, k - 1, ret, used);
        }
    }
}
```