# Convert to array and binary_search

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3888231/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3888231/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Elegant and direct traversal of a tree gets TLE due to unbalanced inputs, hence this

# Complexity
- Time complexity: $$O(N + Q*log(N))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
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

fn dfs(root: Option<&Rc<RefCell<TreeNode>>>, out: &mut Vec<i32>) {
    if let Some(root) = root {
        let root = root.borrow();
        dfs(root.left.as_ref(), out);
        out.push(root.val);
        dfs(root.right.as_ref(), out);
    }
}

impl Solution {
    pub fn closest_nodes(root: Option<Rc<RefCell<TreeNode>>>, queries: Vec<i32>) -> Vec<Vec<i32>> {
        let mut sorted = Vec::new();
        dfs(root.as_ref(), &mut sorted);

        queries.into_iter().map(|q| {
            match sorted.binary_search(&q) {
                Ok(i) => vec![q, q],
                Err(i) => vec![*sorted.get(i - 1).unwrap_or(&-1), *sorted.get(i).unwrap_or(&-1)]
            }
        }).collect()
    }
}
```