# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/4668956/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/4668956/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)
# Code
```
defmodule Solution do
  @spec minimum_operations(nums :: [integer]) :: integer
  def minimum_operations(nums), do: MapSet.new(nums) |> MapSet.delete(0) |> MapSet.size()
end
```