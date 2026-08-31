# Elixir, for comprehension, stack

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/4755922/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/4755922/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec min_length(s :: String.t) :: integer
  def min_length(s) do
    for <<ch <- s>>, reduce: {[], 0} do
      {acc, size} -> prev = List.first(acc)
        if (prev == ?A && ch == ?B) || (prev == ?C && ch == ?D), 
        do: {tl(acc), size - 1}, else: {[ch | acc], size + 1}
    end |> elem(1)
  end 
end
```