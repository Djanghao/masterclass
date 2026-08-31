# Elixir boring solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/3244194/](https://leetcode.com/problems/optimal-division/solutions/3244194/)

---

How is this a medium question?
# Code
```
defmodule Solution do
  @spec optimal_division(nums :: [integer]) :: String.t
  def optimal_division([x]), do: "#{x}"
  def optimal_division([x, y]), do: "#{x}/#{y}"
  def optimal_division([x | tail]), do: "#{x}/(#{Enum.join(tail, "/")})"
end
```