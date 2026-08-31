# Elixir, Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/4585754/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/4585754/)

---

# Approach
Sort both lists, iterate the lists, find the absolute difference of items from both the lists and accumulate the difference

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec min_moves_to_seat(seats :: [integer], students :: [integer]) :: integer
  def min_moves_to_seat(seats, students), do: do_min_moves_to_seat(Enum.sort(seats), Enum.sort(students), 0)

  defp do_min_moves_to_seat([hd | tl], [hd1 | tl1], acc) do
    do_min_moves_to_seat(tl, tl1, acc + abs(hd - hd1))
  end
  defp do_min_moves_to_seat(_, _, acc), do: acc
end
```