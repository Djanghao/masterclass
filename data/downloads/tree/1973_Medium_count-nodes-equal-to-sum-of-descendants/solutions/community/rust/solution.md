# Rust Solution using dfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/2444158/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/2444158/)

---

```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn equal_to_descendants(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        if let Some(node) = root {
            let mut helper = Helper { result: 0 };
            helper.dfs(&node);
            helper.result
        } else {
            0
        }
    }
}

struct Helper {
    result: i32
}

impl Helper {
    fn dfs(&mut self, node: &Rc<RefCell<TreeNode>>) -> i32 {
        let mut tot = 0;
        if let Some(left) = &node.borrow().left {
            tot += self.dfs(&left);
        }
    
        if let Some(right) = &node.borrow().right {
            tot += self.dfs(&right);
        }
    
        if node.borrow().val == tot {
            self.result += 1;
        }
        tot + node.borrow().val
    }
}
```