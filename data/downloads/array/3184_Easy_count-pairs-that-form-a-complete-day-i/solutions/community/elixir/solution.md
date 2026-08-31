# Elixir -  Reminder maps

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5556345/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5556345/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_complete_day_pairs(hours :: [integer]) :: integer
  def count_complete_day_pairs(hours) do
    rem_map = get_rem_map(hours)

    total_complete_hours = Map.get(rem_map, 0, 0)
    result = div(total_complete_hours ** 2 - total_complete_hours, 2)

    total_12_hours = Map.get(rem_map, 12, 0)
    result = result + div(total_12_hours ** 2 - total_12_hours, 2)

    for rem <- 1..11, reduce: result do
      result -> result + (Map.get(rem_map, rem, 0) * Map.get(rem_map, 24 - rem, 0))
    end
  end

  defp get_rem_map(hours) do
    for hr <- hours, reduce: %{} do
      rem_map -> Map.update(rem_map, rem(hr, 24), 1, &(&1 + 1))
    end
  end
end
```