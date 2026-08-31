# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/4297189/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/4297189/)

---

# Approach
Uses MapSet to keep track of previously occurred numbers. Since the list has n + 1 unique elements, all the other elements occur exactly once in the list. The first number that occurs more than once is the answer.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec repeated_n_times(nums :: [integer]) :: integer
  def repeated_n_times(nums), do: do_repeated_n_times(nums, %{})

  defp do_repeated_n_times([hd | tl], count_map) do
    if count_map[hd] == 1, do: hd, else: do_repeated_n_times(tl, Map.put(count_map, hd, 1))
  end
end
```