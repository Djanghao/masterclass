# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/4658019/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/4658019/)

---

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check_x_matrix(grid :: [[integer]]) :: boolean
  def check_x_matrix(grid), do: do_check_x_matrix(grid, 0, length(hd(grid)) - 1)

  defp do_check_x_matrix([row | tl], d1_i, d2_i) do
    check_row(row, 0, d1_i, d2_i) && do_check_x_matrix(tl, d1_i + 1, d2_i - 1)
  end
  defp do_check_x_matrix(_, _, _), do: true

  defp check_row([hd | tl], i, d1_i, d2_i) do
    cond do
      i == d1_i || i == d2_i -> hd != 0 && check_row(tl, i + 1, d1_i, d2_i)
      true -> hd == 0 && check_row(tl, i + 1, d1_i, d2_i)
    end
  end
  defp check_row(_, _, _, _), do: true
end
```