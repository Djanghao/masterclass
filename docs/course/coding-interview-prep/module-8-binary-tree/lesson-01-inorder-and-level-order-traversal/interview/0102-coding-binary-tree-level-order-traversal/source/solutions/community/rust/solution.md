# Rust BFS solution with no `.clone`

**Author:** sugyan
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1220016/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1220016/)

---

```rust
use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut vd = VecDeque::new();
        if let Some(r) = root {
            vd.push_back(r);
        }
        let mut answer = Vec::new();
        while !vd.is_empty() {
            let mut row = Vec::new();
            for _ in 0..vd.len() {
                if let Some(node) = vd.pop_front() {
                    row.push(node.borrow().val);
                    if let Some(l) = node.borrow_mut().left.take() {
                        vd.push_back(l);
                    }
                    if let Some(r) = node.borrow_mut().right.take() {
                        vd.push_back(r);
                    }
                }
            }
            answer.push(row);
        }
        answer
    }
}
```