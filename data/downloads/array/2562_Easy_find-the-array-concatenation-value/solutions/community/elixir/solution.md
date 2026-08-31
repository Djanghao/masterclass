# Elixir, tuple

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4724876/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4724876/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_the_array_conc_val(nums :: [integer]) :: integer
  def find_the_array_conc_val(nums) do
    tuple = List.to_tuple(nums)
    do_find(tuple, 0, tuple_size(tuple) - 1, 0)
  end

  defp do_find(tuple, i, j, acc) when i < j, do: do_find(tuple, i + 1, j - 1, acc + concat(tuple, i, j))
  defp do_find(tuple, i, j, acc) when i == j, do: acc + elem(tuple, i)
  defp do_find(_, _, _, acc), do: acc

  defp concat(tuple, i, j) do
    el_1 = elem(tuple, i)
    el_2 = elem(tuple, j)
    "#{el_1}#{el_2}" |> String.to_integer
  end
end
```