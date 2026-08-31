# Elixir easy to understand

**Author:** hongsuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/2902623/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/2902623/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec append_characters(s :: String.t, t :: String.t) :: integer
  def append_characters(_, ""), do: 0
  def append_characters("", t), do: String.length(t)
  def append_characters(<<c>> <> s, <<c>> <> t), do: append_characters(s, t)
  def append_characters(<<_>> <> s, t), do: append_characters(s, t)
end
```