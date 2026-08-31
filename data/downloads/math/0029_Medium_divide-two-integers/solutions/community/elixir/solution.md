# Elixir solution using ranges

**Author:** foxesknow
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/3793204/](https://leetcode.com/problems/divide-two-integers/solutions/3793204/)

---

It's a bit "cheaty" but it works!

# Code
```
defmodule Solution do
  @spec divide(dividend :: integer, divisor :: integer) :: integer
  def divide(dividend, divisor) do
    sign_adjustment = sign(dividend) * sign(divisor)

    dividend = abs(dividend)
    divisor = abs(divisor)

    case sign_adjustment * Range.size(1..dividend - divisor + 1 // divisor) do
      x when x > 2147483647 -> 2147483647
      x when x < -2147483648 -> -2147483648
      x -> x
    end
  end

  defp sign(number) do
    if number < 0 do
      -1
    else
      1
    end
  end
end
```