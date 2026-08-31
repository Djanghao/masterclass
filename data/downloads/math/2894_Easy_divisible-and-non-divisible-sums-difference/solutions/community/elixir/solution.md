# [Elixir] Recursive Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4752516/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4752516/)

---

# Code
```
defmodule Solution do
  @spec difference_of_sums(n :: integer, m :: integer) :: integer
  def difference_of_sums(0, _), do: 0
  def difference_of_sums(n, m) when rem(n,m) == 0, do: (-1 * n) + difference_of_sums(n-1,m)
  def difference_of_sums(n, m) do
    n + difference_of_sums(n-1, m)
  end
end
```