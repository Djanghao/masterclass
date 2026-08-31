# Elixir - Time: O(n^2) Space: O(1)

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/2909197/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/2909197/)

---

# Intuition
This is similar to pathing, where we can think about the current row and column, and that we want the minimum of the 3 options from the previous row.

# Approach
Add the value of the previous minimum to the current square to create the best path to that point. Get the minimum sum from the final row.

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(1)$$

# Code
```
defmodule Solution do
  @spec min_falling_path_sum(matrix :: [[integer]]) :: integer
  def min_falling_path_sum([last]), do: Enum.min(last)
  def min_falling_path_sum([prev, curr | rest]) do
    curr
    |> Enum.with_index()
    |> best_prev(prev)
    |> then(&min_falling_path_sum([&1 | rest]))
  end

  defp best_prev(curr_indexed, prev) do
    n = length(prev)

    Enum.reduce(curr_indexed, [], fn {val, col}, acc ->
      case col do
        0 -> Enum.take(prev, 2)
        _ -> Enum.slice(prev, col - 1, 3)
      end
      |> Enum.min()
      |> then(&([&1 + val | acc]))
    end)
    |> Enum.reverse()
  end
end
```