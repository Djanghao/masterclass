# Rust DFS solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/603147/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/603147/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn max_path_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut answer = std::i32::MIN;
        Solution::dfs(&root, &mut answer);
        answer
    }

    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, answer: &mut i32) -> i32 {
        if let Some(n) = node {
            let val = n.borrow().val;
            let l = std::cmp::max(0, Solution::dfs(&n.borrow().left, answer));
            let r = std::cmp::max(0, Solution::dfs(&n.borrow().right, answer));
            *answer = std::cmp::max(*answer, val + l + r);
            val + std::cmp::max(l, r)
        } else {
            0
        }
    }
}
```