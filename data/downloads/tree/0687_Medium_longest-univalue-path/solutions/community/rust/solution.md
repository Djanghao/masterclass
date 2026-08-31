# [🦀] Rust O(n) DFS solution

**Author:** Tsimon-Dorakh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/4583616/](https://leetcode.com/problems/longest-univalue-path/solutions/4583616/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn longest_univalue_path(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        fn dfs(max: &mut i32, node: Option<&Rc<RefCell<TreeNode>>>, x: i32) -> i32 {
            node.map_or(0, |node| {
                let node = node.borrow();

                let l = dfs(max, node.left.as_ref(), node.val);
                let r = dfs(max, node.right.as_ref(), node.val);
                *max = (*max).max(l + r);

                if x == node.val { 1 + l.max(r) } else { 0 }
            })
        }

        let mut max = 0;
        root.map(|root| { dfs(&mut max, Some(&root), root.borrow().val) });
        max       
    }
}
```