# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/2992003/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/2992003/)

---

# Code
```
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }

use std::cell::RefCell;
use std::rc::Rc;

struct CBTInserter {
    nodes: Vec<Option<Rc<RefCell<TreeNode>>>>,
}

impl CBTInserter {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        let mut nodes = vec![];
        let mut queue = std::collections::VecDeque::new();
        queue.push_back(root.clone());
        while !queue.is_empty() {
            if let Some(node) = queue.pop_front() {
                if node.is_some() {
                    nodes.push(node.clone());
                    queue.push_back(node.as_ref().unwrap().borrow().left.clone());
                    queue.push_back(node.as_ref().unwrap().borrow().right.clone());
                }
            }
        }
        Self { nodes }
    }

    fn insert(&mut self, v: i32) -> i32 {
        let n = self.nodes.len();
        let node = Some(Rc::new(RefCell::new(TreeNode::new(v))));
        self.nodes.push(node.clone());
        if n % 2 != 0 {
            self.nodes[(n - 1) / 2].as_ref().unwrap().borrow_mut().left = node;
        } else {
            self.nodes[(n - 1) / 2].as_ref().unwrap().borrow_mut().right = node;
        }
        self.nodes[(n - 1) / 2].as_ref().unwrap().borrow().val
    }

    fn get_root(&self) -> Option<Rc<RefCell<TreeNode>>> {
        self.nodes[0].clone()
    }
}
```