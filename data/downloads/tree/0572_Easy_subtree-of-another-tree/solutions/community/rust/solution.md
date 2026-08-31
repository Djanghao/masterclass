# Rust 4ms | 2.3

**Author:** astroex
**Votes:** 3
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/1676378/](https://leetcode.com/problems/subtree-of-another-tree/solutions/1676378/)

---

Runtime: 4 ms, faster than 100.00% of Rust online submissions for Subtree of Another Tree.
Memory Usage: 2.3 MB, less than 45.45% of Rust online submissions for Subtree of Another Tree.
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn is_subtree(root: Option<Rc<RefCell<TreeNode>>>, sub_root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        
        if root == sub_root {return true}        
        if let Some(node) = root { 
            let node = node.borrow();
            Self::is_subtree(node.left.clone(), sub_root.clone()) || 
            Self::is_subtree(node.right.clone(), sub_root.clone())
        } else { 
            return false    
        }
    }
}
```