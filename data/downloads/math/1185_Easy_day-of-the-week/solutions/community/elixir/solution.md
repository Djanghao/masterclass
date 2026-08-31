# Elixir, manual calculation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/4323574/](https://leetcode.com/problems/day-of-the-week/solutions/4323574/)

---

# Approach
Calculate the total number of days since jan 1 1971 until the previous year. Calculate the total number days in this year. Calculate mod of total days and 7. Get the corresponding dayin string based on the day_of_week value. The 1st Jan 1971 is a friday. Hence 0 equals friday and 6 equals thursday. 

# Complexity
- Time complexity:
O(n) where n is the number of years equaling year - 1971

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec day_of_the_week(day :: integer, month :: integer, year :: integer) :: String.t
  def day_of_the_week(day, month, year) do
    total_days = total_days_until_last_year(year) + total_days_in_year(day, month, year)
    day_of_week = rem(total_days, 7)
    elem({"Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"}, day_of_week) # 1st jan 1971 is friday
  end

  defp total_days_until_last_year(1971), do: 0
  defp total_days_until_last_year(year) do
    start_year = 1971
    end_year = year - 1
    total_years = end_year - start_year
    total_days = total_years * 365
    total_leap_years = Enum.filter(start_year..end_year, &leap_year?/1) |> Enum.count
    total_days + total_leap_years
  end

  defp total_days_in_year(day, month, year) do
    case month do
      1 -> day
      2 -> 31 + day
      x -> days_until_month = {31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365}
           elem(days_until_month, x - 2) + day + (if leap_year?(year), do: 1, else: 0)
    end
  end

  defp leap_year?(year), do: (rem(year, 4) == 0 and rem(year, 100) != 0) or rem(year, 400) == 0
end
```