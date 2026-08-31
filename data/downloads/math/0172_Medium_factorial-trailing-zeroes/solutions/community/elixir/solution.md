# Elixir solution

**Author:** matheusbartkev
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4998418/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4998418/)

---

# Complexity
- Time complexity:
$$O(\\log_5{n})$$

- Space complexity:
$$O(\\log_5{n})$$ (stack of functions)

# Code
```
defmodule Solution do
  @spec trailing_zeroes(n :: integer) :: integer
  def trailing_zeroes(0), do: 0
  def trailing_zeroes(n) do
    next = Integer.floor_div(n, 5)
    next + trailing_zeroes(next)
  end
end
```