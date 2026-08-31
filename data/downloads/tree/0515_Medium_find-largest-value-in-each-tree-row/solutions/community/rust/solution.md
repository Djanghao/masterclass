# Calculate max of the layer and cache the next layer

**Author:** BinJu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4318993/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4318993/)

---

# Intuition
Cache the nodes at the same row.
# Approach
Put the same row in an array, Because the node number varies 
at different row. Then we calculate the maximum at the same row. Meanwhile the function return all the nodes of the next row, so that we could repeat this pattern.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

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
    pub fn largest_values(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut row_max = Vec::new();
        let mut nodes = Vec::new();
        if let Some(r) = root {
            nodes.push(r);
        }
        while !nodes.is_empty() {
            let (max,n) = Self::next_max(&nodes);
            println!("push value: {}, node len: {}", max, nodes.len());
            row_max.push(max);
            nodes = n;
        }
        row_max
    }
    pub fn next_max(nodes: &[Rc<RefCell<TreeNode>>]) ->  (i32, Vec<Rc<RefCell<TreeNode>>>) {
        let mut result = Vec::new();
        let mut val = std::i32::MIN;
        for n in nodes {
            let v = n.borrow();
            if v.val > val {
                val = v.val;
            }
            if let Some(left) = &v.left {
                result.push(left.clone());
            }
            if let Some(right) = &v.right {
                result.push(right.clone());
            }
        }
        (val, result)
    }
}
```