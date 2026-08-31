# Elixir solution

**Author:** 23bohdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/3386567/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/3386567/)

---

# Code
```
defmodule Solution do
  @spec min_cost_to_move_chips(position :: [integer]) :: integer
  def min_cost_to_move_chips(position) do
    position
    |> Enum.split_with(fn p -> rem(p, 2) == 0 end)
    |> Tuple.to_list()
    |> Enum.map(&length/1)
    |> Enum.min()
  end
end
```