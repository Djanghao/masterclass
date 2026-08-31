# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/4377128/](https://leetcode.com/problems/reformat-date/solutions/4377128/)

---

# Approach
Use binary pattern matching to extract year, month and day

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec reformat_date(date :: String.t) :: String.t
  def reformat_date(date) do
    {day, mon, year} = case date do
      <<day::bytes-1, _::bytes-3, mon::bytes-3, _, year::bytes-4>> -> {day, mon, year}
      <<day::bytes-2, _::bytes-3, mon::bytes-3, _, year::bytes-4>> -> {day, mon, year}
    end
    <<year::bytes, "-", get_month_num(mon)::bytes, "-", String.pad_leading(day, 2, "0")::bytes>>
  end

  defp get_month_num(mon) do
    %{"Jan" => "01", "Feb" => "02", "Mar" => "03", "Apr" => "04", "May" => "05", "Jun" => "06",
     "Jul" => "07", "Aug" => "08", "Sep" => "09", "Oct" => "10", "Nov" => "11", "Dec" => "12"} |> Map.get(mon)
  end
end
```