# 🚀 Clean BFS Solution (Rust & JavaScript)

**Author:** emmakuen
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3205955/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3205955/)

---

## JavaScript Solution
```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const values = [];

  while (queue.length > 0) {
    const length = queue.length;
    const level = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (values.length & 1) {
      level.reverse();
    }
    values.push(level);
  }

  return values;
};
```

## Rust Solution
```rust
use std::rc::Rc;
use std::{cell::RefCell, collections::VecDeque};
impl Solution {
    pub fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut values = vec![];
        if root.is_none() {
            return values;
        }

        let mut queue = VecDeque::new();
        queue.push_back(root.unwrap());

        while !queue.is_empty() {
            let mut level = vec![];
            let length = queue.len();

            for _ in 0..length {
                let node = queue.pop_front().unwrap();
                let node = node.borrow();

                level.push(node.val);
                if node.left.is_some() {
                    queue.push_back(node.left.clone().unwrap());
                }
                if node.right.is_some() {
                    queue.push_back(node.right.clone().unwrap());
                }
            }
            if (values.len() & 1) == 1 {
                level.reverse();
            }
            values.push(level);
        }

        values
    }
}
```