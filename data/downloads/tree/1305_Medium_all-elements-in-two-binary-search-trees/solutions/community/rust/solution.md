# O(n + m) Morris Traversal Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5697527/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5697527/)

---

# Complexity
- Time complexity:$$O(n + m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n + m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
final class Solution {
    public List<Integer> getAllElements(final TreeNode root1, final TreeNode root2) {
        List<Integer> res = new ArrayList<>();
        MorrisTree t1 = new MorrisTree(root1), t2 = new MorrisTree(root2);
        while (t1.hasNext() && t2.hasNext()) 
            if (t1.peek() < t2.peek()) res.add(t1.poll());
            else res.add(t2.poll());
        while (t1.hasNext()) res.add(t1.poll());
        while (t2.hasNext()) res.add(t2.poll());
        return res;
    }
    final class MorrisTree {
        private TreeNode root, nxt;
        private MorrisTree(final TreeNode root) {
            this.root = root;
            this.nxt = root;
            next();
        }
        private int poll() {
            final int res = root.val;
            next();
            return res;
        }
        private int peek() { return root.val;}
        private boolean hasNext() { return root != null;}
        private void next() {
            root = nxt;
            while (hasNext()) {
                if (root.left != null) {
                    TreeNode pre = root.left;
                    while (pre.right != null && pre.right != root) pre = pre.right;
                    if (pre.right != null) {
                        pre.right = null;
                        nxt = root.right;
                        break;
                    } else {
                        pre.right = root;
                        root = root.left;
                    }
                } else {
                    nxt = root.right;
                    break;
                }
            }
        }
    }
}
```
``` rust []
use std::{rc::Rc, cell::RefCell};
type T = Option<Rc<RefCell<TreeNode>>>;
macro_rules! b    { ($n:expr) => {$n.as_ref().unwrap().borrow()}; }
macro_rules! bmut { ($n:expr) => {$n.as_ref().unwrap().borrow_mut()}; }

impl Solution {
    pub fn get_all_elements(root1: T, root2: T) -> Vec<i32> {
        struct MorrisIter { nxtright: T, root: T }
        impl MorrisIter {
            fn new(root: T) -> Self {
                let mut res =  MorrisIter { nxtright: root.clone(), root }; 
                res.next();
                res
            }
            fn has_next(&self) -> bool { self.root.is_some() }
            fn peek(&self) -> i32 { b!(self.root).val }
            fn poll(&mut self) -> i32 { 
                let res = b!(self.root).val;
                Self::next(self);
                res
            }
            fn next(&mut self) {
                self.root = self.nxtright.clone();
                while let Some(node) = self.root.clone() {
                    if node.borrow().left.is_some() {
                        let mut pre = node.borrow().left.clone();
                        while b!(pre).right.is_some() && b!(pre).right != self.root { pre = pre.unwrap().borrow().right.clone(); }
                        if b!(pre).right == self.root {
                            _ = pre.unwrap().borrow_mut().right.take();
                            self.nxtright = b!(self.root).right.clone();
                            break;
                        } else {
                            bmut!(pre).right = self.root.clone();
                            self.root = node.borrow().left.clone();
                        }
                    } else {
                        self.nxtright = b!(self.root).right.clone();
                        break;
                    }
                }
            }
        }
        let (mut res, mut iter1, mut iter2) = (Vec::new(), MorrisIter::new(root1), MorrisIter::new(root2));
        while iter1.has_next() && iter2.has_next() {
            if iter1.peek() < iter2.peek() { res.push(iter1.poll()); } 
            else { res.push(iter2.poll()); }
        }
        while iter1.has_next() { res.push(iter1.poll()); }
        while iter2.has_next() { res.push(iter2.poll()); }
        res
    }
}
```