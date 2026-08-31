# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/4632834/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/4632834/)

---

# Approach
Extract the difference between the two time stamps in minutes. Divide the difference by 60, 15, 5 and 1 to get the result.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec convert_time(current :: String.t, correct :: String.t) :: integer
  def convert_time(current, correct) do
    current_mins = get_minutes(current)
    correct_mins = get_minutes(correct)
    diff = abs(current_mins - correct_mins)
    for ops <- [60, 15, 5, 1], reduce: {diff, 0} do
      {mins, ops_count} -> {rem(mins, ops), ops_count + div(mins, ops)}
    end |> elem(1)
  end

  defp get_minutes(<<h1,h2,_,m1,m2>>) do
    hours_int = (h1 - ?0) * 10 + (h2 - ?0)
    minutes_int = (m1 - ?0) * 10 + (m2 - ?0)
    hours_int * 60 + minutes_int
  end

  defp get_quo_rem(a, b), do: {div(a,b), rem(a,b)}
end
```