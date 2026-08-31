# Elixir solution with pattern matching

**Author:** hongsuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2571323/](https://leetcode.com/problems/utf-8-validation/solutions/2571323/)

---

1. Convert integer list into binary.
2. Consume valid UTF-8 chars from the head.
3. Until the binary is empty.
4. Or return false.

```
defmodule Solution do
  @spec valid_utf8(data :: [integer]) :: boolean
  def valid_utf8(data) do
    data
    |> Enum.into(<<>>, & <<&1::8>>)
    |> compute()
  end
    
  def compute(<<>>), do: true
  def compute(<<0::1, _::7, rest::binary>>), do: compute(rest)
  def compute(<<6::3, _::5, 2::2, _::6, rest::binary>>), do: compute(rest)
  def compute(<<14::4, _::4, 2::2, _::6, 2::2, _::6, rest::binary>>), do: compute(rest)
  def compute(<<30::5, _::3, 2::2, _::6, 2::2, _::6, 2::2, _::6, rest::binary>>), do: compute(rest)
  def compute(_), do: false
end
```