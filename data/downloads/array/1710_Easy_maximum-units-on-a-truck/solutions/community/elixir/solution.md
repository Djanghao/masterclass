# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/4427996/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/4427996/)

---

# Approach
Sort the boxes based on the units. Iterate the sorted boxes and accumulate the result until the truck size is filled.

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec maximum_units(box_types :: [[integer]], truck_size :: integer) :: integer
  def maximum_units(box_types, truck_size) do
    sorted_box_types = Enum.sort(box_types, fn([_, x], [_, y]) -> x > y end)
    do_maximum_units(sorted_box_types, truck_size, 0)
  end

  defp do_maximum_units([[boxes, units] | tl], truck_size, acc) when truck_size > 0 do
    boxes_to_put = min(boxes, truck_size)
    do_maximum_units(tl, truck_size - boxes_to_put, acc + (boxes_to_put * units))
  end
  defp do_maximum_units(_, _, acc), do: acc
end
```