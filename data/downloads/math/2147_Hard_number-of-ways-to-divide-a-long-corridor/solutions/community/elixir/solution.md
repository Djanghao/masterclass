# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338877/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338877/)

---

# Code
```elixir
defmodule Solution do
  @spec number_of_ways(corridor :: String.t) :: integer
  def number_of_ways(corridor) do
    String.to_charlist(corridor)
    |> Enum.reduce({1, 1, -2}, fn
      ?S, {ans, p, 1} -> {rem(ans * p, 1_000_000_007), 1, 0}
      ?S, {ans, p, s} -> {ans, p, s + 1}
      ?P, {ans, p, 0} -> {ans, p + 1, 0}
      ?P, {ans, p, s} -> {ans, p, s}
    end)
    |> then(fn
      {ans, _, 0} -> ans
      _ -> 0
    end)
  end
end
```