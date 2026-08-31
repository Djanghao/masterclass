# Elixir - Simple solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5395946/](https://leetcode.com/problems/three-consecutive-odds/solutions/5395946/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```elixir
defmodule Solution do
  import Integer, only: [is_odd: 1]

  @spec three_consecutive_odds(arr :: [integer]) :: boolean
  def three_consecutive_odds(arr), do: solve(arr, 0)

  defp solve(_, 3), do: true
  defp solve([], _), do: false
  defp solve([h | t], c) when is_odd(h), do: solve(t, c + 1)
  defp solve([_ | t], _), do: solve(t, 0)
end
```