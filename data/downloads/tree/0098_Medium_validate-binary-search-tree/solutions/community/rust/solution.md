# Rust : YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 6
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/2409078/](https://leetcode.com/problems/validate-binary-search-tree/solutions/2409078/)

---

The great `i64` helps us so much against those sneaky test cases.
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn is_valid_bst(root: OptNode) -> bool {
        Self::is_valid(&root, i32::MIN as i64 - 1, i32::MAX as i64 + 1)
    }
    
    fn is_valid(node: &OptNode, gt: i64, lt: i64) -> bool {
        match node.as_ref() {
            None => true,
            Some(n) => {
                let b = n.borrow();
                (b.val as i64) > gt && (b.val as i64) < lt
                    && Self::is_valid(&b.left, gt, b.val as i64)
                    && Self::is_valid(&b.right, b.val as i64, lt)
            }
        }
    }
}
```