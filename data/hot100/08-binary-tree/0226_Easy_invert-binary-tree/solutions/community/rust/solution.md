# Rust, iterative and recursive std:mem::swap solutions

**Author:** night-crawler
**Votes:** 19
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/1565092/](https://leetcode.com/problems/invert-binary-tree/solutions/1565092/)

---

### Recursive

```rust
use std::cell::RefCell;
use std::rc::Rc;

trait TreeNodeSwap {
    fn swap(&mut self);
    fn swap_all(&mut self);
}

impl TreeNodeSwap for TreeNode {
    fn swap(&mut self) {
        std::mem::swap(&mut self.left, &mut self.right)
    }

    fn swap_all(&mut self) {
        self.left.as_mut().map(|node| node.borrow_mut().swap_all());
        self.right.as_mut().map(|node| node.borrow_mut().swap_all());
        self.swap();
    }
}

impl Solution {
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        root.map(|node| {
            node.borrow_mut().swap_all();
            node
        })
    }
}
```

### Iterative

```rust
use std::cell::RefCell;
use std::rc::Rc;

trait TreeNodeSwap {
    fn swap(&mut self);
}

impl TreeNodeSwap for TreeNode {
    fn swap(&mut self) {
        std::mem::swap(&mut self.left, &mut self.right)
    }
}

impl Solution {
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut stack = vec![];
        root.as_ref().map(|node| stack.push(Rc::clone(node)));

        while let Some(ref node) = stack.pop() {
            node.borrow().left.as_ref().map(|node| stack.push(Rc::clone(node)));
            node.borrow().right.as_ref().map(|node| stack.push(Rc::clone(node)));
            node.borrow_mut().swap();
        }

        root
    }
}
```