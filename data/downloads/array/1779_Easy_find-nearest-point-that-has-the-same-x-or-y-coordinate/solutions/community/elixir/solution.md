# Elixir, simple recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/4462027/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/4462027/)

---

# Approach
Iterate the points one by one, check for point validity, keep track of the smallest manhattan distance and it's respective point index.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec nearest_valid_point(x :: integer, y :: integer, points :: [[integer]]) :: integer
  def nearest_valid_point(x, y, points) do
    for [x1, y1] <- points, reduce: {nil, 0, -1} do
      {acc, cur_i, res_i} -> 
        cond do
          x1 != x and y1 != y -> {acc, cur_i + 1, res_i}
          true -> man_dist = abs(x1 - x) + abs(y1 - y)
                  if man_dist < acc, do: {man_dist, cur_i + 1, cur_i}, else: {acc, cur_i + 1, res_i}
        end
    end |> elem(2) 
  end
end
```