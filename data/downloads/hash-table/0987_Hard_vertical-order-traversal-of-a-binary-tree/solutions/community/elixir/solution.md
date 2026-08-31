# Elixir Stupid Solution

**Author:** tywhisky
**Votes:** 0
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2613695/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2613695/)

---

```elixir
defmodule Solution do
  @spec vertical_traversal(root :: TreeNode.t | nil) :: [[integer]]
  def vertical_traversal(root) do
    dfs(root, {0, 0}, [{root.val, 0, 0}])
    |> Enum.group_by(&elem(&1, 2), &{elem(&1, 0), elem(&1, 1)})
    |> Enum.sort_by(&elem(&1, 0))
    |> Enum.map(fn {_, list} -> 
      list
      |> Enum.sort_by(&elem(&1, 0))
      |> Enum.sort_by(&elem(&1, 1))
      |> Enum.map(&elem(&1, 0))
    end)
  end
  
  def dfs(%{left: nil, right: nil}, _, record), do: record

  def dfs(%{left: left, right: nil}, {row, col}, record) do
    dfs(left, {row + 1, col - 1}, [{left.val, row + 1, col - 1} | record])
  end

  def dfs(%{left: nil, right: right}, {row, col}, record) do
    dfs(right, {row + 1, col + 1}, [{right.val, row + 1, col + 1} | record])
  end

  def dfs(%{left: left, right: right}, {row, col}, record) do
    new_record = dfs(left, {row + 1, col - 1}, [{left.val, row + 1, col - 1} | record])
    dfs(right, {row + 1, col + 1}, [{right.val, row + 1, col + 1} | new_record])
  end
end
```

Just record the point of every node. But it's easy to understand.