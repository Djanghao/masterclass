# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/4021171/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/4021171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 294ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 63.7MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec check_valid_grid(grid :: [[integer]]) :: boolean
  def check_valid_grid(grid) do
    {_, dic} =
      Enum.reduce(grid, {0, %{}}, fn row, {i, dic} ->
        {_, dic} =
          Enum.reduce(row, {0, dic}, fn col, {j, dic} ->
            {j + 1, Map.put(dic, col, {i, j})}
          end)
        {i + 1, dic}
      end)
    n = Enum.count(grid)**2
    {i, j} = Map.get(dic, 0)
    if i != 0 or j != 0 do
      false
    else
      Enum.reduce_while(1..n-1, {true, i, j}, fn idx, {_, i, j} ->
        {n_i, n_j} = Map.get(dic, idx)
        if abs(n_i - i) == 1 and abs(n_j - j) == 2 or abs(n_i - i) == 2 and abs(n_j - j) == 1 do
          {:cont, {true, n_i, n_j}}
        else
          {:halt, {false, n_i, n_j}}
        end
      end) |> elem(0)
    end
  end
end

```