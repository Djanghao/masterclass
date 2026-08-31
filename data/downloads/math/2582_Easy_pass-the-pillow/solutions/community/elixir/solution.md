# Elixir Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5424273/](https://leetcode.com/problems/pass-the-pillow/solutions/5424273/)

---

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```Elixir
defmodule Solution do
  @spec pass_the_pillow(n :: integer, times :: integer) :: integer

  def pass_the_pillow(n, times) do
    period = 2 * n - 2

    r = rem(times, period)

    if r >= n, do: 2 * n - 1 - r, else: r + 1
  end
end
```