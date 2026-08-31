# rust (0ms)

**Author:** theshank
**Votes:** 5
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/556967/](https://leetcode.com/problems/increasing-order-search-tree/solutions/556967/)

---

```rust
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn increasing_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(node) = root.clone() {
            let mut vals = Solution::walk(root.clone());
            vals.reverse();
            let fst = vals.pop().unwrap();
            *node.borrow_mut() = TreeNode::new(fst);
            node.borrow_mut().right = Solution::inc_bst(vals)
        }
        root
    }

    fn inc_bst(mut vals: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        if vals.is_empty() {
            return None;
        }
        let v = vals.pop().unwrap();
        let node = Rc::new(RefCell::new(TreeNode::new(v)));
        node.borrow_mut().right = Solution::inc_bst(vals);
        Some(node)
    }

    fn walk(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut vals: Vec<i32> = vec![];
        if let Some(node) = root {
            let node = node.borrow();
            vals.extend(Solution::walk(node.left.clone()));
            vals.push(node.val);
            vals.extend(Solution::walk(node.right.clone()));
        }
        vals
    }
}
```