# Rust

**Author:** Mee_CI
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/3554952/](https://leetcode.com/problems/binary-tree-paths/solutions/3554952/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
    pub fn binary_tree_paths(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<String> {
        let mut res: Vec<Vec<i32>> = vec![];
        let mut ans = vec![];
        let mut stack: Vec<(Vec<i32>, Option<Rc<RefCell<TreeNode>>>)> = Vec::new();
        if root.is_none(){
            return vec!["".to_string()];
        }
        stack.push((vec![root.clone().unwrap().borrow().val], (root.clone())));
        while let Some((vec, Some(node))) = stack.pop() {
            let n = node.borrow();
            if n.left.is_none() && n.right.is_none() {
                res.push(vec.clone());
            }
            if let Some(l) = n.left.clone() {
                let mut v = vec.clone();
                v.push(l.borrow().val);
                stack.push((v, Some(l)));
            }
            if let Some(r) = n.right.clone() {
                let mut v = vec.clone();
                v.push(r.borrow().val);
                stack.push((v, Some(r)));
            }
        }
        for r in res.into_iter(){
            ans.push(r.into_iter().map(|f| f.to_string()).collect::<Vec<String>>().join("->"));
        }
        ans
    }
}
```