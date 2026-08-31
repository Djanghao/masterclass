# Elixir greedy solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821716/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821716/)

---

# Code
```
defmodule Solution do
  @spec max_run_time(n :: integer, batteries :: [integer]) :: integer
  def max_run_time(n, batteries) do
    Enum.sort(batteries)
    |> Enum.split(length(batteries) - n + 1)
    |> then(fn {left, right} ->
      Enum.sum(left)
      |> greedy(right, 1)
    end)
  end

  defp greedy(acc, [x | tail], i) when acc >= x * i do
    greedy(acc + x, tail, i + 1)
  end
  defp greedy(acc, _, i), do: div(acc, i)
end
```