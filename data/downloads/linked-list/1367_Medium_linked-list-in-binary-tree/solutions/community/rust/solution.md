# Rust with KMP algorithm

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748547/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748547/)

---

# Approach
Convert the linked list to a `Vec` and also make a LPS `Vec` for it, then use KMP algorithm for efficient searching.
# Complexity
- Time complexity: $$O(n + m)$$

- Space complexity: $$O(n + h)$$

Where $$n$$ is length of linked list, $$m$$ is number of binary tree nodes, and $$h$$ is depth of the binary tree.

# Code
```rust []
use std::rc::Rc;
use std::cell::RefCell;
type OptLNode = Option<Box<ListNode>>;
type OptTNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn is_sub_path(head: OptLNode, root: OptTNode) -> bool {
        let n = head.unwrap();
        let mut v = vec![n.val];
        let mut lps = vec![0];
        let mut node = n.next;
        let mut i = 0;
        while let Some(n) = node {
            v.push(n.val);
            while n.val != v[i] && i != 0 {
                i = lps[i - 1];
            }
            if n.val == v[i] {
                i += 1;
            }
            lps.push(i);
            node = n.next;
        }
        Self::kmp_dfs(&root, 0, &v, &lps)
    }

    fn kmp_dfs(node: &OptTNode, mut i: usize, v: &Vec<i32>, lps: &Vec<usize>) -> bool {
        match node.as_ref() {
            None => false,
            Some(n) => {
                let b = n.borrow();
                while b.val != v[i] && i != 0 {
                    i = lps[i - 1];
                }
                if b.val == v[i] {
                    i += 1;
                }
                i == v.len()
                || Self::kmp_dfs(&b.left, i, v, lps)
                || Self::kmp_dfs(&b.right, i, v, lps)
            }
        }
    }
}
```