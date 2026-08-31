# Rust Recursion

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3095779/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3095779/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
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
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn sufficient_subset(root: OptNode, limit: i32) -> OptNode {
        let mut root = root;
        if Self::update(&mut root, 0, limit) < limit { None } else { root }
    }
    
    fn update(root: &mut OptNode, sum: i32, limit: i32) -> i32 {
        let mut node = root.as_ref().unwrap().borrow_mut();
        let (mut left, mut right) = (false, false);
        if node.left.is_some() { left = true; }
        if node.right.is_some() { right = true; }
        
        if left == false && right == false { return sum + node.val }
        
        let mut ret = i32::MIN;
        let val = node.val;
        if left {
            let t = Self::update(&mut node.left, sum + val, limit);
            if t < limit { node.left = None; }
            ret = ret.max(t);
        }
        if right {
            let t = Self::update(&mut node.right, sum + val, limit);
            if t < limit { node.right = None; }
            ret = ret.max(t);
        } 
        
        ret
    }
}
```