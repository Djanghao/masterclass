# Rust DFS solution

**Author:** wddwycc
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1373733/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1373733/)

---

```rust
impl Solution {
    pub fn longest_consecutive(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let root = match root {
            Some(a) => a,
            None => return 0,
        };
        let mut ans = 0;
        Self::dfs(root, &mut ans);
        ans
    }

    fn dfs(root: Rc<RefCell<TreeNode>>, ans: &mut i32) -> (i32, i32) {
        let val = root.borrow().val;
        let mut up = 1;
        let mut down = 1;
        for child in [root.borrow().left.clone(), root.borrow().right.clone()].into_iter() {
            let child = match child {
                Some(a) => a,
                None => continue,
            };
            let child_val = child.borrow().val;
            let (child_up, child_down) = Self::dfs(child.clone(), ans);
            if val == child_val + 1 { down = down.max(child_down + 1); }
            if val == child_val - 1 { up = up.max(child_up + 1); }
        }
        *ans = (*ans).max(up + down - 1);
        (up, down)
    }
}
```