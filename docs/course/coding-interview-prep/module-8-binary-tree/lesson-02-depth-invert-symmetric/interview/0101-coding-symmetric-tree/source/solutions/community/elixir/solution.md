# [Rust] Iterative, [Elixir] Recursive

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/3290374/](https://leetcode.com/problems/symmetric-tree/solutions/3290374/)

---

# Rust
Iterative:
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn is_symmetric(root: OptNode) -> bool {
        if root.is_none() {
            return true;
        }
        let b = root.as_ref().unwrap().borrow();
        let mut v = vec![(b.left.clone(), b.right.clone())];
        while let Some(tuple) = v.pop() {
            match tuple {
                (None, None) => (),
                (Some(n1), Some(n2)) => {
                    let b1 = n1.borrow();
                    let b2 = n2.borrow();
                    if b1.val != b2.val {
                        return false;
                    }
                    v.push((b1.left.clone(), b2.right.clone()));
                    v.push((b1.right.clone(), b2.left.clone()));
                }
                _ => return false,
            }
        }
        true
    }
}
```
# Elixir
Recursive:
```elixir
defmodule Solution do
  @spec is_symmetric(root :: TreeNode.t | nil) :: boolean
  def is_symmetric(nil), do: true
  def is_symmetric(root) do
    mirror?(root.left, root.right)
  end

  defp mirror?(nil, nil), do: true
  defp mirror?(node1 = %TreeNode{val: x}, node2 = %TreeNode{val: x}) do
    mirror?(node1.left, node2.right) and mirror?(node1.right, node2.left)
  end
  defp mirror?(_, _), do: false
end
```