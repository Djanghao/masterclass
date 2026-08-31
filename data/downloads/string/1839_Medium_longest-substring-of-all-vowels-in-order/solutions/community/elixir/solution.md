# Elixir : 4 cases for each character

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3101217/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3101217/)

---

# Code
```elixir
defmodule Solution do
  @spec longest_beautiful_substring(word :: String.t) :: integer
  def longest_beautiful_substring(word) do
    order = %{?a => ?e, ?e => ?i, ?i => ?o, ?o => ?u}
    String.to_charlist(word)
    |> Enum.reduce({0, 0, ?z}, fn ch, {ans, len, prev} ->
      in_order? = prev == ch or Map.get(order, prev) == ch
      case {in_order?, ch} do
        {true, ?u} -> {max(ans, len + 1), len + 1, ch}
        {true, _} -> {ans, len + 1, ch}
        {false, ?a} -> {ans, 1, ?a}
        {false, _} -> {ans, 0, ?z}
      end
    end)
    |> elem(0)
  end
end
```