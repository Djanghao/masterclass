# Elixir, DFS, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/4301213/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/4301213/)

---

# Approach
Uses a map to store the parent and depth values of x and y after traversing the binary tree. Compares the values in the map and returns the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
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
  @spec is_cousins(root :: TreeNode.t | nil, x :: integer, y :: integer) :: boolean
  def is_cousins(root, x, y) do
    acc = get_parent_depth(root, x, y, nil, 0, %{})
    {p1, d1} = acc[x]
    {p2, d2} = acc[y]
    p1 != p2 and d1 == d2
  end 

  defp get_parent_depth(%TreeNode{val: v, left: left, right: right}, x, y, parent, depth, acc) when map_size(acc) != 2 do
    acc = if v == x, do: Map.put(acc, x, {parent, depth}), else: acc
    acc = if v == y, do: Map.put(acc, y, {parent, depth}), else: acc
    acc = get_parent_depth(left, x, y, v, depth + 1, acc)
    get_parent_depth(right, x, y, v, depth + 1, acc)
  end
  defp get_parent_depth(_, _, _, _, _, acc), do: acc
end
```