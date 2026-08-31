# Elixir, base 7 recursive

**Author:** aidan5058
**Votes:** 0
**Link:** [https://leetcode.com/problems/base-7/solutions/4782867/](https://leetcode.com/problems/base-7/solutions/4782867/)

---


# Code
```
defmodule Solution do
  @spec convert_to_base7(num :: integer) :: String.t
  def convert_to_base7(num) when num == 0, do: "0"
  def convert_to_base7(num) when num < 0, do: "-" <>  base7_string(-num) 
  def convert_to_base7(num) when num > 0, do: base7_string(num) 
   
  defp base7_string(0), do: ""
  defp base7_string(num) do
    rem = rem(num, 7)
    quotient = div(num, 7)
    base7_string(quotient) <> Integer.to_string(rem) 
  end
end

```