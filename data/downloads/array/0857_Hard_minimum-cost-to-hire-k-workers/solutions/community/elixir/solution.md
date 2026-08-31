# Elixir with gb_sets used as max heap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142914/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142914/)

---

Need to include the index when inserting values into the gb_sets, so that duplicated `quality` values can be added...
# Code
```
defmodule Solution do
  @spec mincost_to_hire_workers(quality :: [integer], wage :: [integer], k :: integer) :: float
  def mincost_to_hire_workers(quality, wage, k) do
    Enum.zip_with(quality, wage, fn q, w -> {q, w, w / q} end)
    |> Enum.sort_by(&elem(&1, 2))
    |> Enum.with_index()
    |> Enum.reduce({nil, 0, k, :gb_sets.new()}, &do_reduce/2)
    |> elem(0)
  end

  defp do_reduce({{q, w, rate}, i}, {ans, q_sum, k, sets}) do
    case {q_sum + q, :gb_sets.add({q, i}, sets), k} do
      {q_sum, sets, 0} ->
        {{q2, _}, sets} = :gb_sets.take_largest(sets)
        q_sum = q_sum - q2
        {min(ans, q_sum * rate), q_sum, 0, sets}
      {q_sum, sets, 1} ->
        {min(ans, q_sum * rate), q_sum, 0, sets}
      {q_sum, sets, k} ->
        {ans, q_sum, k - 1, sets}
    end
  end
end
```