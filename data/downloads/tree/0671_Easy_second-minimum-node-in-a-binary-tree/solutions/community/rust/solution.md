# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/1689095/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/1689095/)

---

```
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn find_second_minimum_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let (mut min_1, mut min_2) = (None, None);
        let mut stack = vec![root];
        while let Some(node) = stack.pop() {
            if let Some(node) = node {
                let node = node.borrow();
                let val = Some(node.val);
                if min_1.is_none() {
                    min_1 = val;
                } else if min_1 > val {
                    min_2 = min_1;
                    min_1 = val;
                } else if val > min_1 && (min_2.is_none() || min_2 > val) {
                    min_2 = val;
                }
                stack.push(node.left.clone());
                stack.push(node.right.clone());
            }
        }
        min_2.unwrap_or(-1)
    }
}
```