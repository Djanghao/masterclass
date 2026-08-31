# [Rust] Collect values, then divide-and-conquer

**Author:** nakanolab
**Votes:** 2
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369744/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369744/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Collect (sorted) values by inorder traversal and build a new tree by divide-and-conquer.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn balance_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut vals = Vec::new();
        Self::inorder(&root, &mut vals);
        Self::split(&vals, 0, vals.len())
    }

    fn inorder(node: &Option<Rc<RefCell<TreeNode>>>, vals: &mut Vec<i32>) {
        if let Some(node) = node {
            let node = node.borrow();
            Self::inorder(&node.left, vals);
            vals.push(node.val);
            Self::inorder(&node.right, vals);
        }
    }

    fn split(vals: &Vec<i32>, i: usize, j: usize) -> Option<Rc<RefCell<TreeNode>>> {
        if i == j {
            return None;
        }
        let m = (i + j) / 2;
        Some(Rc::new(RefCell::new(TreeNode {
            val: vals[m],
            left: Self::split(vals, i, m),
            right: Self::split(vals, m + 1, j),
        })))
    }
}
```