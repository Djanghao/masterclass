# [Rust / Elixir] easy solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/3199139/](https://leetcode.com/problems/invert-binary-tree/solutions/3199139/)

---

The easy streak continues...
# Rust
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn invert_tree(root: OptNode) -> OptNode {
        if let Some(n) = root.as_ref() {
            let mut b = n.borrow_mut();
            let left = b.left.take();
            b.left = Self::invert_tree(b.right.take());
            b.right = Self::invert_tree(left);
        }
        root
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec invert_tree(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def invert_tree(nil), do: nil
  def invert_tree(root = %TreeNode{left: l, right: r}) do
    %{root | left: invert_tree(r), right: invert_tree(l)}
  end
end
```