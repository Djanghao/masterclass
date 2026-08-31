# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/1825276/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/1825276/)

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
  @spec create_binary_tree(descriptions :: [[integer]]) :: TreeNode.t() | nil
  def create_binary_tree(descriptions) do
    {root, map} = find_root(descriptions)
    build_tree(root, map)
  end

  def find_root(descriptions) do
    {ps, cs, map} =
      descriptions
      |> Enum.reduce({MapSet.new(), MapSet.new(), %{}}, fn [p, c, is_left], {ps, cs, acc} ->
        {MapSet.put(ps, p), MapSet.put(cs, c),
         Map.update(acc, p, %{is_left => c}, fn v -> Map.put(v, is_left, c) end)}
      end)

    {MapSet.difference(ps, cs) |> MapSet.to_list() |> hd(), map}
  end

  def build_tree(nil, _map), do: nil

  def build_tree(val, map) do
    c = Map.get(map, val)

    if c == nil do
      %TreeNode{val: val}
    else
      l = build_tree(Map.get(c, 1), map)
      r = build_tree(Map.get(c, 0), map)
      %TreeNode{val: val, left: l, right: r}
    end
  end
end
```