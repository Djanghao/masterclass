# [Rust] - dfs - 100% - bitshift and bitwise or

**Author:** 21eleven
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/836878/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/836878/)

---

```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn sum_root_to_leaf(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let int = 0;
        let mut sum = 0;
        if let Some(n) = root {
            Self::dfs(n, int, &mut sum);
        }
        sum
    }
    fn dfs(n: Rc<RefCell<TreeNode>>, int: i32, sum: &mut i32) {
        let next_int = (int << 1) | n.borrow().val;
        if n.borrow().left.is_none() && n.borrow().right.is_none() {
            *sum += next_int;
        } else {
            if let Some(l) = n.borrow().left.clone() {
                Self::dfs(l, next_int, sum);
            }
            if let Some(r) = n.borrow().right.clone() {
                Self::dfs(r, next_int, sum);           
            }          
        }

    }
}
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
```