# Rust DFS solution

**Author:** wddwycc
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132658/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132658/)

---

```rust
impl Solution {
    pub fn flip_match_voyage(root: Option<Rc<RefCell<TreeNode>>>, voyage: Vec<i32>) -> Vec<i32> {
        let root = match root {
            Some(a) => a,
            None => return vec![-1],
        };

        let mut res = vec![];
        let mut stack = vec![root];

        for cur in 0..voyage.len() {
            // check if matches, if not return [-1],
            // compare child_left to next_v, if match: push r, l to stack | else: push l, r to stack, also push node.val to res
            let node = stack.pop().unwrap();
            if node.borrow().val != voyage[cur] {
                return vec![-1];
            }
            match (&node.borrow().left, &node.borrow().right) {
                (Some(l), Some(r)) => {
                    if l.borrow().val == voyage[cur + 1] {
                        stack.push(r.clone());
                        stack.push(l.clone());
                    } else {
                        stack.push(l.clone());
                        stack.push(r.clone());
                        res.push(node.borrow().val);
                    }
                }
                (Some(a), _) | (_, Some(a)) => {
                    stack.push(a.clone());
                }
                _ => (),
            };
        }
        res
    }
}
```