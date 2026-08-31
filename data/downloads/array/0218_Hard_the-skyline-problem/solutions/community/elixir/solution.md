# [Elixir] Functional solution building heap with inline explanations

**Author:** juumixx
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/2666436/](https://leetcode.com/problems/the-skyline-problem/solutions/2666436/)

---

```
defmodule Solution do
  @spec get_skyline(buildings :: [[integer]]) :: [[integer]]
  def get_skyline(buildings) do
    buildings
    |> merge()                     # First, we're building a map of x value to {left (:push) or right (:pop), height} events
    |> Map.to_list()               # Convert it to a list of tuples
    |> Enum.sort_by(&elem(&1, 0))  # Sort all events by x value
    |> reduce()                    # Reduce event list to the final result
  end

  defp merge(_, map \\\\ %{})               # Start with an empty map
  defp merge([], map), do: map            # Finish when the input list is empty and return the map
  defp merge([[l, r, h] | tail], map) do  # Building the event map
    map
    |> Map.update(l, [{:push, h}], fn list -> [{:push, h} | list] end)  # Add :push event for left side
    |> Map.update(r, [{:pop, h}], fn list -> [{:pop, h} | list] end)    # Add :pop event for right side
    |> then(fn acc -> merge(tail, acc) end)                             # Calls itself recursively with remaining list
  end

  defp reduce(_, stack \\\\ [], prev \\\\ 0)          # Start with empty stack and 0 height
  defp reduce([], _, _), do: []                   # Finish when the input list is empty
  defp reduce([{x, l} | tail], stack, prev) do    # Reduce event list to max height for each x value
    stack =
      Enum.reduce(l, stack, fn                    # Update stack for x value  by
        {:push, h}, acc -> [h | acc]              # pushing height onto stack for :push events
        {:pop, h}, acc -> List.delete(acc, h)     # and removing height from stack for :pop events
      end)
    next = stack |> Enum.max(fn -> 0 end)         # Then take the max height as next value 
    if next == prev do
      reduce(tail, stack, next)                   # Skip redundant height values
    else
      [[x, next] | reduce(tail, stack, next)]     # Add new height values to result
    end
  end
end
```