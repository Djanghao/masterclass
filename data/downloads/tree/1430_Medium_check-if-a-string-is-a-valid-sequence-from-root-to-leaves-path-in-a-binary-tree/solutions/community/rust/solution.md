# Rust Solution using dfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2578857/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2578857/)

---

```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn is_valid_sequence(root: Option<Rc<RefCell<TreeNode>>>, arr: Vec<i32>) -> bool {
        if let Some(node) = root {
            let mut helper = Helper { success: false };
            helper.dfs(&node, &arr, 0);
            helper.success
        } else {
            false
        }   
    }
}

struct Helper {
    success: bool
}
impl Helper {
    fn dfs(&mut self, node:&Rc<RefCell<TreeNode>>, arr: &Vec<i32>, ci:usize) {
        let li = arr.len() - 1;

        if arr[ci] != node.borrow().val {
            return
        }
          
        let mut is_leaf = true;
        if let Some(left) = &node.borrow().left {
            is_leaf = false;
            if ci < li {
                self.dfs(left, arr, ci+1);    
            }
        }
        if let Some(right) = &node.borrow().right {
            is_leaf = false;
            if ci < li {
                self.dfs(right, arr, ci+1);
            }
        }

        if is_leaf && li == ci {
            self.success = true;
            return
        }
    }
}
```