# A rust concise solution

**Author:** bigplume
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/3775550/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/3775550/)

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
    pub fn construct_from_pre_post(preorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        fn build(preorder: &[i32], postorder: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
            if preorder.len() == 0 {
                return None;
            }
            let node = Rc::new(RefCell::new(TreeNode{val: preorder[0], 
                left: None, right: None}));
            if preorder.len() > 1 {
                let i = postorder.iter().position(|&x| x == preorder[1]).unwrap();
                node.borrow_mut().left = build(&preorder[1..i+2], &postorder[..i+1]);
                node.borrow_mut().right = build(&preorder[i+2..], 
                    &postorder[i+1..postorder.len()-1]);
            }    
            return Some(node);
        }
        return build(&preorder[..], &postorder[..]);
    }
}
```