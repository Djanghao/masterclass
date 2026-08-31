# Rust | Iterative with Stack | With Comments

**Author:** wallicent
**Votes:** 5
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/2341204/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/2341204/)

---

I could only find recursive and Morris solutions in the discussion posts, so here is my iterative solution using a stack:

```
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn flatten(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        // .flatten() takes care of the edge case of an empty root,
        // in which case the stack will be empty.
        let mut stack = std::iter::once(root.clone()).flatten().collect::<Vec<_>>();
        // Create a dummy node to make it easier to append nodes without
        // dealing with the edge case of the first node
        let mut head = Rc::new(RefCell::new(TreeNode::new(0)));
        while let Some(node) = stack.pop() {
            let mut node_ref = node.borrow_mut();
            // Push right node onto stack first, since we want to pop it last
            if let Some(right) = node_ref.right.take() {
                stack.push(right);
            }
            if let Some(left) = node_ref.left.take() {
                stack.push(left);
            }
            // Drop node_ref to be able to move node in "head = node;"
            drop(node_ref);
            head.borrow_mut().right = Some(node.clone());
            head = node;
        }
    }
}
```