# Elixir, Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4345161/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4345161/)

---

# Approach
Create a list of tuples with structure {soldier_count, row_index}. Sort the list using Enum.sort. Return first k row_index values of the sorted tuple list. 

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec k_weakest_rows(mat :: [[integer]], k :: integer) :: [integer]
  def k_weakest_rows(mat, k), do: get_soldier_ind_list(mat, 0, []) |> Enum.sort |> do_k_weakest_rows(k, [])

  defp get_soldier_ind_list([hd | tl], i, acc), do: get_soldier_ind_list(tl, i + 1, [{count_soldiers(hd, 0), i} | acc])  
  defp get_soldier_ind_list([], _, acc), do: acc

  defp count_soldiers([1 | tl], count), do: count_soldiers(tl, count + 1)
  defp count_soldiers(_, count), do: count

  defp do_k_weakest_rows([{_, val} | tl], k, acc) when k > 0, do: do_k_weakest_rows(tl, k - 1, [val | acc])
  defp do_k_weakest_rows(_, _, acc), do: Enum.reverse(acc)
end
```