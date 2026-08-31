# Elixir, manual calculation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4348902/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4348902/)

---

# Approach
Calculate the total number of days so far for day 1 and day2 from the first day of the min(year1, year2). The difference between the values is the result.

# Complexity
- Time complexity:
O(diff(year1, year2))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec days_between_dates(date1 :: String.t, date2 :: String.t) :: integer
  def days_between_dates(date1, date2) do 
    {y1, m1, d1} = parse_date(date1)
    {y2, m2, d2} = parse_date(date2)
    get_total_days_so_far_from_year(min(y1, y2), y1, m1, d1, 0) -
    get_total_days_so_far_from_year(min(y1, y2), y2, m2, d2, 0) |> abs
  end

  defp parse_date(<<year::bytes-4, "-", month::bytes-2, "-", day::bytes-2>>) do
    {String.to_integer(year), String.to_integer(month), String.to_integer(day)}
  end

  defp get_total_days_so_far_from_year(start_year, year, month, day, total) when start_year != year do
    get_total_days_so_far_from_year(start_year + 1, year, month, day, total + get_days_in_year(start_year))
  end
  defp get_total_days_so_far_from_year(_, year, month, day, total), do: total + get_days_so_far_in_year(year, month, day)

  defp get_days_so_far_in_year(year, month, day) do
    case month do
      1 -> day
      2 -> 31 + day
      x -> ({31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334} |> elem(x - 2)) + day + (if leap_year?(year), do: 1, else: 0)
    end
  end

  defp get_days_in_year(year), do: if leap_year?(year), do: 366, else: 365 

  defp leap_year?(year), do: (rem(year, 4) == 0 and rem(year, 100) != 0) || rem(year, 400) == 0
end
```