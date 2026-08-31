# Elixir solution

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538179/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538179/)

---

# Intuition
We need to traverse from the `start` node

# Approach
Transform the Binary tree into a undirected graph.
Then traverse the tree (DFS) to find the furthest node

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
  @spec amount_of_time(root :: TreeNode.t | nil, start :: integer) :: integer
  def amount_of_time(root, start) do
    build_graph(%{}, root)
    |> traverse(start, 0, nil)
  end

  defp traverse(_graph, nil, depth, _prev), do: depth

  defp traverse(graph, node, depth, prev) do
    graph
    |> Map.get(node, [])
    |> List.delete(prev)
    |> Enum.reduce(depth, &(traverse(graph, &1, depth + 1, node) |> max(&2)))
  end

  defp build_graph(graph, nil), do: graph

  defp build_graph(graph, node) do
    graph
    |> add(node, node.left)
    |> build_graph(node.left)
    |> add(node, node.right)
    |> build_graph(node.right)
  end

  defp add(graph, _n, nil), do: graph

  defp add(graph, n1, n2) do
    graph
    |> Map.update(n1.val, [n2.val], &[n2.val | &1])
    |> Map.update(n2.val, [n1.val], &[n1 | &1])
  end
end
```