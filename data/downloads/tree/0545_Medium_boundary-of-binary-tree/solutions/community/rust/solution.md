# Rust Recursion

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/2753509/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/2753509/)

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
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn boundary_of_binary_tree(root: OptNode) -> Vec<i32> {
        let node = root.as_ref().unwrap().borrow();
        let mut ret = vec![node.val];
        
        if node.left.is_some() {
            Self::collect_left(&node.left, &mut ret);
            Self::collect_leaves(&node.left, &mut ret);
        }
        
        if node.right.is_some() {
            Self::collect_leaves(&node.right, &mut ret);
            
            let mut data = vec![];
            Self::collect_right(&node.right, &mut data);
            
            while let Some(a) = data.pop() { ret.push(a); }
        }
        
        ret
    }
    
    fn collect_right(root: &OptNode, ret: &mut Vec<i32>) {
        let node = root.as_ref().unwrap().borrow();
        if node.left.is_none() && node.right.is_none() { return }
        
        ret.push(node.val);
        if node.right.is_some() { Self::collect_right(&node.right, ret); }
        else                    { Self::collect_right(&node.left, ret); }
    }
    
    fn collect_leaves(root: &OptNode, ret: &mut Vec<i32>) {
        let node = root.as_ref().unwrap().borrow();
        
        if node.left.is_none() && node.right.is_none() { ret.push(node.val); }
        if node.left.is_some()   { Self::collect_leaves(&node.left, ret); }
        if node.right.is_some()  { Self::collect_leaves(&node.right, ret); }
    }
    
    fn collect_left(root: &OptNode, ret: &mut Vec<i32>) {
        let node = root.as_ref().unwrap().borrow();
        
        if node.left.is_none() && node.right.is_none() { return }
        
        ret.push(node.val);
        
        if node.left.is_some() { Self::collect_left(&node.left, ret); }
        else                   { Self::collect_left(&node.right, ret); }
    }
}
```