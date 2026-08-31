# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/4766276/](https://leetcode.com/problems/total-distance-traveled/solutions/4766276/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec distance_traveled(main_tank :: integer, additional_tank :: integer) :: integer
  def distance_traveled(main_tank, additional_tank), do: do_distance(main_tank, additional_tank, 0)

  defp do_distance(main, additional, dist) when main >= 5 do
    additional_injections = div(main, 5)
    remaining_main_litres = rem(main, 5) + min(additional_injections, additional)
    remaining_additional_litres = (additional - additional_injections) |> max(0)
    distance = dist + (additional_injections * 5 * 10)
    do_distance(remaining_main_litres, remaining_additional_litres, distance)
  end
  defp do_distance(main, _, dist), do: dist + main * 10
end
```