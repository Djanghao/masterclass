# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4333783/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4333783/)

---

# Approach
The number of minimum moves required to traverse from point [x1, y1] and [x2, y2] can be obtained by max(abs(x1 - x2), abs(y1 - y2)). Iterate the points and accumulate the total moves required for all the points.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_time_to_visit_all_points(points :: [[integer]]) :: integer
  def min_time_to_visit_all_points(points), do: do_min_time_to_visit_all_points(points, 0)

  defp do_min_time_to_visit_all_points([p1 | [p2 | _] = tl], moves), do: do_min_time_to_visit_all_points(tl, moves + distance(p1, p2))
  defp do_min_time_to_visit_all_points([_], moves), do: moves

  defp distance([x1, y1], [x2, y2]), do: max(abs(x1 - x2), abs(y1 - y2))
end
```