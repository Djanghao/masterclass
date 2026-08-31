# Easy recursive Rust solution

**Author:** rinatshay
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3142511/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3142511/)

---

# Complexity
- Time complexity:
$$O(n)$$

# Code
```
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            Some(node) => {
                let left = Self::min_depth(node.borrow().left.clone());
                let right = Self::min_depth(node.borrow().right.clone());

                if left == 0 || right == 0 {
                    return left.max(right) + 1
                }
                
                left.min(right) + 1
            },
            None => 0,
        }
    }
}
```

# Hey! \uD83E\uDD19\uD83C\uDFFB
```
\u2B06\uFE0F Upvote if you like the solution to keep me post more
```