# Elixir recursive

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934272/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934272/)

---

# Code
```Elixir []
defmodule Solution do
  @spec find_kth_bit(n :: integer, k :: integer) :: char
  def find_kth_bit(n, k) do
    solve(n, k, 0, Integer.pow(2, n - 1))
  end
  def solve(1, 1, ans, _), do: ans + ?0
  def solve(_, mid, ans, mid), do: 1 - ans + ?0
  def solve(n, k, ans, mid) when k < mid do
    solve(n - 1, k, ans, div(mid, 2))
  end
  def solve(n, k, ans, mid) do
    solve(n - 1, mid * 2 - k, 1 - ans, div(mid, 2))
  end
end
```