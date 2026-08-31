# O(n) Morris Approach Clean soln

**Author:** ozzyozbourne
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/5753006/](https://leetcode.com/problems/recover-binary-search-tree/solutions/5753006/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
final class Solution {
    private TreeNode first, second, prev;
    public void recoverTree(final TreeNode r) {
        final Consumer<TreeNode> verify = root -> {
            if (this.prev == null || this.prev.val < root.val) {
                this.prev = root;
                return;
            }
            if (this.first == null){
                this.first = prev;
                this.second = root;
            } else this.second = root;
        };
        final Consumer<TreeNode> morris = root -> {
            while (root != null){
                if (root.left != null){
                    var pre = root.left;
                    while (pre.right != null && pre.right != root) pre = pre.right;
                    if (pre.right != null){
                        verify.accept(root);
                        pre.right = null;
                        root = root.right;
                    } else {
                        pre.right = root;
                        root = root.left;
                    }
                } else {
                    verify.accept(root);
                    root = root.right;
                }
            }
        };
        morris.accept(r);
        final int temp = second.val;
        second.val = first.val;
        first.val = temp;
    }
}
```
``` python []
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        first, second, prev = None, None, None
        def verify():
            nonlocal root, first, second, prev
            if not prev or prev.val < root.val: 
                prev = root
                return
            if not first:
                first = prev
                second = root
            else: 
                second = root
        def morris():
            nonlocal root
            while root: 
                if root.left:
                    pre = root.left
                    while pre.right and pre.right is not root: pre = pre.right
                    if pre.right:
                        verify()
                        pre.right = None
                        root = root.right
                    else: 
                        pre.right = root
                        root = root.left
                else:
                    verify()
                    root = root.right
        morris()
        first.val, second.val = second.val, first.val
```
``` rust []
use std::{rc::Rc, cell::RefCell, mem::swap};
type T = Option<Rc<RefCell<TreeNode>>>;
macro_rules! b    { ($n:expr) => { $n.as_ref().unwrap().borrow() }; }
macro_rules! bmut { ($n:expr) => { $n.as_ref().unwrap().borrow_mut() }; }

impl Solution {
    pub fn recover_tree(root: &mut T) {
        let (mut first, mut second, mut prev, mut root): (T, T, T, T) = (None, None, None, root.clone());
        let mut verify = |root: &T| {
            if prev.is_none() || b!(prev).val < b!(root).val {
                prev = root.clone();
                return;
            }
            if first.is_none() {
                first = prev.clone();
                second = root.clone();
            } else {
                second = root.clone()
            }
        };
        let mut morris = || {
            while let Some(node) = root.clone() {
                if node.borrow().left.is_some() {
                    let mut pre = node.borrow().left.clone();
                    while b!(pre).right.is_some() && b!(pre).right != root { pre = pre.unwrap().borrow().right.clone(); }
                    if b!(pre).right.is_some() {
                        verify(&root);
                        _ = pre.unwrap().borrow_mut().right.take();
                        root = node.borrow().right.clone();
                    } else {
                        pre.unwrap().borrow_mut().right = root.clone();
                        root = node.borrow().left.clone();
                    }
                } else {
                    verify(&root);
                    root = node.borrow().right.clone();
                }
            }
        };
        morris();
        swap(&mut bmut!(first).val, &mut bmut!(second).val);
    }
}
```