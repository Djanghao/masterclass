# Rust | Recursive DFS | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/2543512/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/2543512/)

---

The algorithm: perform a DFS over the tree and append node values in pre-order, so first the parent node, and then the left and right children. The tricky thing here is getting the parentheses right:

* No children => append empty string
* Only left child => append "({left subtree})" (nothing for the right empty subtree)
* Only right child => append "()({right subtree})" (mark that the left subtree is empty by including an empty pair of parentheses)
* Two children => append "({left subtree})({right subtree})"

Notes about the implementation:
* This is such a wonderful opportunity to use move semantics. This has the benefit that we avoid the overhead of cloning or constructing new node instances, and also that we can perform the recursion within the given function without helper functions. We just `take` the children and pass them to the `tree2str` function as needed.
* The constraints guarantee that the given `root` node is `Some(...)`, so we `unwrap` it and make sure that the children that we feed to `tree2str` are also `Some(...)`. This also makes the `match` expression very intuitive and easy to implement with the four cases described above.

```
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn tree2str(root: Option<Rc<RefCell<TreeNode>>>) -> String {
        let node_rc = root.unwrap();
        let mut node_ref = node_rc.borrow_mut();
        node_ref.val.to_string()
            + &match (node_ref.left.take(), node_ref.right.take()) {
                (None, None) => String::new(),
                (left, None) => format!("({})", Self::tree2str(left)),
                (None, right) => format!("()({})", Self::tree2str(right)),
                (left, right) => format!("({})({})", Self::tree2str(left), Self::tree2str(right)),
            }
    }
}
```