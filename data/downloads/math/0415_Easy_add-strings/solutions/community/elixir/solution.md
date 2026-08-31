# Simple solution

**Author:** maaaachoalpha
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-strings/solutions/4989316/](https://leetcode.com/problems/add-strings/solutions/4989316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- convert the strings to ints
- add them
- convert the result back to a string

# Code
```
defmodule Solution do
  @spec add_strings(num1 :: String.t, num2 :: String.t) :: String.t
  def add_strings(num1, num2) do
    Integer.to_string(String.to_integer(num1) + String.to_integer(num2))
  end
end
```