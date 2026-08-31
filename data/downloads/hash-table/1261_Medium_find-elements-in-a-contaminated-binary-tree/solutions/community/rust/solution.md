# Rust: Tree Traversal Using Bitwise Pathing

**Author:** Lindelt
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5671590/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5671590/)

---

# Intuition

Any given `TreeNode` with a value of $x$ in a reconstructed tree will have the following qualities:

- $\\lfloor{\	extrm{log}_2(x + 1)}\\rfloor$ is the number of levels below the root node at which the given node resides.
- Assuming the the root node is the right child of a dummy root, the binary representation of $x + 1$, begining at the most significant 1 digit, provides a map from the dummy root to the given node, where 1 indicates a right child and 0 a left child.

For example, when given a node with a value of $21$, we know that:

- The node is four levels below the root
  $\\lfloor{\	extrm{log}_2(21 + 1)}\\rfloor = 4$

- The node is the left child&hellip;
  &hellip;of the right child&hellip;
  &hellip;of the right child&hellip;
  &hellip;of the left child&hellip;
  &hellip;of the root.
  $(21 + 1)_{dec} = 22_{dec} = 10110_{bin}$

# Approach

When building the `FindElements` structure, create a dummy root and make the provided `root` element the right child of the dummy root.

When finding whether a value is in the reconstructed tree, traverse the tree, starting at the dummy root, using the binary representation of the value plus one to guide the traversal. The value is present in the reconstructed tree if the traversal is completed successfully.

# Complexity

Given an input value of $n$, the algorithm performs in $O(\	extrm{log}(n))$ time complexity using constant auxilliary space.

# Code
```rust []
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
use std::{cell::RefCell, rc::Rc};

struct FindElements {
    root: Option<Rc<RefCell<TreeNode>>>,
}

impl FindElements {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        // Encapsulate in a dummy root for checks.
        let root = Some(Rc::new(RefCell::new(TreeNode {
            val: -1,
            left: None,
            right: root,
        })));
        Self { root }
    }
    
    fn find(&self, target: i32) -> bool {
        if target < 0 {
            return false;
        }
        // Not necessary for problem constraints, but needed to handle
        // trees with deeper levels.
        let adjusted = target as u32 + 1;
        let mut offset_opt = Some(adjusted.ilog2());
        let mut node = self
            .root
            .clone()
            .expect("The structure should always have a dummy root");
        while let Some(offset) = offset_opt {
            // Get the proper node depending upon the check bit.
            let opt = if ((adjusted >> offset) & 1) == 1 {
                node.borrow().right.clone()
            } else {
                node.borrow().left.clone()
            };
            // Fail early if the node is not found.
            node = match opt {
                None => return false,
                Some(node) => node,
            };
            offset_opt = offset.checked_sub(1);
        }
        true
    }
}

```