# Rust DFS solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413525/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413525/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;

const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn max_product(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut sums = Vec::new();
        Self::dfs(&root, &mut sums);
        ((0..sums.len() - 1)
            .map(|i| sums[i] * (sums[sums.len() - 1] - sums[i]))
            .max()
            .unwrap()
            % MOD) as i32
    }
    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, sums: &mut Vec<i64>) -> i64 {
        if let Some(n) = node {
            let sum = n.borrow().val as i64
                + Self::dfs(&n.borrow().left, sums)
                + Self::dfs(&n.borrow().right, sums);
            sums.push(sum);
            sum
        } else {
            0
        }
    }
}
```