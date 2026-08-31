# Rust - Recursive Solution

**Author:** nuclearoreo
**Votes:** 1
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1047339/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1047339/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn trim_bst(root: Option<Rc<RefCell<TreeNode>>>, low: i32, high: i32) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(node_ref) = root {
            let mut node = node_ref.borrow_mut();
            if node.val > high {
                return Self::trim_bst(node.left.clone(), low, high);
            } else if node.val < low {
                return Self::trim_bst(node.right.clone(), low, high);
            }
            node.left = Self::trim_bst(node.left.clone(), low, high);
            node.right = Self::trim_bst(node.right.clone(), low, high);
            Some(node_ref.clone())
        } else {
            None
        }
    }
}
```