# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/4428841/](https://leetcode.com/problems/sum-of-unique-elements/solutions/4428841/)

---

# Approach
Keep track of the count of the number using a map and accumulate the result based on the count of each number in the list.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec sum_of_unique(nums :: [integer]) :: integer
  def sum_of_unique(nums), do: do_sum_of_unique(nums, %{}, 0)

  defp do_sum_of_unique([hd | tl], count_map, acc) do
    case Map.get(count_map, hd, 0) do
      x when x > 1 -> do_sum_of_unique(tl, count_map, acc)
      1 -> do_sum_of_unique(tl, Map.put(count_map, hd, 2), acc - hd)
      0 -> do_sum_of_unique(tl, Map.put(count_map, hd, 1), acc + hd)
    end
  end
  defp do_sum_of_unique(_, _, acc), do: acc
end
```