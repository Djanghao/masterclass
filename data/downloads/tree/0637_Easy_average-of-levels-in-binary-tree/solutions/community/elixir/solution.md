# Elixir - DFS

**Author:** Aetherus
**Votes:** 3
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516481/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516481/)

---

```elixir
defmodule Solution do
  @spec average_of_levels(root :: TreeNode.t | nil) :: [float]
  def average_of_levels(root) do
    %{}
    |> accumulate(root, 0)
    |> Stream.map(fn {level, {sum, count}} -> {level, sum / count} end)
    |> Enum.sort()
    |> Enum.map(&elem(&1, 1))
  end
     
  @spec accumulate(acc, nil | TreeNode.t, level) :: acc
        when level: non_neg_integer,
		     acc: %{
               optional(level) => {sum :: integer, count :: pos_integer}
             }
  defp accumulate(acc, nil, _), do: acc
                        
  defp accumulate(acc, node, level) do
    acc
    |> Map.update(level, {node.val, 1}, fn {sum, count} ->
      {sum + node.val, count + 1}
    end)
    |> accumulate(node.left, level + 1)
    |> accumulate(node.right, level + 1)
  end
end
```