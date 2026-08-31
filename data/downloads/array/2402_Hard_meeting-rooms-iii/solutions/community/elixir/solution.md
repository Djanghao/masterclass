# Elixir solution

**Author:** gvolop
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4751177/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4751177/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec most_booked(n :: integer, meetings :: [[integer]]) :: integer
  def most_booked(n, meetings) do
    current_time = 0;
    rooms = 1..n |> Enum.map(fn i -> {i-1, {0, -1}} end)

    meetings
    |> Enum.sort_by(fn [m_start, _m_end] -> m_start end)
    |> Enum.reduce({current_time, rooms}, &start_meeting/2)
    |> Tuple.to_list()
    |> List.last()
    |> IO.inspect()
    |> Enum.max_by(fn {_, {c, _}} -> c end)
    |> Tuple.to_list()
    |> List.first()
  end

  defp start_meeting([m_start, m_end], {current_time, rooms}) do
        {room_i, {_, nearest_meeting_end}} = Enum.find(rooms, fn {_, {_, m_e}} -> m_e <= m_start end) || Enum.min_by(rooms, fn {_, {_, m_e}} -> m_e end)
        current_time = max(m_start, nearest_meeting_end)
        m_e = current_time + (m_end - m_start)
        rooms = rooms |> List.update_at(room_i, fn {i, {c, _}} -> {i, {c + 1, m_e}} end)
        {current_time, rooms}
  end

end
```