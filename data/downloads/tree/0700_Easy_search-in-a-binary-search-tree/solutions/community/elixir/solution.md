# Elixir, DFS, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4247053/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4247053/)

---

# Approach
Uses recursion to perform a depth first search and return the result node.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec search_bst(root :: TreeNode.t | nil, val :: integer) :: TreeNode.t | nil
  def search_bst(nil, val), do: nil
  def search_bst(root, val) do
    cond do
      val == root.val -> root
      val < root.val -> search_bst(root.left, val)
      true -> search_bst(root.right, val)
    end
  end
end
```