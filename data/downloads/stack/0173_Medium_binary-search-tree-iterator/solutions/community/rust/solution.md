# Rust solution

**Author:** 54k
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/3535933/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/3535933/)

---

# Code
```
use std::{cell::RefCell, rc::Rc};

type Node = Option<Rc<RefCell<TreeNode>>>;

struct BSTIterator {
    stack: Vec<Node>,
}

impl BSTIterator {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        let mut ret = Self { stack: vec![] };
        ret.leftmost_intorder(root);
        ret
    }

    fn leftmost_intorder(&mut self, mut root: Node) {
        while root.is_some() {
            self.stack.push(root.clone());
            root = root.unwrap().borrow().left.clone();
        }
    }

    fn next(&mut self) -> i32 {
        let ret = self.stack.pop().unwrap();
        if ret.as_ref().unwrap().borrow().right.is_some() {
            self.leftmost_intorder(ret.as_ref().unwrap().borrow().right.clone());
        }
        ret.unwrap().borrow().val
    }

    fn has_next(&self) -> bool {
        self.stack.len() > 0
    }
}

```