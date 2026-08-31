# Rust DFS

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/2898978/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/2898978/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
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

type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn btree_game_winning_move(root: Option<Rc<RefCell<TreeNode>>>, n: i32, x: i32) -> bool {
        let mut count = 0;
        Self::dfs(&root, &mut count, n, x)
    }

    fn dfs(root: &OptNode, count: &mut i32, n: i32, x: i32) -> bool {
        if root.is_none() { return false } 
        let node = root.as_ref().unwrap().borrow();
        let (mut count1, mut count2) = (0, 0);
        let ret1 = Self::dfs(&node.left, &mut count1, n, x);
        let ret2 = Self::dfs(&node.right, &mut count2, n, x);
        if ret1 || ret2 { return true }
        *count = 1 + count1 + count2;
        if node.val == x {
            return 2 * count1 > n || 2 * count2 > n || 2 * *count < n  
        }
        false
    }
}
```