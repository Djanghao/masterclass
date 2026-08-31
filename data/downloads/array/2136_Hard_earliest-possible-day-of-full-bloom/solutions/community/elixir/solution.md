# [Elixir] Simple sorting solution

**Author:** juumixx
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2755506/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2755506/)

---

The examples are very confusing for this task, but the intuitive solution is actually working:
Plant the plants with the longest grow time first, regardless of planting time.
To find the total duration, we keep track of the currently used planting time and max grow time while reducing in descending order of grow time.
```
defmodule Solution do
  @spec earliest_full_bloom(plant_time :: [integer], grow_time :: [integer]) :: integer
  def earliest_full_bloom(plant_time, grow_time) do
    Enum.zip(plant_time, grow_time)
    |> Enum.sort_by(fn {_, g} -> g end, :desc)
    |> Enum.reduce({0, 0}, fn {p, g}, {current, max} ->
      {current + p, max(max, current + p + g)}
    end)
    |> elem(1)
  end
end
```