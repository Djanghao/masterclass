# Elixir, linear

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4714454/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4714454/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_count(nums :: [integer]) :: integer
  def maximum_count(nums) do
    for x <- nums, x != 0, reduce: {0, 0} do
      {pos, neg} -> if x < 0, do: {pos, neg + 1}, else: {pos + 1, neg}
    end |> then(fn {pos, neg} -> max(pos, neg) end)
  end
end
```