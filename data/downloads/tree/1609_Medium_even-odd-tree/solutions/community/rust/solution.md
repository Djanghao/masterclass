# Rust 24ms 🔥 11.66Mb ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 1
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4798070/](https://leetcode.com/problems/even-odd-tree/solutions/4798070/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(width)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;
impl Solution {
    pub fn is_even_odd_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let mut q = VecDeque::from([(root, 0)]);
        let mut val = 0;
        let mut level = -1;

        while let Some((Some(n), l)) = q.pop_front() {
            let n = n.borrow();

            if l % 2 == 0 && n.val % 2 == 0 {return false;}
            if l % 2 == 1 && n.val % 2 == 1 {return false;}

            if level != l {level = l;}
            else if l % 2 == 0 && val >= n.val {return false;}
            else if l % 2 == 1 && val <= n.val {return false;}

            val = n.val;

            if n.left.is_some() {q.push_back((n.left.clone(), l+1));}
            if n.right.is_some() {q.push_back((n.right.clone(), l+1));}
        }
        true
    }
}
```