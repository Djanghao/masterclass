# Elixir priority queue

**Author:** stevensonmt
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/2188924/](https://leetcode.com/problems/course-schedule-iii/solutions/2188924/)

---

```elixir
defmodule Solution do
  @spec schedule_course(courses :: [[integer]]) :: integer
  def schedule_course(courses) do
    courses
    |> Enum.sort_by(fn [_cost, deadline] -> deadline end)
    |> Enum.with_index()
    |> Enum.reduce({:gb_sets.new(), 0}, fn {[cost, deadline], i}, {pq, time} ->
      cond do
        time + cost <= deadline -> 
          {:gb_sets.add({cost, i}, pq), time + cost}
        not :gb_sets.is_empty(pq) and :gb_sets.largest(pq) > {cost, i} ->
          {{largest, _}, q} = :gb_sets.take_largest(pq)
          pq = :gb_sets.add({cost, i}, q)
          {pq, time + cost - largest}
        true ->
          {pq, time}
        end
      end)
    |> elem(0)
    |> :gb_sets.size()
  end
end
```