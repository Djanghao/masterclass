# Elixir DFS Solution

**Author:** tywhisky
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/2977708/](https://leetcode.com/problems/unique-paths-iii/solutions/2977708/)

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
defmodule Solution do
  @spec unique_paths_iii(grid :: [[integer]]) :: integer
  def unique_paths_iii(grid) do
    map =
      grid
      |> Enum.with_index()
      |> Enum.flat_map(fn {row, row_index} ->
        row
        |> Enum.with_index()
        |> Enum.map(fn
          {1, col_index} -> {{row_index, col_index}, :start}
          {2, col_index} -> {{row_index, col_index}, :end}
          {0, col_index} -> {{row_index, col_index}, :road}
          {-1, col_index} -> {{row_index, col_index}, :wall}
        end)
      end)
      |> Map.new()

    {start, _} = Enum.find(map, &(elem(&1, 1) == :start))

    result = 
    Task.async(fn -> 
      dfs(start, map)
     end)
    |> Task.await()

    result || 0
  end

  def dfs({row, col} = curr, map) do
    if map[curr] == :end do
      if not Enum.any?(map, fn {_v, k} -> k == :road end) do
        Process.put(:result, Process.get(:result, 0) + 1)
      end
      Process.get(:result)
    else
      [{row + 1, col}, {row - 1, col}, {row, col + 1}, {row, col - 1}]
      |> Enum.filter(&(map[&1] in [:road, :end]))
      |> Enum.reduce(nil, fn crood, _acc ->
        dfs(crood, Map.drop(map, [curr]))
      end)
    end
  end
end
```