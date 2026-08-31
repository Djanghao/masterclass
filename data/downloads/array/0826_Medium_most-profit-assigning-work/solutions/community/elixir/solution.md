# Elixir - Greedy Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5329770/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5329770/)

---

# Intuition
If a job can be taken by a less capable worker, then it can be taken by a more capable worker.

# Approach
1. Sort the jobs by difficulty.
2. Sort the workers by capability.
3. Loop through the workers. For each worker, take the most profitable job of all the jobs he can take.

Be careful about the edge cases.

# Complexity
- Time complexity: $$O(j \\log j + w \\log w)$$ where $$j$$ is the number of jobs and $$w$$ is the number of workers.

- Space complexity: $$O(j + w)$$

# Code
```elixir
defmodule Solution do
  @spec max_profit_assignment(difficulties :: [integer], profits :: [integer], workers :: [integer]) :: integer
  def max_profit_assignment(difficulties, profits, workers) do
    jobs =
      difficulties
      |> Stream.zip(profits)
      |> Enum.sort()

    workers = Enum.sort(workers)

    assign(jobs, workers, nil, 0, 0)
  end

  defp assign(_jobs, [], nil, _max_profit, total_profit), do: total_profit
  
  defp assign(jobs, [h_workers | t_workers], nil, max_profit, total_profit) do
    assign(jobs, t_workers, h_workers, max_profit, total_profit)
  end

  defp assign(
    [{difficulty, profit} | jobs],
    workers,
    current_worker_capability,
    max_profit,
    total_profit
  ) when difficulty <= current_worker_capability do
    assign(jobs, workers, current_worker_capability, max(profit, max_profit), total_profit)
  end

  defp assign(
    jobs,
    workers,
    _,
    max_profit,
    total_profit
  ) do
    assign(jobs, workers, nil, max_profit, total_profit + max_profit)
  end
end
```