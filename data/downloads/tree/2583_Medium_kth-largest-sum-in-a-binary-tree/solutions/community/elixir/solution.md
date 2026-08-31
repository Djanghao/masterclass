# Elixir - Level-order traversal

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5949870/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5949870/)

---

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
  @spec kth_largest_level_sum(root :: TreeNode.t | nil, k :: integer) :: integer
  def kth_largest_level_sum(root, k) do
    root
    |> List.wrap()
    |> level_order_reduce(0, k, :gb_sets.new())
  end

  defp level_order_reduce([], _i, k, pq) do
    if :gb_sets.size(pq) < k do
      -1
    else
      pq |> :gb_sets.smallest() |> elem(0)
    end
  end

  # `i` serves as a tie-breaker.
  defp level_order_reduce(layer, i, k, pq) do
    sum = layer |> Stream.map(& &1.val) |> Enum.sum()

    pq = :gb_sets.insert({sum, i}, pq)

    pq = if :gb_sets.size(pq) > k do
      # Remove the smallest element.
      pq |> :gb_sets.take_smallest() |> elem(1)
    else
      pq
    end

    next_layer = layer |> Stream.flat_map(&[&1.left, &1.right]) |> Enum.reject(&is_nil/1)

    level_order_reduce(next_layer, i + 1, k, pq)
  end
end
```