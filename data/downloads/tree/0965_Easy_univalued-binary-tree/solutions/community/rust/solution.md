# Rust: DFS

**Author:** artyom_andreev
**Votes:** 2
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/970619/](https://leetcode.com/problems/univalued-binary-tree/solutions/970619/)

---

```rust
pub fn is_unival_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
	match root {
		Some(node) => {
			let node = node.borrow();

			Self::step(&node.left, node.val) && Self::step(&node.right, node.val)
		}
		None => true,
	}
}

fn step(node: &Option<Rc<RefCell<TreeNode>>>, val: i32) -> bool {
	match node {
		Some(node) => {
			let node = node.borrow();

			node.val == val && Self::step(&node.left, val) && Self::step(&node.right, val)
		}
		None => true,
	}
}
```