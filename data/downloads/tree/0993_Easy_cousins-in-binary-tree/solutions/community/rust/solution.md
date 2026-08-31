# Rust BFS solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/1527316/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/1527316/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn is_cousins(root: Option<Rc<RefCell<TreeNode>>>, x: i32, y: i32) -> bool {
        let mut vd = VecDeque::new();
        if let Some(r) = root {
            vd.push_back((r, None));
        }
        while !vd.is_empty() {
            let mut x_found = None;
            let mut y_found = None;
            for _ in 0..vd.len() {
                if let Some((node, parent)) = vd.pop_front() {
                    let val = node.borrow().val;
                    if val == x {
                        x_found = parent;
                    }
                    if val == y {
                        y_found = parent;
                    }
                    if let Some(n) = node.borrow_mut().left.take() {
                        vd.push_back((n, Some(val)));
                    }
                    if let Some(n) = node.borrow_mut().right.take() {
                        vd.push_back((n, Some(val)));
                    }
                }
            }
            if let (Some(x_parent), Some(y_parent)) = (x_found, y_found) {
                return x_parent != y_parent;
            }
        }
        false
    }
}
```