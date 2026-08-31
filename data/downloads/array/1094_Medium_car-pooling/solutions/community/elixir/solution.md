# Elixir Solution

**Author:** steam23
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-pooling/solutions/1678876/](https://leetcode.com/problems/car-pooling/solutions/1678876/)

---

```elixir
defmodule Solution do
  @spec car_pooling(trips :: [[integer]], capacity :: integer) :: boolean
  def car_pooling(trips, capacity) do
    trips
    |> Stream.flat_map(fn [num, pickup, dropoff] -> [{pickup, num}, {dropoff, -num}] end)
    |> Enum.sort
    |> Stream.map(fn {_, num} -> num end)
    |> Stream.scan(&(&1 + &2))
    |> Enum.all?(&(&1 <= capacity))
  end
end
```