# rust derive(Eq)

**Author:** CHIYOI
**Votes:** 25
**Link:** [https://leetcode.com/problems/same-tree/solutions/3028316/](https://leetcode.com/problems/same-tree/solutions/3028316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The defination of TreeNode derived the Eq trait so the answer is just use it.

# Code
```
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn is_same_tree(
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        p == q
    }
}
```