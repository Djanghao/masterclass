# Elixir, tail call recursion, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/4388316/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/4388316/)

---

# Approach
Get the first and last index {i,j} of the first row by traversing over it. For the next row the diagonal indexes will be {i + 1, j -1}.
Iterate each row, traverse them once and add the elements present in the diagonal indexes.

[**0** 1 2 **3**] row one - diagonal indexes => {first, last} => {0, 3}
[0 **1** **2** 3] row two - {prev_first + 1, prev_last -1} => {1, 2}
[0 **1** **2** 3] row three - {prev_first + 1, prev_last -1} => {2, 1}
[**0** 1 2 **3**] row four - {prev_first + 1, prev_last -1} => {3, 0}


# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(1)
# Code
```
defmodule Solution do
  @spec diagonal_sum(mat :: [[integer]]) :: integer
  def diagonal_sum(mat) do
    [first_row_head | first_row_tail] = hd(mat)
    {first_row_last, first_row_length} = get_last_el_length(first_row_tail, 1)
    do_diagonal_sum(tl(mat), 1, first_row_length - 2, first_row_head + first_row_last)
  end

  defp do_diagonal_sum([], _, _, sum), do: sum
  defp do_diagonal_sum([row | tl], i, j, sum) do 
    do_diagonal_sum(tl, i + 1, j - 1, sum + row_diagonal_sum(row, i, j, 0, 0))
  end

  defp row_diagonal_sum([hd | tl], i, j, cur_index, sum) do
    cond do
      cur_index == i or cur_index == j -> row_diagonal_sum(tl, i, j, cur_index + 1, sum + hd)
      cur_index > i and cur_index > j -> sum
      true -> row_diagonal_sum(tl, i, j, cur_index + 1, sum)
    end
  end
  defp row_diagonal_sum(_, _, _, _, sum), do: sum

  defp get_last_el_length([last], length), do: {last, length + 1}
  defp get_last_el_length([_ | tl], length), do: get_last_el_length(tl, length + 1)
  defp get_last_el_length(_, _), do: {0, 1}
end
```