# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4162866/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4162866/)

---

# Code
```elixir
defmodule Solution do
  @spec min_cost_climbing_stairs(cost :: [integer]) :: integer
  def min_cost_climbing_stairs([a, b, c | tail]) do
    min_cost_climbing_stairs([b, min(a, b) + c | tail])
  end
  def min_cost_climbing_stairs([a, b]), do: min(a, b)
end
```