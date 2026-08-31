# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5226149/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5226149/)

---

# Complexity
- Time complexity:
O(m + n) where m and n are the length of strings s and t 

- Space complexity:
O(m)

# Code
```
defmodule Solution do
  @spec find_permutation_difference(s :: String.t, t :: String.t) :: integer
  def find_permutation_difference(s, t) do
    s_ind_map = for <<ch <- s>>, reduce: {%{}, 0} do
      {ind_map, i} -> {Map.put(ind_map, ch, i), i + 1}
    end |> elem(0)

    for <<ch <- t>>, reduce: {0, 0} do
      {i, res} -> 
        case Map.get(s_ind_map, ch) do
          nil -> {i + 1, res}
          s_ind -> {i + 1, res + abs(s_ind - i)}
        end 
    end |> elem(1)
  end
end
```