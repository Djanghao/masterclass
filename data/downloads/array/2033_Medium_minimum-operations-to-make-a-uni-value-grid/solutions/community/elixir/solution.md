# Simple solution with elegant elixir code

**Author:** linhpduc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/5051189/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/5051189/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec min_operations(grid :: [[integer]], x :: integer) :: integer
  def min_operations(grid, x) do
    l = grid |> List.flatten()
    r = rem(List.first(l), x)
    Enum.all?(l, fn i -> rem(i, x) == r end)
    |> case do
      false -> -1
      true  ->
        m = median(l)
        l |> Enum.map(fn i -> abs(div(i-r, x) - div(m, x)) end) |> Enum.sum()
    end
  end

  defp median(list) do
    i = list |> length() |> div(2)
    list |> Enum.sort() |> Enum.at(i)
  end
end
```