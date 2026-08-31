# Rust DFS solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/1382516/](https://leetcode.com/problems/path-sum-ii/solutions/1382516/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
        let mut answer = Vec::new();
        Self::dfs(&root, target_sum, &mut Vec::new(), &mut answer);
        answer
    }
    fn dfs(
        node: &Option<Rc<RefCell<TreeNode>>>,
        target_sum: i32,
        v: &mut Vec<i32>,
        answer: &mut Vec<Vec<i32>>,
    ) {
        if let Some(n) = node {
            let val = n.borrow().val;
            let l = &n.borrow().left;
            let r = &n.borrow().right;
            v.push(val);
            if target_sum == val && l.is_none() && r.is_none() {
                answer.push(v.clone());
            }
            Self::dfs(l, target_sum - val, v, answer);
            Self::dfs(r, target_sum - val, v, answer);
            v.pop();
        }
    }
}
```