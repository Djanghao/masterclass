# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4613205/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4613205/)

---

# Approach
Create a set from numbers and recursively check existence of original * 2.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_final_value(nums :: [integer], original :: integer) :: integer
  def find_final_value(nums, original), do: do_find_final_value(MapSet.new(nums), original)

  defp do_find_final_value(nums_set, x) do
    if MapSet.member?(nums_set, x), do: do_find_final_value(nums_set, x * 2), else: x 
  end
end
```