# Elixir solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371232/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371232/)

---

# Code
```
defmodule Solution do
  @spec total_money(n :: integer) :: integer
  def total_money(n) do
    if n <= 7, do: summation(n), else: calculate_total_money(n)
  end

  defp calculate_total_money(n) do
    m = div(n, 7)
    l = rem(n, 7)
    res = Enum.reduce(0..(m - 1), 0, fn i, acc ->
      acc + (summation(7 + i) - summation(i))
    end)
    res + (summation(l + m) - summation(m))
  end

  defp summation(n) do
    div(n * n + n, 2)
  end
end

```