# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/4225338/](https://leetcode.com/problems/range-addition-ii/solutions/4225338/)

---

# Complexity
- Time complexity:
O(n) where n is the number of operations

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_count(m :: integer, n :: integer, ops :: [[integer]]) :: integer
  def max_count(m, n, []), do: m * n
  def max_count(m, n, ops) do
    for [x, y] <- tl(ops), reduce: hd(ops) do
      [min_x, min_y] -> [min(min_x, x), min(min_y, y)]
    end |> then(fn [x, y] -> x * y end)
  end
end
```