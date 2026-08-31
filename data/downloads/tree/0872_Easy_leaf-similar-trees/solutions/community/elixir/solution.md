# [Rust / Elixir] Recursive

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/2889016/](https://leetcode.com/problems/leaf-similar-trees/solutions/2889016/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Rust
```rust
use std::rc::Rc;
use std::cell::RefCell;

type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn leaf_similar(root1: OptNode, root2: OptNode) -> bool {
        Self::leaf_seq(&root1, Vec::new()) ==
        Self::leaf_seq(&root2, Vec::new())
    }

    fn leaf_seq(node: &OptNode, mut v: Vec<i32>) -> Vec<i32> {
        if let Some(n) = node.as_ref() {
            let b = n.borrow();
            if b.left.is_none() && b.right.is_none() {
                v.push(b.val);
            }
            v = Self::leaf_seq(&b.left, v);
            v = Self::leaf_seq(&b.right, v);
        }
        v
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec leaf_similar(root1 :: TreeNode.t | nil, root2 :: TreeNode.t | nil) :: boolean
  def leaf_similar(root1, root2) do
    leaf_seq([], root1) == leaf_seq([], root2)
  end

  defp leaf_seq(list, nil), do: list
  defp leaf_seq(list, node) do
    if node.left == nil and node.right == nil do
      [node.val | list]
    else
      leaf_seq(list, node.left)
      |> leaf_seq(node.right)
    end
  end
end
```