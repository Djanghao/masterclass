# rust solution

**Author:** TimaGhostov
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4397082/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4397082/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
impl Solution {

    fn add(root: Option<Rc<RefCell<TreeNode>>>, num: &str, dashes: i32) -> Option<Rc<RefCell<TreeNode>>> {
        match root {
            None => {
                let num = num.parse::<i32>().unwrap();
                Some(Rc::new(RefCell::new(TreeNode::new(num))))
            }
            Some(root) => {
                let (left, right) = {
                    let root = root.clone();
                    let root = root.borrow();
                    (root.left.clone(), root.right.clone())
                };
                let _root = root.clone();
                let mut _root = _root.borrow_mut();
                if dashes == 1 {
                    if left.is_some() {
                        _root.right = Self::add(right, num, dashes-1);
                    } else {
                        _root.left = Self::add(left, num, dashes-1);
                    }
                    return Some(root);
                }
                if right.is_some() {
                    _root.right = Self::add(right, num, dashes-1);
                } else {
                    _root.left = Self::add(left, num, dashes-1);
                }
                Some(root)
            }
        }
    }
    
    pub fn recover_from_preorder(traversal: String) -> Option<Rc<RefCell<TreeNode>>> {
        let mut root = None;
        let mut dashes = 0;
        let mut num = String::new();
        for ch in traversal.chars() {
            match ch {
                '0'..='9' => {
                    num.push(ch);
                }
                '-' if !num.is_empty() => {
                    root = Self::add(root, &num, dashes);
                    dashes = 1;
                    num = String::new();
                }
                '-' => {
                    dashes += 1;
                    num = String::new();
                }
                _ => {}
            }
        }
        if !num.is_empty() {
            root = Self::add(root, &num, dashes);
        }
        root
    }
}
```