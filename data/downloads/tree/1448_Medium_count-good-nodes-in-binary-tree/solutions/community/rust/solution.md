# Rust | Iterative | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/2512770/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/2512770/)

---

First, the algorithm. "The path from root to X" hints towards iterating over the tree. We should determine nodes for which there are "no nodes with a value greater than X" along the path, so we'll keep track of the maximum value of the nodes so far along each path, and count the nodes which have a value equal to or greater than the current max value.

Some notes about the implementation:
* I prefer an iterative tree-walking algorithm over recursive when possible, for efficiency, even if it becomes more verbose than the recursive equivalent.
* In LeetCode problems in general when given a tree, you are rarely asked to return it. So instead of messing around with cloning the `Rc`s, I prefer just moving the given `Rc`s around as needed. When you clone `Rc`s, the reference count has to be incremented, and then when you drop the clone, it has to be decremented again. This is totally unnecessary, and something we can avoid by move semantics in this context.
* For this problem, we keep track of the max path value in the stack elements along with the node itself.
* Given the constraints, I chose `i32::MIN` as the sentinel for "no previous value". With a node minimum value of -2^31, we would have been forced to use the more correct, but also more verbose, type `Option<i32>` for the max path value, and indicate "no previous value" with `None`.

```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn good_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut stack = vec![(root, i32::MIN)];
        let mut rez = 0;

        while let Some(tuple) = stack.pop() {
            if let (Some(node_rc), mut max_val) = tuple {
                let mut node_ref = node_rc.borrow_mut();
                if node_ref.val >= max_val {
                    rez += 1;
                    max_val = node_ref.val;
                }
                stack.push((node_ref.left.take(), max_val));
                stack.push((node_ref.right.take(), max_val));
            }
        }
        
        rez
    }
}
```