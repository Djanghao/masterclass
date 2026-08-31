# Elixir Approach and Solution, Two-Lines

**Author:** bpfaust
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/1883732/](https://leetcode.com/problems/two-city-scheduling/solutions/1883732/)

---

# Approach
1. Iterate over the `costs` list. Count the number of pairs in the list as `n`. Sum all `a` values into `sum_a`. Record the difference of `b` over `a` (`b - a`) into `d_list`. 
2. Sort `d_list` in ascending order. Take the first `n` halved values from the sorted list. Sum together this sublist, and subtract from `sum_a`. 

# Solution
```
defmodule Solution do
  @spec two_city_sched_cost(costs :: [[integer]]) :: integer
  def two_city_sched_cost(costs) do
    {n, sum_a, d_list} = for [a, b] <- costs, reduce: {0, 0, []}, do: ({n, sum_a, d_list} -> {n + 1, sum_a + a, [b - a | d_list]})
    sum_a + (d_list |> Enum.sort() |> Enum.take(n |> Integer.floor_div(2)) |> Enum.sum())
  end
end
```