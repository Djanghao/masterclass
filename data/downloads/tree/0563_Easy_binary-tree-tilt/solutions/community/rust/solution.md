# Rust: tuple solution (0 ms 2.6 MB)

**Author:** artyom_andreev
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/928017/](https://leetcode.com/problems/binary-tree-tilt/solutions/928017/)

---

```rust
pub fn find_tilt(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
	let (_, tilt) = Solution::step(&root);
	tilt
}

// step does a step in dfs, returns sum of tree values and sum of tree tilts.
fn step(node: &Option<Rc<RefCell<TreeNode>>>) -> (i32, i32) {
	let node = match node {
		Some(node) => node.borrow(),
		None => return (0, 0),
	};

	let (left_sum, left_tilt) = Solution::step(&node.left);
	let (right_sum, right_tilt) = Solution::step(&node.right);

	(
		node.val + left_sum + right_sum,
		(left_sum - right_sum).abs() + left_tilt + right_tilt,
	)
}
```