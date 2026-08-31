# Rust | Recursive DFS | With Comments

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2161385/](https://leetcode.com/problems/binary-tree-cameras/solutions/2161385/)

---

I had a really hard time understanding the official solution, and I think this one is clearer. Also I like to use move semantics here, since we are consuming `root` anyway.

```
enum State {
    Uncovered,
    Covered,
    HasCamera,
}

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    
    pub fn min_camera_cover(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        // Recurse over tree
        match Self::dfs(root.unwrap()) {
            // If root is uncovered we add a final camera
            (State::Uncovered, n) => n+1,
            (_, n) => n
        }
    }

    fn dfs(node: Rc<RefCell<TreeNode>>) -> (State, i32) {
        let mut node_ref = node.borrow_mut();
        match (node_ref.left.take(), node_ref.right.take()) {
            (None, None) => (State::Uncovered, 0), // Termination - flag leaf node as uncovered
            (None, Some(child)) | (Some(child), None) => {
                // Only one child to consider
                match Self::dfs(child) {
                    // Add a camera to cover uncovered child node
                    (State::Uncovered, n) => (State::HasCamera, n+1),
                    // Flag as uncovered to let parent cover
                    (State::Covered, n) => (State::Uncovered, n),
                    // Child has camera so flag this as covered to parent
                    (State::HasCamera, n) => (State::Covered, n),
                }
            },
            (Some(child1), Some(child2)) => {
                // Two children to consider
                match (Self::dfs(child1), Self::dfs(child2)) {
                    // At least one of the children is uncovered, so we have to add a camera
                    ((State::Uncovered, n1), (_, n2)) | ((_, n1), (State::Uncovered, n2)) => (State::HasCamera, n1 + n2 +1),
                    // At least one of the children has a camera (but neither is uncovered due to previous match arm), so flag as covered
                    ((State::HasCamera, n1), (_, n2)) | ((_, n1), (State::HasCamera, n2)) => (State::Covered, n1 + n2),
                    // Fallthrough - both children covered - flag this node as uncovered
                    ((_, n1), (_, n2)) => (State::Uncovered, n1 + n2),
                }
            },
        }
    }
}
```