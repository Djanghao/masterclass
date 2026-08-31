# Elixir frequencies twice

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4895924/](https://leetcode.com/problems/task-scheduler/solutions/4895924/)

---

# Intuition
Consider only the tasks which appears most frequently (e.g. let them be `"A"` and `"B"`).
The schedule will look like:
```
"A", "B", ..., "A", "B", ..., "A", "B", ..., "A", "B", ......(more?)
(\u2190 n+1 tasks \u2192)(\u2190 n+1 tasks \u2192) etc.
```
There may ***or*** may not be more tasks after the ***last*** `"A"` and `"B"`, and that depends on whether the other tasks can fill up all the spaces between the ***first*** `"A"` and `"B"` and the ***last*** `"A"` and `"B"`.

# Code
```elixir
defmodule Solution do
  @spec least_interval(tasks :: [char], n :: integer) :: integer
  def least_interval(tasks, n) do
    Enum.frequencies(tasks)
    |> Map.values()
    |> Enum.frequencies()
    |> Enum.max()
    |> then(fn {k, v} -> (k - 1) * (n + 1) + v end)
    |> max(length(tasks))
  end
end
```