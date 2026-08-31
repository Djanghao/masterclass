# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4402544/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4402544/)

---

# Approach
Generate the values in the series and store them in a map. Keep track of the max value.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec get_maximum_generated(n :: integer) :: integer
  def get_maximum_generated(0), do: 0
  def get_maximum_generated(n), do: do_get_maximum_generated(2, n, %{1 => 1}, 1)

  defp do_get_maximum_generated(i, n, acc, max) when i <= n do
    rem_2 = rem(i, 2)
    div_2 = div(i, 2)
    val = if rem_2 == 0, do: acc[div_2], else: acc[div_2] + acc[div_2 + 1]
    do_get_maximum_generated(i + 1, n, Map.put(acc, i, val), max(max, val))
  end
  defp do_get_maximum_generated(_, _, _, max), do: max 
end
```