# Elixir  LCA Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/2114108/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/2114108/)

---

```elixir
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
  @spec get_directions(root :: TreeNode.t() | nil, start_value :: integer, dest_value :: integer) ::
          String.t()
  def get_directions(root, start_value, dest_value) do
    {p1, p2} = remove_common(find(root, start_value), find(root, dest_value))
    s1 = p1 |> Enum.join() |> String.replace(["L", "R"], "U")
    s2 = p2 |> Enum.join()
    s1 <> s2
  end

  def remove_common([], []), do: {[], []}
  def remove_common(l1, []), do: {l1, []}
  def remove_common([], l2), do: {[], l2}
  def remove_common([x | xs], [x | ys]), do: remove_common(xs, ys)
  def remove_common(l1, l2), do: {l1, l2}

  def find(nil, _v), do: nil
  def find(%TreeNode{val: v}, v), do: []

  def find(root, v) do
    root.left |> find(v) |> add_path("L") ||
      root.right |> find(v) |> add_path("R")
  end

  def add_path(nil, _d), do: nil
  def add_path(l, d), do: [d | l]
end
```