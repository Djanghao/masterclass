# Elixir, O(n³), uses for comprehension and map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/4574236/](https://leetcode.com/problems/count-special-quadruplets/solutions/4574236/)

---

# Approach
Iterate the numbers and generate a val => [indexes] map. Convert the list of nums into a tuple for index based access. Use a for comprehension to iterate a, b, c index combinations, calculate their sum, check if the sum is present as an element in the val_i_map, check if the indexes of that sum element is greater than c and accumulate the result.

# Complexity
- Time complexity:
O(n\xB3)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_quadruplets(nums :: [integer]) :: integer
  def count_quadruplets(nums) do
    {val_i_map, size} = for x <- nums, reduce: {%{}, 0} do
      {map, i} -> {Map.update(map, x, [i], &[i | &1]), i + 1}
    end
    tuple = List.to_tuple(nums)
    for a <- 0..size-4, b <- 1..size-3, c <- 2..size-2, a < b, b < c,
        sum = get_sum(tuple, a, b, c), reduce: 0 do
      acc -> acc + Enum.count(Map.get(val_i_map, sum, []), &(&1 > c))
    end
  end

  defp get_sum(tuple, a, b, c), do: elem(tuple, a) + elem(tuple, b) + elem(tuple, c)
end
```