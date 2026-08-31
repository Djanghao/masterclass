# Rust dfs solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/946391/](https://leetcode.com/problems/house-robber-iii/solutions/946391/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn rob(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let ret = Solution::dfs(&root);
        std::cmp::max(ret.0, ret.1)
    }
    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>) -> (i32, i32) {
        if let Some(n) = node {
            let l = Solution::dfs(&n.borrow().left);
            let r = Solution::dfs(&n.borrow().right);
            (
                n.borrow().val + l.1 + r.1,
                std::cmp::max(l.0, l.1) + std::cmp::max(r.0, r.1),
            )
        } else {
            (0, 0)
        }
    }
}
```