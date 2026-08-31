# Elixir - Memoization

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766559/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766559/)

---

# Intuition
Try every possible ways, and see which way gets the max value.

# Approach
Just brute-force then adding a memo.

# Code
```
defmodule Solution do
  @spec max_value(events :: [[integer]], k :: integer) :: integer
  def max_value(events, k) do
    events = events |> Enum.sort() |> Enum.with_index()

    Task.async(fn ->
      solve(events, k, -1)
    end)
    |> Task.await()
  end

  # If there's no events to attend, return 0 as the total value.
  defp solve([], _k, _prev_finish), do: 0
  
  # If my quota is used up, return 0 as the total value.
  defp solve(_events, 0, _prev_finish), do: 0

  # If the current event starts before the previous event ends,
  # skip this event.
  defp solve([{[start, _finish, _value], _i} | rest_events], k, prev_finish)
       when start <= prev_finish,
       do: solve(rest_events, k, prev_finish)

  # Otherwise, try both attending and skipping the current event,
  # see which case I can get a greater total value.
  defp solve([{[_start, finish, value], i} | rest_events], k, prev_finish) do
    memoized({i, k}, fn ->
      attend = value + solve(rest_events, k - 1, finish)
      skip = solve(rest_events, k, prev_finish)
      max(attend, skip)
    end)
  end

  defp memoized(key, fun) do
    with nil <- Process.get(key) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```