# Rust recursive solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/589056/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/589056/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn bst_from_preorder(preorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        Solution::helper(&preorder)
    }
    fn helper(v: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(first) = v.first() {
            let node = Rc::new(RefCell::new(TreeNode::new(*first)));
            let i = (1..v.len())
                .find(|&i| v[i] > v[0])
                .unwrap_or_else(|| v.len());
            node.borrow_mut().left = Solution::helper(&v[1..i]);
            node.borrow_mut().right = Solution::helper(&v[i..]);
            Some(node)
        } else {
            None
        }
    }
}
```