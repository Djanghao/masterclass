# elixir recursion approach

**Author:** ajaxsession
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2538408/](https://leetcode.com/problems/binary-tree-pruning/solutions/2538408/)

---

```
defmodule Solution do
  @spec prune_tree(root :: TreeNode.t() | nil) :: TreeNode.t() | nil
  def prune_tree(root) do
    rec(root)
  end

  def rec(root) do
    if !containsOne(root) do
      nil
    else
      %TreeNode{root | val: root.val, left: bfs(root.left), right: bfs(root.right)}
    end
  end

  def containsOne(root) do
    if root == nil do
      false
    else
      root.val == 1 || containsOne(root.left) || containsOne(root.right)
    end
  end
end
```