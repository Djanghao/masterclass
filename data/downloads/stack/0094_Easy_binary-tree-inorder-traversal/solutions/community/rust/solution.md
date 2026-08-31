# Rust Solution

**Author:** Hanaasagi
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1414598/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1414598/)

---

```Rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut res = vec![];
        
        fn traversal(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {
            if let Some(n) = node {
                traversal(n.borrow().left.clone(), res);
                res.push(n.borrow().val);
                traversal(n.borrow().right.clone(), res);
            }
        }
        
        traversal(root, &mut res);
        
        res
    }
}
```