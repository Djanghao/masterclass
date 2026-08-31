# Rust solution

**Author:** sugyan
**Votes:** 7
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/881890/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/881890/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn insert_into_bst(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
        Some(match root {
            None => Rc::new(RefCell::new(TreeNode::new(val))),
            Some(r) => {
                if r.borrow().val > val {
                    let node = Solution::insert_into_bst(r.borrow().left.clone(), val);
                    r.borrow_mut().left = node;
                } else {
                    let node = Solution::insert_into_bst(r.borrow().right.clone(), val);
                    r.borrow_mut().right = node
                }
                r
            }
        })
    }
}
```