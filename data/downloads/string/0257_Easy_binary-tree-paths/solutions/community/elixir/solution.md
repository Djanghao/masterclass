# [Rust / Elixir] simple DFS

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/3117237/](https://leetcode.com/problems/binary-tree-paths/solutions/3117237/)

---

# Rust
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn binary_tree_paths(root: OptNode) -> Vec<String> {
        let mut ans = Vec::new();
        Self::dfs(&root, &mut Vec::new(), &mut ans);
        ans
    }

    fn dfs(node: &OptNode, curr: &mut Vec<String>, ans: &mut Vec<String>) {
        if let Some(n) = node.as_ref() {
            let b = n.borrow();
            curr.push(b.val.to_string());
            if b.left.is_none() && b.right.is_none() {
                ans.push(curr.join("->"));
            }
            else {
                Self::dfs(&b.left, curr, ans);
                Self::dfs(&b.right, curr, ans);
            }
            curr.pop();
        }
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec binary_tree_paths(root :: TreeNode.t | nil) :: [String.t]
  def binary_tree_paths(root, curr \\\\ [], ans \\\\ [])
  def binary_tree_paths(nil, _, ans), do: ans
  def binary_tree_paths(%TreeNode{val: x, left: nil, right: nil}, curr, ans) do
    [x | curr]
    |> Enum.reverse()
    |> Enum.join("->")
    |> then(&([&1 | ans]))
  end
  def binary_tree_paths(node, curr, ans) do
    ans = binary_tree_paths(node.left, [node.val | curr], ans)
    binary_tree_paths(node.right, [node.val | curr], ans)
  end
end
```