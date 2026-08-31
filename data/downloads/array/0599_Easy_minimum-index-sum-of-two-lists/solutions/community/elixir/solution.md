# Elixir, tail call recursion, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/4229234/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/4229234/)

---

# Complexity
- Time complexity:
O(m+n) where m and n are the length of lists list1 and list2

- Space complexity:
O(m)

# Code
```
defmodule Solution do
  @spec find_restaurant(list1 :: [String.t], list2 :: [String.t]) :: [String.t]
  def find_restaurant(list1, list2) do
    l1_ind_map = for x <- list1, reduce: {%{}, 0} do
      {acc, i} -> {Map.put(acc, x, i), i + 1}
    end |> elem(0)
    
    for x <- list2, reduce: {[], nil, 0} do
      {acc, res_i_sum, j} ->
        i = l1_ind_map[x]
        cond do
          i == nil or i + j > res_i_sum -> {acc, res_i_sum, j + 1}
          i + j == res_i_sum -> {[x | acc], res_i_sum, j + 1}
          true -> {[x], i + j, j + 1}
        end
    end |> elem(0)
  end
end
```