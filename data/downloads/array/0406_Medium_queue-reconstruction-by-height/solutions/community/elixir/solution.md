# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/1746651/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/1746651/)

---

```elixir
defmodule Solution do
  @spec reconstruct_queue(people :: [[integer]]) :: [[integer]]
  def reconstruct_queue(people) do
    people
    |> Enum.sort(fn [hi, ki], [hj, kj] ->
      if hi == hj, do: ki < kj, else: hi > hj
    end)
    |> aux()
  end

  def aux(lst), do: aux(lst, [])
  def aux([], lst), do: lst

  def aux([[_, h] = x | xs], lst) do
    aux(xs, List.insert_at(lst, h, x))
  end
end
```