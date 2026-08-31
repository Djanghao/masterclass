# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/2107820/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/2107820/)

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
  @spec btree_game_winning_move(root :: TreeNode.t() | nil, n :: integer, x :: integer) :: boolean
  def btree_game_winning_move(root, n, x) do
    root
    |> find(x)
    |> then(fn t -> {count_subtree(t.left), count_subtree(t.right)} end)
    |> then(fn {l, r} ->
      half = div(n, 2)
      l > half || r > half || l + r + 1 <= half
    end)
  end

  def find(nil, _x), do: nil

  def find(t, x) when t.val == x, do: t

  def find(t, x) do
    find(t.left, x) || find(t.right, x)
  end

  def count_subtree(nil), do: 0

  def count_subtree(t) do
    1 + count_subtree(t.left) + count_subtree(t.right)
  end
end
```