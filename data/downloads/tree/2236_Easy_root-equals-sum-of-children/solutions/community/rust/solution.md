# ✅ [Rust] 0 ms, simple solution (with detailed comments)

**Author:** iablokov
**Votes:** 10
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2603021/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2603021/)

---

This [**solution**](https://leetcode.com/submissions/detail/804824674/) employs simple operations with smart pointers. It demonstrated **0 ms runtime (100.00%)** and used **2.1 MB memory (67.14%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution 
{
    pub fn check_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool 
    {
        // unfortunately, in Rust the use of smart pointers
        // is challenging due to security issues;
        // also, an Option requires unwrapping...
        
        // [1] unpack smart pointer and borrow TreeNode
        let root_node = root.as_ref().unwrap().borrow();

        // [2] unpack left & right smart pointers and borrow their TreeNodes
        let left_node = root_node.left.as_ref().unwrap().borrow();
        let right_node = root_node.right.as_ref().unwrap().borrow();

        root_node.val == left_node.val + right_node.val
    }
}
```
