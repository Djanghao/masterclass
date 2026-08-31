# Elixir, sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-partition/solutions/4221967/](https://leetcode.com/problems/array-partition/solutions/4221967/)

---

# Complexity
- Time complexity:
O(n * log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec array_pair_sum(nums :: [integer]) :: integer
  def array_pair_sum(nums), do: Enum.sort(nums, :desc) |> do_array_pair_sum(0)

  defp do_array_pair_sum([_, s | tl], acc), do: do_array_pair_sum(tl, acc + s)
  defp do_array_pair_sum(_, acc), do: acc
end
```