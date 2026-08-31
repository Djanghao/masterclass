# rust: simple recursion 0ms

**Author:** happysings
**Votes:** 4
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/3035278/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/3035278/)

---


# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn diameter_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>) -> (i32, i32) {
            match root {
                None => (0, 0),
                Some(node) => {
                    let (ld, ldia) = dfs(node.borrow().left.clone());
                    let (rd, rdia) = dfs(node.borrow().right.clone());
                    (i32::max(ld, rd) + 1, i32::max(ldia, i32::max(rdia, ld+rd)))
                }
            }
        }
        dfs(root).1
    }
}
```