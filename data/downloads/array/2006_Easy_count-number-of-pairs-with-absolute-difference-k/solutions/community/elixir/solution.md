# Elixir, O(n) uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/4574435/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/4574435/)

---

# Approach
Iterate the numbers in reverse, keep track of all the traversed numbers and their frequencies in a map. For each number check if num - k or num + k is present in the map and accumulate the count.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_k_difference(nums :: [integer], k :: integer) :: integer
  def count_k_difference(nums, k) do
    for x <- Enum.reverse(nums), reduce: {%{}, 0} do
      {map, acc} -> acc = acc + Map.get(map, x + k, 0) + Map.get(map, x - k, 0)
                    {Map.update(map, x, 1, &(&1 + 1)), acc}
    end |> elem(1)
  end
end
```