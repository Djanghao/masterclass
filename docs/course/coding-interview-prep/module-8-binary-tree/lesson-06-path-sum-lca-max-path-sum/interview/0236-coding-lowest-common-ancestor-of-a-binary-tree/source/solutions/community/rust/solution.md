# Rust 0ms 🔥 4.14Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/5483592/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/5483592/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if root == p || root == q {root}
        else if let Some(node) = root {
            let left = Self::lowest_common_ancestor(node.borrow().left.clone(), p.clone(), q.clone());
            let right = Self::lowest_common_ancestor(node.borrow().right.clone(), p.clone(), q.clone());
            if left.is_some() && right.is_some() {Some(node)}
            else if left.is_none() {right}
            else {left}
        } else {None}
    }
}
```