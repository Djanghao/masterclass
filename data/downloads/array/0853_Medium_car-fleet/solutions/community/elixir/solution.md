# Elixir - Sort & Tail Recursion

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet/solutions/3631022/](https://leetcode.com/problems/car-fleet/solutions/3631022/)

---

# Complexity
- Time complexity:
$$O(n\\log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec car_fleet(target :: integer, position :: [integer], speed :: [integer]) :: integer
  def car_fleet(target, positions, speeds) do
    cars =
      positions
      |> Stream.zip(speeds)
      |> Enum.sort(:desc)

    count_fleets(hd(cars), tl(cars), target, 1)
  end

  defp count_fleets(_, [], _, acc), do: acc

  # x1 > x2 is always true
  defp count_fleets({x1, v1}, [{x2, v2} | tail], target, acc)
      when (target - x1) * (v2 - v1) >= (x1 - x2) * v1 do
    count_fleets({x1, v1}, tail, target, acc)
  end

  defp count_fleets(_, [head | tail], target, acc) do
    count_fleets(head, tail, target, acc + 1)
  end
end
```