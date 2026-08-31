# Elixir with Enum.reduce

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3156057/](https://leetcode.com/problems/fruit-into-baskets/solutions/3156057/)

---

# Code
```elixir
defmodule Solution do
  @spec total_fruit(fruits :: [integer]) :: integer
  def total_fruit(fruits) do
    Enum.reduce(fruits, {0, nil, nil, 0, 0}, fn
      f1, {ans, f1, f2, len, len2} ->
        {max(ans, len + 1), f1, f2, len + 1, len2 + 1}
      f2, {ans, f1, f2, len, len2} ->
        {max(ans, len + 1), f2, f1, len + 1, 1}
      x, {ans, f1, _, _, len2} ->
        {max(ans, len2 + 1), x, f1, len2 + 1, 1}
    end)
    |> elem(0)
  end
end
```