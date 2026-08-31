# Elixir O(1) use cond solution

**Author:** NerevarSoul
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-digits/solutions/3456633/](https://leetcode.com/problems/add-digits/solutions/3456633/)

---

# Code
```
defmodule Solution do
  @spec add_digits(num :: integer) :: integer
  def add_digits(num) do
    cond do
      num == 0 -> 0
      rem(num, 9) == 0 -> 9
      true -> rem(num, 9)
    end
  end
end
```