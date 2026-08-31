# Elixir DFS Solution

**Author:** frkbmr
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/4636591/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/4636591/)

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
  @spec vertical_order(root :: TreeNode.t | nil) :: [[integer]]
  def vertical_order(root) do
    # root of a binary tree, verticle order traversal
    # verticle order traversal is just tracking how far left you've gone and down 
    #traverse(root, 0, [])

    queue = [root]
    table = traverse(queue, 0, 0, %{})
    sorted_keys = Map.keys(table) |> Enum.sort

    #IO.inspect(table)
    Enum.reduce(sorted_keys, [], fn k, acc -> 
        v = table[k] |> Enum.reverse |> Enum.sort_by(&elem(&1, 1), :asc) |> Enum.map(& elem(&1, 0))
        [v | acc]
    end) |> Enum.reverse()
  end

  def traverse([], _col, _row, table), do: table
  def traverse([nil | _tl], _col, _row, table), do: table

  def traverse([node | tl], col, row, table) do
    table = Map.update(table, col, [{node.val, row}], fn existing ->
        [{node.val, row} | existing]
    end)

    #IO.inspect(table, charlists: :as_lists)

    table = traverse([node.left | tl], col - 1, row + 1, table)
    table = traverse([node.right | tl], col + 1, row + 1, table)

    table 
  end


end
```