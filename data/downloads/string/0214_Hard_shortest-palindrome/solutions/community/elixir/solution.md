# Using binary pattern matching in Elixir

**Author:** user0182C
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/1904707/](https://leetcode.com/problems/shortest-palindrome/solutions/1904707/)

---

If we start from the center of the string and try to compare the two splits from there and continue going back to the begining of the string we will find out the number of characters we need to add to the beginning of the string

```elixir
defmodule Solution do
  @spec shortest_palindrome(s :: String.t()) :: String.t()
  def shortest_palindrome(""), do: ""
  def shortest_palindrome(<<a::binary-1>>), do: a

  def shortest_palindrome(s) do
    rev_s = String.reverse(s)
    len = byte_size(s)
    max_pivot(s, rev_s, len, len - 1)
  end

  @doc "Finds the maximum amount of pivot and creates the desired string on success"
  def max_pivot(s, rev_s, len, pivot) do
    count = ceil(pivot / 2)
    skip_count = len - pivot - 1
    <<p1::binary-size(count), _::binary>> = s
    <<skip::binary-size(skip_count), p2::binary-size(count), _::binary>> = rev_s

    if p1 == p2 do
      skip <> s
    else
      max_pivot(s, rev_s, len, pivot - 1)
    end
  end
end

```