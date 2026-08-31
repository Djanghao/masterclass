# easy rust recursive

**Author:** skymnok
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303170/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303170/)

---

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn build_tree(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        Self::builder(&inorder, &postorder)
    }
    pub fn builder(inorder: &[i32], mut postorder: &[i32]) -> Option<Rc<RefCell<TreeNode>>>{
        if inorder.is_empty() {
            return None
        }

        let mut root = TreeNode::new(*postorder.last().unwrap());

        let in_split = inorder.split(|&val| val == root.val).collect::<Vec<&[i32]>>();

        root.left = Self::builder(in_split[0], &postorder[..in_split[0].len()]);
        root.right = Self::builder(in_split[1], &postorder[in_split[0].len()..postorder.len()-1]);

        Some(Rc::new(RefCell::new(root)))
    }
}
```