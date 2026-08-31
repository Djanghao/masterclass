# Rust Recursion (Simple).

**Author:** hmroy
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/701935/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/701935/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn count_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        if let Some(r) = root {
            return Solution::count_nodes(r.borrow().left.clone()) + 1 + Solution::count_nodes(r.borrow().right.clone());
        }
        else {
            return 0;
        } 
    }
}
```