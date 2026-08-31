# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2825877/](https://leetcode.com/problems/ugly-number/solutions/2825877/)

---

# Code
```
defmodule Solution do
  @spec is_ugly(n :: integer) :: boolean
  def is_ugly(n) when n <= 0, do: false
  def is_ugly(1), do: true
  def is_ugly(n) when rem(n, 2) == 0, do: is_ugly(floor(n / 2))
  def is_ugly(n) when rem(n, 3) == 0, do: is_ugly(floor(n / 3))
  def is_ugly(n) when rem(n, 5) == 0, do: is_ugly(floor(n / 5))
  def is_ugly(_), do: false
end
```