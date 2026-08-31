# Rust: Concise Recursive

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/2777561/](https://leetcode.com/problems/count-univalue-subtrees/solutions/2777561/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) checking & calculating return values on both left child and right child;
2) If both children (even if they are null) are univalued, is current node also uni-valued?    
# Approach
<!-- Describe your approach to solving the problem. -->
DFS postorder traversal
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

impl Solution {
    pub fn count_unival_subtrees(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut ret = 0;
        
        Self::count(&root, &mut ret);
        
        ret
    }
    
    fn count(root: &Option<Rc<RefCell<TreeNode>>>, ret: &mut i32) -> bool {
        if root.is_none() { return true }
        
        let node = root.as_ref().unwrap().borrow();
        
        let mut flag = Self::count(&node.left, ret);
        if Self::count(&node.right, ret) == false { flag = false }
        
        if node.left.is_some() && node.val  != node.left.as_ref().unwrap().borrow().val  { flag = false }
        if node.right.is_some() && node.val != node.right.as_ref().unwrap().borrow().val { flag = false }
        
        if flag { *ret += 1; }
        
        flag
    }
}
```