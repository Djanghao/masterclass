# Iterative DFS solution in Rust

**Author:** ustinovas
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433343/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433343/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn longest_zig_zag(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut max_len = 0;
        let mut stack = vec![(root, true, 0)];
        while let Some((node, is_left, len)) = stack.pop() {
            if let Some(node) = node {
                max_len = max_len.max(len);
                let &TreeNode { ref left, ref right, .. } = &*node.borrow();
                stack.push((left.as_ref().map(Rc::clone), true, if is_left { 1 } else { len + 1 }));
                stack.push((right.as_ref().map(Rc::clone), false, if is_left { len + 1 } else { 1 }));
            }
        }
        max_len
    }
}
```