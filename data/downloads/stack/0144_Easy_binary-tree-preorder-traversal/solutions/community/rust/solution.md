# [Rust] Iterative & recursive | 0ms

**Author:** tmtappr
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3022151/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3022151/)

---

# Approach
The recursive version descends the tree through recursive calls with their state pushed on the execution stack. The traversal prefers the left branch over the right, and the output is built before descending either branch.

The iterative version is very similar. It also uses a stack to preserve the state of traversal. The right branch is pushed before the left, since the left branch needs to be popped before the right. The output is updated before pushing any branches.

The cloning operations in the code don't clone the actual tree nodes, what's being cloned are the smart pointers that reference them. I don't believe there's any value in avoiding cloning these.

# Complexity
- Time complexity: $$O(n)$$ Each node is visited in turn - no searching.
- Space complexity: $$O(n + log_2(n))$$ *auxiliary* memory used. The returned vector accounts for the $$n + $$ term. For the $$log_2(n)$$ term, the memory used when pushing an execution stack frame counts in the same way the memory used when pushing an iterative stack item counts. The height of the tree determines the max number of stack items that will be piled up at any time during traversal. Assuming the tree is balanced, the height will be $$log_2(n)$$.

# Code
```rust
use std::rc::Rc;
use std::cell::RefCell;

type NodeOpt = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn preorder_traversal(root: NodeOpt) -> Vec<i32> {
        Self::preorder_traversal_iter(root)
        //let mut result = vec![];
        //Self::preorder_traversal_recurs(root, &mut result);
        //result
    }
    fn preorder_traversal_recurs(root: NodeOpt, result: &mut Vec<i32>) {
        if let Some(pnode) = root {
            let node = pnode.borrow();
            result.push(node.val);
            Self::preorder_traversal_recurs(node.left.clone(), result);
            Self::preorder_traversal_recurs(node.right.clone(), result);
        }
    }
    fn preorder_traversal_iter(root: NodeOpt) -> Vec<i32> {
        let mut result = vec![];
        let mut stack  = vec![root];
        while let Some(node_opt) = stack.pop() {
            if let Some(pnode) = node_opt {
                let node = pnode.borrow();
                result.push(node.val);
                stack.push(node.right.clone());
                stack.push(node.left.clone());
            }
        }
        result
    }
}
```