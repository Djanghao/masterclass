# Rust | Recursive DFS | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2538742/](https://leetcode.com/problems/binary-tree-pruning/solutions/2538742/)

---

The algorithm: recurse over the tree, removing any nodes that have no children (either leaf nodes from the original tree, or branches that have already been pruned) and have value zero.

Such a wonderful opportunity to take advantage of move semantics to avoid cloning the `Rc`s or constructing new nodes. Destructuring and pattern matching tie it all together, and we get the compiler seal of approval that all cases are covered.

Notes about the implementation:
* `match (node_ref.val, Self::prune_tree(node_ref.left.take())...` - `take()` moves the option out of `node_ref.left` and replaces it with `None`. It then gets passed to `Self::prune_tree(...)`, and we match the `result`. If we match the first arm, the ref count of the current node is decremented, and the node is immediately dropped if no other references exist. Sweet.
* Note the explicit `drop`. The Rust compiler is often clever enough to realize when we are done with a reference, but this is one of those cases where we have to give it a nudge to be able to move `node_rc` into the return value option.

```
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn prune_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        match root {
            None => None,
            Some(node_rc) => {
                let mut node_ref = node_rc.borrow_mut();
                match (node_ref.val, Self::prune_tree(node_ref.left.take()), Self::prune_tree(node_ref.right.take())) {
                    (0, None, None) => None,
                    (_, left, right) => {
                        node_ref.left = left;
                        node_ref.right = right;
                        drop(node_ref);
                        Some(node_rc)
                    }
                }
            }
        }
    }
}
```