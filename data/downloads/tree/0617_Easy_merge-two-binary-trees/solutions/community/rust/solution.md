# Rust | 4ms | 2.4 MB

**Author:** astroex
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/1883652/](https://leetcode.com/problems/merge-two-binary-trees/solutions/1883652/)

---

Runtime: 4 ms, faster than 97.83% of Rust online submissions for Merge Two Binary Trees.
Memory Usage: 2.4 MB, less than 28.26% of Rust online submissions for Merge Two Binary Trees.

```
use std::rc::Rc;
use std::cell::RefCell;
type Node = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn merge_trees(root1: Node, root2: Node) -> Node {
        
        match (root1, root2) {
            (Some(n1), Some(n2)) =>  {
                let (n1, n2) = (n1.borrow(), n2.borrow());
                let mut root = TreeNode::new(n1.val + n2.val);
                root.left =  Self::merge_trees(n1.left.clone(), n2.left.clone());
                root.right = Self::merge_trees(n1.right.clone(), n2.right.clone());
                Some(Rc::new(RefCell::new(root)))
            }
            (None, Some(n)) | (Some(n), None) => return Some(n),
            (None, None) => return None
        }
    }
}
```