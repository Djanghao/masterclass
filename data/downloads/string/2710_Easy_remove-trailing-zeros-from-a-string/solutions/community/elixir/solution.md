# Elixir, :binary.at from the end

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/4756147/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/4756147/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec remove_trailing_zeros(num :: String.t) :: String.t
  def remove_trailing_zeros(num) do
    last_i = byte_size(num) - 1
    binary_part(num, 0, last_non_zero_index(num, last_i) + 1)
  end

  defp last_non_zero_index(num, i) when i >= 0 do
    if :binary.at(num, i) == ?0, do: last_non_zero_index(num, i - 1),
    else: i
  end
  defp last_non_zero_index(_, _), do: -1
end
```