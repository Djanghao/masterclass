# Rust 0ms 100% 100%

**Author:** 9CmjwtCGX5kcQJY7cDgt
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/1395496/](https://leetcode.com/problems/path-sum-iii/solutions/1395496/)

---

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

use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> i32 {
        Self::recurse(&root, target_sum, vec![].as_mut())
    }
    pub fn recurse(root: &Option<Rc<RefCell<TreeNode>>>, target_sum: i32, vec: &mut Vec<i32>) -> i32 {
        return if let Some(rc_node) = root {
            let node = rc_node.borrow();
            let mut count = 0;
            vec.push(0);
            vec.iter_mut().for_each(|x| {
                *x = *x + node.val;
                if *x == target_sum {
                    count += 1;
                }
            });
            count = count + Self::recurse(&node.left, target_sum, vec) + Self::recurse(&node.right, target_sum, vec);
            vec.pop();
            vec.iter_mut().for_each(|x| *x = *x - node.val);
            count
        } else {
            0
        };
    }
}
```

![image](./images/0.png)

