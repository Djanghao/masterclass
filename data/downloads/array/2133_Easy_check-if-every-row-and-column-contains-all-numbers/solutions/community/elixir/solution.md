# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4607829/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4607829/)

---

# Approach
Uses tail call recursion to iterate the matrix, use two sets to keep track of all the elements in the row and column. Check if there are any duplicates in the accumulated row and column

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n\xB2)

# Code
```
defmodule Solution do
  @spec check_valid(matrix :: [[integer]]) :: boolean
  def check_valid(matrix) do
    tuple = Enum.map(matrix, &List.to_tuple/1) |> List.to_tuple
    n = elem(tuple, 0) |> tuple_size
    do_check_valid(tuple, 0, 0, n-1, MapSet.new, MapSet.new)
  end

  defp do_check_valid(tuple, i, j, max_ij, row_set, col_set) when j > max_ij do
    MapSet.size(row_set) == max_ij + 1 && MapSet.size(col_set) == max_ij + 1 &&
    do_check_valid(tuple, i + 1, 0, max_ij, MapSet.new, MapSet.new)
  end
  defp do_check_valid(_, i, _, max_ij, _, _) when i > max_ij, do: true
  defp do_check_valid(tuple, i, j, max_ij, row_set, col_set) do
    row_set = MapSet.put(row_set, get_el(tuple, i, j))
    col_set = MapSet.put(col_set, get_el(tuple, j, i))
    do_check_valid(tuple, i, j + 1, max_ij, row_set, col_set)
  end

  defp get_el(tuple, i, j), do: elem(tuple, i) |> elem(j)
end
```