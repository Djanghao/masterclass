# Elixir solution

**Author:** ronbrz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/4812256/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/4812256/)

---

# Intuition
Sort the stock prices by day, compare each slope between points to the next slope. Floats not accurate enough to represent slope, so create a `new_frac` function that returns a simplified fraction in the form of a two element tuple that we can use to compare. 

# Code
```
defmodule Solution do
  @spec minimum_lines(stock_prices :: [[integer]]) :: integer
  def minimum_lines(stock_prices) do
    sorted_days = Enum.sort(stock_prices)
    ml(sorted_days, nil)
  end

  def ml([_], _), do: 0
  def ml([[d1, p1], [d2, p2] | rest], slope) do
    new_slope = new_frac((p1 - p2), (d1 - d2))
    if slope == new_slope do
      ml([[d2, p2] | rest], slope)
    else
      1 + ml([[d2, p2] | rest], new_slope)
    end
  end

  def new_frac(a, b) do
    gcd = Integer.gcd(a, b)
    top = div(a, gcd)
    bottom = div(b, gcd)
    if bottom < 0 do
      {top * -1, bottom * -1}
    else
      {top, bottom}
    end
  end
end
```