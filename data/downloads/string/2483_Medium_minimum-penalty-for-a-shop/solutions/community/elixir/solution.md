# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3975610/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3975610/)

---

Prepend `0` to the charlist for `Enum.scan`, so that the `0` will be the head of the resulting list.
# Code
```
defmodule Solution do
  @spec best_closing_time(customers :: String.t) :: integer
  def best_closing_time(customers) do
    [0] ++ String.to_charlist(customers)
    |> Enum.scan(fn
      ?Y, acc -> acc - 1
      ?N, acc -> acc + 1
    end)
    |> Enum.with_index()
    |> Enum.min_by(&(elem(&1, 0)))
    |> elem(1)
  end
end
```