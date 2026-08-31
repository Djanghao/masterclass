# Regex solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-number/solutions/5672712/](https://leetcode.com/problems/valid-number/solutions/5672712/)

---

Easy with regex... Maybe they consider this as cheating?
# Code
```elixir []
defmodule Solution do
  @spec is_number(s :: String.t) :: boolean
  def is_number(s) do
    Regex.match?(~r/^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$/, s)
  end
end
```