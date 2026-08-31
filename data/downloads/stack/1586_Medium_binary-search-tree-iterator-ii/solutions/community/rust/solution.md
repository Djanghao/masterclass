# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/3538207/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/3538207/)

---

# Code
```
// https://leetcode.com/problems/binary-search-tree-iterator-ii/
use std::{cell::RefCell, rc::Rc};

type Node = Option<Rc<RefCell<TreeNode>>>;

struct BSTIterator {
    curr: Node,
    stack: Vec<Node>,
    arr: Vec<i32>,
    idx: i32,
}

impl BSTIterator {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        Self {
            curr: root,
            stack: vec![],
            arr: vec![],
            idx: -1,
        }
    }

    fn has_next(&self) -> bool {
        self.stack.len() > 0 || self.curr.is_some() || self.idx < self.arr.len() as i32 - 1
    }

    fn next(&mut self) -> i32 {
        self.idx += 1;
        if self.idx == self.arr.len() as i32 {
            while self.curr.clone().is_some() {
                self.stack.push(self.curr.clone());
                self.curr = self.curr.clone().unwrap().borrow().left.clone();
            }
            let curr = self.stack.pop().unwrap();
            self.curr = curr.as_ref().unwrap().borrow().right.clone();

            let curr_val = curr.as_ref().unwrap().borrow().val;
            self.arr.push(curr_val);
        }
        self.arr[self.idx as usize]
    }

    fn has_prev(&self) -> bool {
        self.idx > 0
    }

    fn prev(&mut self) -> i32 {
        self.idx -= 1;
        self.arr[self.idx as usize]
    }
}

```