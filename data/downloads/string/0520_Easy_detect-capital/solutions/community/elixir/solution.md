# Elixir solution

**Author:** foxesknow
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-capital/solutions/3791507/](https://leetcode.com/problems/detect-capital/solutions/3791507/)

---

# Code
```
defmodule Solution do
  @spec detect_capital_use(word :: String.t) :: boolean
  def detect_capital_use(word) do
    word == String.downcase(word) or 
    word == String.upcase(word) or
    word == String.capitalize(word)
  end
end
```