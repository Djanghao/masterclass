# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/4388368/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/4388368/)

---

# Approach
Iterate the characters in the string using binary pattern matching and compare each character with previous and next character to construct the result.

# Complexity
- Time complexity:
O(n) where n is the length of s

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec modify_string(s :: String.t) :: String.t
  def modify_string(s), do: do_modify_strings(nil, s, <<>>)

  defp do_modify_strings(prev, <<cur, rest::bytes>>, acc) do
    next = case rest do
      <<next, _::bytes>> -> next
      _ -> nil
    end
    new_ch = if cur == ??, do: get_uniq_ch(prev, next), else: cur
    do_modify_strings(new_ch, rest, <<acc::bytes, new_ch>>)
  end
  defp do_modify_strings(_, _, acc), do: acc

  defp get_uniq_ch(prev, next) do
    cond do
       prev != ?a and next != ?a -> ?a
       prev != ?b and next != ?b -> ?b
       true -> ?c
    end
  end
end
```