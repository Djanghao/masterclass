# Rust O(H) time complexity solution

**Author:** RockGlue
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4975300/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4975300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Leverage the property of a binary tree to determine the direction, thus halving the search area at each iteration.

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate over the ``root`` selecting the side that moves the node value closer to the ``target``.
At each iteration compare the absolute difference between the ``target`` and current node value with the absolute difference between the ``target`` and the closest to ``target`` value so far. Whichever difference is smaller becomes the new closest value. In case the two difference are equal, select the smallest value between current node value and current closest.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(H))$$, where $$H$$ is the hight of the tree.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

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
impl Solution {
    pub fn closest_value(root: Option<Rc<RefCell<TreeNode>>>, target: f64) -> i32 {
        let mut closest = i32::MAX;
        let mut cur = root;

        while let Some(node) = cur {
            let mut node = node.borrow_mut();
            let val_f64 = node.val as f64;

            closest = match (val_f64 - target)
                .abs()
                .total_cmp(&(closest as f64 - target).abs())
            {
                std::cmp::Ordering::Less => node.val,
                std::cmp::Ordering::Equal => node.val.min(closest),
                std::cmp::Ordering::Greater => closest,
            };

            cur = match (val_f64).total_cmp(&target) {
                std::cmp::Ordering::Less => node.right.take(),
                std::cmp::Ordering::Equal => return node.val,
                std::cmp::Ordering::Greater => node.left.take(),
            }
        }

        closest
    }
}
```