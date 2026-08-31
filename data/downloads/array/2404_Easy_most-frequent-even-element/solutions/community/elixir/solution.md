# Elixir, for comprehension reduce

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/4679694/](https://leetcode.com/problems/most-frequent-even-element/solutions/4679694/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec most_frequent_even(nums :: [integer]) :: integer
  def most_frequent_even(nums) do
    for x <- nums, rem(x, 2) == 0, reduce: {-1, 0, %{}} do
      {res, res_count, count_map} -> new_count = Map.get(count_map, x, 0) + 1
        count_map = Map.put(count_map, x, new_count)
        if new_count > res_count || (new_count == res_count && x < res),
        do: {x, new_count, count_map},
        else: {res, res_count, count_map}
    end |> elem(0)
  end
end
```