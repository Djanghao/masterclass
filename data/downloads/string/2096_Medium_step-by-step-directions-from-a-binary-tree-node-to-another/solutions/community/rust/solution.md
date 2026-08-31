# Rust with comments

**Author:** dreamzen
**Votes:** 2
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1613013/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1613013/)

---

```
use std::cell::RefCell;
use std::rc::Rc;

use crate::tree_node::TreeNode;

struct Solution;

impl Solution {
    pub fn get_directions(
        root: Option<Rc<RefCell<TreeNode>>>,
        start_value: i32,
        dest_value: i32,
    ) -> String {
        // 1. find path from root to start
        // 2. find path from root to dest
        // 3. remove dup parent nodes
        // 4. revert path to start, and join path with dest
        let mut path_to_start: Vec<char> = Vec::new();
        let mut path_to_dest: Vec<char> = Vec::new();

        Self::find_path(&root, start_value, &mut path_to_start);
        Self::find_path(&root, dest_value, &mut path_to_dest);

        let mut start_idx = 0;
        for i in 0..(path_to_start.len()).min(path_to_dest.len()) {
            if path_to_start[i] == path_to_dest[i] {
                start_idx = i + 1;
            } else {
                break;
            }
        }

        path_to_start = path_to_start[start_idx..].to_vec();
        path_to_dest = path_to_dest[start_idx..].to_vec();

        // revert path_to_start
        let mut path_to_start_rev = vec!['U'; path_to_start.len()];
		// join with dest
        path_to_start_rev.append(&mut path_to_dest);
        path_to_start_rev.iter().collect()
    }

    fn find_path(root: &Option<Rc<RefCell<TreeNode>>>, value: i32, path: &mut Vec<char>) -> bool {
        match root {
            None => return false,
            Some(r) => {
                if r.borrow().val == value {
                    return true;
                } else {
                    path.push('L');
                    if Self::find_path(&r.borrow().left, value, path) {
                        return true;
                    }
                    path.pop();

                    path.push('R');
                    if Self::find_path(&r.borrow().right, value, path) {
                        return true;
                    }
                    path.pop();

                    return false;
                }
            }
        }
    }
}

```