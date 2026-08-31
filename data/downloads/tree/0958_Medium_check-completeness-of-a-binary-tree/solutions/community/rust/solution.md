# rust bfs solution

**Author:** skymnok
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3299314/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3299314/)

---

So Approach is very simple. We are making bfs left - right for every level. When we found first None, all others nodes must be also None

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;
impl Solution {
    pub fn is_complete_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let mut deq = VecDeque::from([root]);
        let mut is_none = false;
        while let Some(node) = deq.pop_front() {
            match node {
                Some(node) =>  {
                    if is_none {
                        return false
                    }
                    let node = node.borrow();
                    deq.push_back(node.left.clone());
                    deq.push_back(node.right.clone());
                },
                None =>  {
                    is_none = true;
                },
            }
        }
        true
    }
}
```