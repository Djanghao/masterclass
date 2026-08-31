# Elixir, priority queue

**Author:** stevensonmt
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/2180966/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/2180966/)

---

```elixir
    nums
    |> Enum.with_index()
    |> Enum.reduce(:gb_sets.new(), fn {n, i}, q ->
          cond do
            :gb_sets.is_member({n,i}, q) ->
              q
            :gb_sets.size(q) < k ->
              :gb_sets.insert({n,i}, q)
            true ->
              {smol, qq} = :gb_sets.take_smallest(q)
              :gb_sets.insert(max(smol, {n,i}), qq)
          end
        end)
    |> :gb_sets.smallest()
    |> elem(0)
  end
  ```
  Because you can have duplicate items in the queue, including the index of the item is necessary. Does not matter with respect to sorting.