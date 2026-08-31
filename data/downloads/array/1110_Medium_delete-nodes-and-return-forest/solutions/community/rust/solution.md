# Rust Implementation

**Author:** amithapa
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/3400983/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/3400983/)

---

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashSet;
type Node = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    fn dfs(
        root: &Node,
        result: &mut Vec<Node>,
        to_delete: &mut HashSet<i32>,
        is_root: bool,
    ) -> Node {
        match root.clone() {
            Some(root_ref) => {
                let mut root_node = root_ref.borrow_mut();
                let root_deleted = to_delete.contains(&root_node.val);

                if is_root && !root_deleted {
                    result.push(root.clone());
                }

                root_node.left = Self::dfs(&root_node.left.take(), result, to_delete, root_deleted);
                root_node.right =
                    Self::dfs(&root_node.right.take(), result, to_delete, root_deleted);

                if root_deleted {
                    None
                } else {
                    root.clone()
                }
            }
            None => None,
        }
    }

    pub fn del_nodes(
        root: Option<Rc<RefCell<TreeNode>>>,
        to_delete: Vec<i32>,
    ) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        let mut to_delete: HashSet<i32> = to_delete.into_iter().collect();
        let mut result: Vec<Node> = Vec::new();

        Self::dfs(&root, &mut result, &mut to_delete, true);

        result
    }
}

```