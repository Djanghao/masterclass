# Elixir, :binary.at

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/4704571/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/4704571/)

---

# Complexity
- Time complexity:
O(n * m) where n is the number of strings and m is the average length of the strings

- Space complexity:
O(1)
# Code
```
defmodule Solution do
  @spec maximum_value(strs :: [String.t]) :: integer
  def maximum_value(strs) do
    for x <- strs, val = get_val(x, 0, 0), reduce: 0 do
      max_val -> max(max_val, val)
    end
  end

  defp get_val(str, i, acc) when i < byte_size(str) do
    ch = :binary.at(str, i)
    cond do
      ch < ?0 || ch > ?9 -> byte_size(str)
      true -> get_val(str, i + 1, acc * 10 + (ch - ?0))
    end
  end
  defp get_val(_, _, acc), do: acc
end
```