# Cleanest Elixir Solution

**Author:** aedwardg
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/1973209/](https://leetcode.com/problems/palindrome-number/solutions/1973209/)

---

```
defmodule Solution do
  def is_palindrome(x) when x < 0, do: false
  def is_palindrome(x) when x < 10, do: true
  def is_palindrome(x) do
    reversed =
      x
      |> Integer.digits
      |> Enum.reverse
      |> Integer.undigits
    x == reversed
  end
end
```