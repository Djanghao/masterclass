# Elixir, binary pattern matching and Date module

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/4322913/](https://leetcode.com/problems/day-of-the-year/solutions/4322913/)

---

# Approach
Uses binary pattern matching to parse the date. Uses **Date.new/1** to create a date struct and calculate the day of the year using the **Date.day_of_year/1** function. 
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec day_of_year(date :: String.t) :: integer
  def day_of_year(date) do
    <<year::bytes-4, _, month::bytes-2, _, day::bytes-2>> = date
    {:ok, date} = Date.new(String.to_integer(year), String.to_integer(month), String.to_integer(day))
    Date.day_of_year(date)
  end
end
```