# Elixir use Bitwise

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/5255396/](https://leetcode.com/problems/longest-palindrome/solutions/5255396/)

---

# Code
```
defmodule Solution do
  use Bitwise

  @spec longest_palindrome(s :: String.t) :: integer
  def longest_palindrome(s) do
    String.to_charlist(s)
    |> Enum.frequencies()
    |> Enum.reduce(0, fn
      {_, c}, ans -> (ans + (c >>> 1 <<< 1)) ||| (c &&& 1)
    end)
  end
end
```