# Elixir Solution

**Author:** JJamesWWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/1973356/](https://leetcode.com/problems/meeting-rooms-ii/solutions/1973356/)

---

```elixir
defmodule Solution do
  @spec min_meeting_rooms(intervals :: [[integer]]) :: integer
  def min_meeting_rooms(intervals) do
    intervals
    |> Enum.flat_map(fn [start_time, end_time] -> [{start_time, 1}, {end_time, -1}] end)
    |> Enum.sort()
    |> Enum.reduce({0, 0}, fn {_, c}, {rooms, max_rooms} -> {rooms + c, max(max_rooms, rooms + c)} end)
    |> elem(1)
  end
end
```