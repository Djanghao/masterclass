# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/4622543/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/4622543/)

---

# Approach
Extract the letters and numbers separately using binary pattern matching. Iterate the letters from start to end and for each letter add cells with all the numbers in the range.

# Complexity
- Time complexity:
O(n * m) where n is the number of rows(letters) in the range and m is the number of columns(numbers) in the range

- Space complexity:
O(n * m)

# Code
```
defmodule Solution do
  @spec cells_in_range(s :: String.t) :: [String.t]
  def cells_in_range(<<start_letter, start_num, _, end_letter, end_num>>) do
    for x <- end_letter..start_letter, reduce: [] do
      acc -> do_cells_in_range(x, start_num, end_num, acc)
    end
  end

  defp do_cells_in_range(letter, start_num, end_num, acc) when start_num <= end_num do
    do_cells_in_range(letter, start_num, end_num - 1, [<<letter, end_num>> | acc])
  end
  defp do_cells_in_range(_, _, _, acc), do: acc
end
```