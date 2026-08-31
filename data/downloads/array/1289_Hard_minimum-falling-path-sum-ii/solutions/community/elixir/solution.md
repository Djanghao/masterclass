# DP

**Author:** AshishYUO
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5795992/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5795992/)

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
```elixir []
defmodule Solution do
  @spec min_falling_path_sum(grid :: [[integer]]) :: integer
  def min_falling_path_sum(grid) do
    grid
        |> Enum.reduce(nil, fn row, acc -> 
            cond do 
                acc == nil -> row
                true -> eval([1000000], acc, row)
            end |> pad_max
        end)
        |> Enum.min()
  end

  @spec eval(past_acc :: [integer], arr :: [integer], curr :: [integer]) :: [integer]
  defp eval(_, _, []), do: []
  defp eval(past, [first,second|rest], [curr|rem]) do
    [min(Enum.min(past ++ [first]) + curr, Enum.min(rest) + curr)|eval(past ++ [first], [second|rest], rem)]
  end

  defp pad_max(grid) do
    [1000000|grid] ++ [1000000]
  end
end
```