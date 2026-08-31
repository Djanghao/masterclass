# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4784171/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4784171/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec minimum_right_shifts(nums :: [integer]) :: integer
  def minimum_right_shifts([hd | tl]) do 
    {last_el, res} = do_minimum_right_shifts(tl, hd, 1, nil)
    cond do
      res == 0 || res == -1 -> res
      last_el < hd -> res
      true -> -1
    end
  end

  defp do_minimum_right_shifts([hd | tl], prev, i, pivot_ind) do
    cond do
      hd >= prev -> do_minimum_right_shifts(tl, hd, i + 1, pivot_ind)
      pivot_ind == nil -> do_minimum_right_shifts(tl, hd, i + 1, i)
      true -> {nil, -1}
    end
  end
  defp do_minimum_right_shifts(_, prev, i, pivot_ind) do
    if pivot_ind, do: {prev, i - pivot_ind}, else: {prev, 0}
  end
end
```