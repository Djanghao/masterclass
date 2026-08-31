# Elixir - One-liner

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-string/solutions/5999695/](https://leetcode.com/problems/rotate-string/solutions/5999695/)

---

# Code
```elixir []
defmodule Solution do
  @spec rotate_string(s :: String.t, goal :: String.t) :: boolean
  def rotate_string(s, goal) do
    byte_size(s) == byte_size(goal) and String.contains?(s <> s, goal)
  end
end
```