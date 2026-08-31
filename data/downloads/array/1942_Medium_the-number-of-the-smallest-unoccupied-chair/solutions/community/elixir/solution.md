# Elixir Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897647/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897647/)

---

I use a `:gb_set.t()` as a priority queue.

# Code
```elixir []
defmodule Solution do
  @spec smallest_chair(times :: [[integer]], target_friend :: integer) :: integer
  def smallest_chair(times, target_friend) do
    arrivals =
      times
      |> Enum.map(&hd/1)
      |> Enum.with_index()
      |> Enum.sort()

    leavings =
      times
      |> Enum.map(&List.last/1)
      |> Enum.with_index()
      |> Enum.sort()

    available_seats =
      times
      |> length()
      |> then(& 0..(&1 - 1))
      |> Enum.to_list()
      |> :gb_sets.from_ordset()

    simulate(arrivals, leavings, target_friend, available_seats, %{})
  end

  # When the friend arrives is the target friend 
  # and at the current time no one leaves,
  # just return the smallest available seat. 
  defp simulate([{a, i} | _], [{l, _} | _], i, available_seats, _occupied_seats)
       when a < l do
    :gb_sets.smallest(available_seats)
  end

  # At the time somebody arrives and nobody leaves,
  # assign the smallest seat to that one.
  defp simulate([{a, i} | arrivals], [{l, _} | _] = leavings, target_friend, available_seats, occupied_seats)
       when a < l do
    {seat, available_seats} = :gb_sets.take_smallest(available_seats)
    occupied_seats = Map.put(occupied_seats, i, seat)
    simulate(arrivals, leavings, target_friend, available_seats, occupied_seats)
  end

  # At the time somebody leaves (no matter whether somebody arrives or not),
  # recycle the seat.
  defp simulate(arrivals, [{l, i} | leavings], target_friend, available_seats, occupied_seats) do
    {seat, occupied_seats} = Map.pop(occupied_seats, i)
    available_seats = :gb_sets.insert(seat, available_seats)
    simulate(arrivals, leavings, target_friend, available_seats, occupied_seats)
  end
end
```