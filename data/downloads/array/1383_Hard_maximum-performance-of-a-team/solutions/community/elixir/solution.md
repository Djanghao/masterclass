# Elixir :gb_sets Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2559989/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2559989/)

---

```
defmodule Solution do
  @spec max_performance(n :: integer, speed :: [integer], efficiency :: [integer], k :: integer) ::
          integer
  def max_performance(n, speed, efficiency, k) do
    Enum.zip(efficiency, speed)
    |> Enum.sort(&>=/2)
    |> Enum.reduce({0, 0, :gb_sets.new()}, fn {e, s}, {ans, total_speed, pq} ->
      {total_speed, pq} =
        if :gb_sets.size(pq) == k do
          {{min_speed, _}, pq} = :gb_sets.take_smallest(pq)
          {total_speed - min_speed, pq}
        else
          {total_speed, pq}
        end

      total_speed = total_speed + s
      {max(ans, total_speed * e), total_speed, :gb_sets.add({s, :random.uniform()}, pq)}
    end)
    |> elem(0)
    |> rem(1_000_000_007)
  end
end
```