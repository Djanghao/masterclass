# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/4209373/](https://leetcode.com/problems/teemo-attacking/solutions/4209373/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_poisoned_duration(time_series :: [integer], duration :: integer) :: integer
  def find_poisoned_duration(time_series, duration) do
    for x <- time_series, reduce: {-1, 0} do
      {prev_end_time, acc} -> new_end_time = x + duration - 1
                              if x > prev_end_time, do: {new_end_time, acc + duration},
                              else: {new_end_time, acc + (new_end_time - prev_end_time)}
    end |> elem(1)
  end 
end
```