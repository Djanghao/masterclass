# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4669163/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4669163/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec arithmetic_triplets(nums :: [integer], diff :: integer) :: integer
  def arithmetic_triplets(nums, diff) do
    for x <- nums, set = MapSet.new(nums), MapSet.member?(set, x + diff),
        MapSet.member?(set, x + 2 * diff), reduce: 0 do
      acc -> acc + 1
    end
  end
end
```