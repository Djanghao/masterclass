# Rust | DFS | 0ms | 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/5389413/](https://leetcode.com/problems/print-binary-tree/solutions/5389413/)

---

# Intuition
Get the height and build the array.

# Complexity
- Time complexity: $$O(h.2^{h})$$

- Space complexity: $$O(h.2^{h})$$

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
type TypeNode = Option<Rc<RefCell<TreeNode>>>;
use std::cmp::max;
impl Solution {
    pub fn print_tree(root: TypeNode) -> Vec<Vec<String>> {
        fn dfs(root: &TypeNode) -> u32 {
            match root {
                None => 0,
                Some(node) => {
                    let node = node.borrow();
                    1 + max(dfs(&node.left), dfs(&node.right))
                }
            }
        }
        fn _print(root: &TypeNode, tree: &mut Vec<Vec<String>>, h: u32, r: u32, pc: u32, left_child: bool) {
            match root {
                None => {},
                Some(node) => {
                    let node = node.borrow();
                    let c = if r == 0 {
                        2_u32.pow(h-1) - 1
                    } else if left_child {
                        pc - 2_u32.pow(h - r - 1)
                    } else {
                        pc + 2_u32.pow(h - r - 1)
                    };
                    tree[r as usize][c as usize] = format!("{}", node.val);
                    _print(&node.left, tree, h, r+1, c, true);
                    _print(&node.right, tree, h, r+1, c, false);
                }
            }
        }
        let mut height = dfs(&root);
        let n = 2_usize.pow(height) - 1;
        let mut tree = vec![vec![String::new(); n]; (height as usize)];
        _print(&root, &mut tree, height, 0, 0, true);
        tree
    }
}
```