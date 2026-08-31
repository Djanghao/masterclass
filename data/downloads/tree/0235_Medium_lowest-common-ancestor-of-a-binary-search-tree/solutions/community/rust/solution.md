# Rust recursive & iterative

**Author:** s0l0ist
**Votes:** 3
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/2106593/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/2106593/)

---

Rust recursive
```rust
pub fn lowest_common_ancestor(
        root: Option<Rc<RefCell<TreeNode>>>,
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        // Assume these will be present given the problem statement:
        // "p and q will exist in the BST."
        let p_val = p.unwrap().borrow().val;
        let q_val = q.unwrap().borrow().val;

        // BST properties:
        // - LHS < ROOT
        // - RHS > ROOT
        // We can recursively dive into each side depending the
        // value of the current node we are looking at.
        fn dfs(
            node: &Option<Rc<RefCell<TreeNode>>>,
            p: i32,
            q: i32,
            res_ptr: &mut Option<Rc<RefCell<TreeNode>>>,
        ) {
            match node {
                Some(n_rc) => {
                    let n = n_rc.borrow();
                    // update our pointer each iteration
                    *res_ptr = node.clone();

                    // if the root is larger than our params,
                    // then we know we can go left
                    if n.val > p && n.val > q {
                        dfs(&n.left, p, q, res_ptr)
                    }
                    // if the root is less than our params,
                    // then we know we can go right
                    if n.val < p && n.val < q {
                        dfs(&n.right, p, q, res_ptr)
                    }
                }
                None => (),
            }
        }

        let mut res = None;
        let mut res_ptr = &mut res;
        dfs(&root, p_val, q_val, &mut res_ptr);
        res
    }
```


iterative

```rust
pub fn lowest_common_ancestor(
        root: Option<Rc<RefCell<TreeNode>>>,
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        let p_val = p.unwrap().borrow().val;
        let q_val = q.unwrap().borrow().val;
        let mut root = root;
        while let Some(node) = root.clone() {
            let n = node.borrow();

            if n.val > p_val && n.val > q_val {
                root = n.left.clone();
                continue;
            }
            if n.val < p_val && n.val < q_val {
                root = n.right.clone();
                continue;
            }

            return root;
        }
        root
    }
```