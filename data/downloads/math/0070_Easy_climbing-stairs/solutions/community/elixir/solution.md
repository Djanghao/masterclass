# Fibonacci, Tail call recursion

**Author:** AeronStorm
**Votes:** 2
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/3632520/](https://leetcode.com/problems/climbing-stairs/solutions/3632520/)

---

# Code
```
defmodule Solution do
  @spec climb_stairs(n :: integer) :: integer
  def climb_stairs(n), do: do_climb_stairs(n, 1, 0, 1)
  defp do_climb_stairs(n, n, a, b), do: a + b
  defp do_climb_stairs(n, step, a, b), do: do_climb_stairs(n, step + 1, b, a + b)
end
```