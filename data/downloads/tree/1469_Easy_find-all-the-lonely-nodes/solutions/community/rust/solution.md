# Recursive Solution

**Author:** forcewithlease
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5792453/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5792453/)

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
```rust []
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
use std::vec::Vec;
type Node = Rc<RefCell<TreeNode>>;
impl Solution {
    pub fn get_lonely_nodes(root: Option<Node>) -> Vec<i32> {
        let mut res: Vec<i32> = Vec::with_capacity(1000);
        Self::traverse(root, &mut res);
        res
    }

    fn traverse(node: Option<Node>, res: &mut Vec<i32>) {
        if node.is_none() {
            return
        }

        let curr = node.unwrap();
        let curr = curr.borrow();
        match (curr.left.clone(), curr.right.clone()) {
            ((Some(c), None) | (None, Some(c))) => {
                res.push(c.borrow().val);
                Self::traverse(Some(c), res);
            },
            (Some(left), Some(right)) => {
                Self::traverse(Some(left), res);
                Self::traverse(Some(right), res);
            },
            _ => return
        }
    }
}
```