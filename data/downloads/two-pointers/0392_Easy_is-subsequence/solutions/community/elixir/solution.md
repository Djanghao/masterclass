# Elixir strings as binaries

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/4074464/](https://leetcode.com/problems/is-subsequence/solutions/4074464/)

---

# Code
```elixir
defmodule Solution do
  @spec is_subsequence(s :: String.t, t :: String.t) :: boolean
  def is_subsequence("", _), do: true
  def is_subsequence(_, ""), do: false
  def is_subsequence(<<ch, s::binary>>, <<ch, t::binary>>) do
    is_subsequence(s, t)
  end
  def is_subsequence(s, <<_, t::binary>>) do
    is_subsequence(s, t)
  end
end
```