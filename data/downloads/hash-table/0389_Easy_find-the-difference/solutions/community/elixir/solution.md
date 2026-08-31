# Elixir solution

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/4087069/](https://leetcode.com/problems/find-the-difference/solutions/4087069/)

---

# Code
```
defmodule Solution do
  @spec find_the_difference(s :: String.t, t :: String.t) :: char
  def find_the_difference(s, t) do
    String.to_charlist(s <> t) |> Enum.reduce(&Bitwise.bxor/2)
  end
end
```