# Depth-First Search

**Author:** AzizKAZ
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168607/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168607/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Depth-First Search

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the number of the nodes of the $root$ tree

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
    pub fn remove_leaf_nodes(root: Option<Rc<RefCell<TreeNode>>>, target: i32) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(mut r) = root {
            let mut rn = r.borrow_mut();

            rn.left = Self::remove_leaf_nodes(rn.left.take(), target);
            rn.right = Self::remove_leaf_nodes(rn.right.take(), target);

            if rn.left.is_none() && rn.right.is_none() && rn.val == target {
                return None;
            }

            return Some(r.clone());
        }

        None          
    }
}
```