# Elixir, conditional statements

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4714439/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4714439/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec categorize_box(length :: integer, width :: integer, height :: integer, mass :: integer) :: String.t
  def categorize_box(length, width, height, mass) do
    bulky? = length >= 10000 || width >= 10000 || height >= 10000 || length * width * height >= 10 ** 9
    heavy? = mass >= 100
    cond do
      bulky? && heavy? -> "Both"
      bulky? -> "Bulky"
      heavy? -> "Heavy"
      true -> "Neither"
    end
  end
end
```