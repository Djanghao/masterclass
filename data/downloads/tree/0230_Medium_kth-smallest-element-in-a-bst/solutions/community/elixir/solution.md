# Simple solution with inorder traversal and early termination

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/6046288/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/6046288/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec kth_smallest(root :: TreeNode.t | nil, k :: integer) :: integer
  def kth_smallest(root, k) do
    root
    |> inorder(k, fn val, acc ->
      if acc === 1 do
        {:halt, val}
      else
        {:cont, acc - 1}
      end
    end)
    |> elem(1)
  end

  defp inorder(nil, acc, _fun) do
    {:cont, acc}
  end

  defp inorder(node, acc, fun) do
    with(
      {:cont, acc} <- inorder(node.left, acc, fun),
      {:cont, acc} <- fun.(node.val, acc)
    ) do
      inorder(node.right, acc, fun)
    end
  end
end
```