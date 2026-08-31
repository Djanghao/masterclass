# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/4779404/](https://leetcode.com/problems/furthest-point-from-origin/solutions/4779404/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec furthest_distance_from_origin(moves :: String.t) :: integer
  def furthest_distance_from_origin(moves) do
    count_map = for <<x <- moves>>, reduce: %{?L => 0, ?R => 0, ?_ => 0} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end
    abs(count_map[?L] - count_map[?R]) + count_map[?_]
  end
end
```