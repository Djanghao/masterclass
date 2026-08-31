# Elixir: recursive modular exponentiation

**Author:** lacrosse
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3134724/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3134724/)

---

# Code
```elixir
defmodule Solution do
  @mod 1_000_000_007

  @spec monkey_move(n :: integer) :: integer
  def monkey_move(n), do: mod(2 * (powmod(2, n - 1) - 1))

  defp powmod(_, 0), do: 1
  defp powmod(base, exp) when rem(exp, 2) == 1, do: mod(powmod(base, exp - 1) * base)
  defp powmod(base, exp), do: mod(powmod(base, div(exp, 2)) ** 2)

  defp mod(n), do: rem(n, @mod)
end
```

# Time complexity

$$\\mathcal{O}(\\log n)$$