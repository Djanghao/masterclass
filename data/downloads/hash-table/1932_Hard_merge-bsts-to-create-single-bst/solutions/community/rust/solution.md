# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/3239742/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/3239742/)

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
    pub fn can_merge(trees: Vec<Option<Rc<RefCell<TreeNode>>>>) -> Option<Rc<RefCell<TreeNode>>> {
        use std::collections::{HashMap, HashSet};
        fn add_leaf(
            r: Option<Rc<RefCell<TreeNode>>>,
            leaves: &mut Vec<Option<Rc<RefCell<TreeNode>>>>,
            roots: &mut HashMap<i32, Option<Rc<RefCell<TreeNode>>>>,
            unique_vals: &mut HashSet<i32>,
        ) {
            if r.is_some() {
                let val = r.as_ref().unwrap().borrow().val;
                unique_vals.insert(val);
                if roots.contains_key(&val) {
                    leaves.push(r);
                }
            }
        }

        fn valid_nodes(r: Option<Rc<RefCell<TreeNode>>>, min_left: i32, max_right: i32) -> usize {
            let val = r.as_ref().map(|r| r.borrow().val).unwrap_or(0);
            if r.is_none() || val <= min_left || val >= max_right {
                return 0;
            }
            let left = r.as_ref().unwrap().borrow().left.clone();
            let right = r.as_ref().unwrap().borrow().right.clone();
            let v_left = valid_nodes(left, min_left, val);
            let v_right = valid_nodes(right, val, max_right);
            1 + v_left + v_right
        }

        let mut unique_vals = HashSet::new();
        let mut roots = HashMap::new();
        let mut leaves = Vec::new();
        for t in trees.iter() {
            let val = t.as_ref()?.borrow().val;
            roots.insert(val, t.clone());
        }
        for t in trees.iter() {
            let val = t.as_ref()?.borrow().val;
            let left = t.as_ref()?.borrow().left.clone();
            let right = t.as_ref()?.borrow().right.clone();
            unique_vals.insert(val);
            add_leaf(left, &mut leaves, &mut roots, &mut unique_vals);
            add_leaf(right, &mut leaves, &mut roots, &mut unique_vals);
        }
        for leaf in leaves {
            let val = leaf.as_ref()?.borrow().val;
            let root = roots.get_mut(&val)?;
            leaf.as_ref()?.borrow_mut().left = root.as_ref()?.borrow().left.clone();
            leaf.as_ref()?.borrow_mut().right = root.as_ref()?.borrow().right.clone();
            roots.remove(&val);
        }
        let first_node = roots.values().next().cloned()?;
        if roots.len() == 1 && valid_nodes(first_node.clone(), std::i32::MIN, std::i32::MAX) == unique_vals.len() {
            first_node
        } else {
            None
        }
    }
}
```