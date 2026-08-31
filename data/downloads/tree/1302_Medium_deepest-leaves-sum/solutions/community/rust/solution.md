# Rust BFS solution

**Author:** sugyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/1153427/](https://leetcode.com/problems/deepest-leaves-sum/solutions/1153427/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn deepest_leaves_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut vd = VecDeque::new();
        if let Some(r) = root {
            vd.push_back(r);
        }
        let mut answer = 0;
        while !vd.is_empty() {
            answer = 0;
            for _ in 0..vd.len() {
                if let Some(n) = vd.pop_front() {
                    answer += n.borrow().val;
                    if let Some(l) = n.borrow_mut().left.take() {
                        vd.push_back(l);
                    }
                    if let Some(r) = n.borrow_mut().right.take() {
                        vd.push_back(r);
                    }
                }
            }
        }
        answer
    }
}
```