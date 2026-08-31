# Elixir, simple math

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/4696017/](https://leetcode.com/problems/convert-the-temperature/solutions/4696017/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec convert_temperature(celsius :: float) :: [float]
  def convert_temperature(celsius) do
    [celsius + 273.15, celsius * 1.80 + 32.00]
  end
end
```