# Elixir double function

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/elimination-game/solutions/3240384/](https://leetcode.com/problems/elimination-game/solutions/3240384/)

---

# Approach
2 functions calling each other.

# Complexity
- Time complexity: O(log(n))

- Space complexity: O(log(n))

# Code
```elixir
defmodule Solution do
  @spec last_remaining(n :: integer) :: integer
  def last_remaining(1), do: 1
  def last_remaining(n) do
    2 * last_reverse(div(n, 2))
  end
  
  defp last_reverse(1), do: 1
  defp last_reverse(n) do
    2 * last_remaining(div(n, 2)) + rem(n, 2) - 1
  end
end
```