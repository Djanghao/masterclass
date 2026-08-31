# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/4289964/](https://leetcode.com/problems/reverse-only-letters/solutions/4289964/)

---

# Approach
Use binary pattern matching and tail call recursion to iterate each character in the string and the reversed string to accumulate the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec reverse_only_letters(s :: String.t) :: String.t
  def reverse_only_letters(s), do: do_reverse_only_letters(s, String.reverse(s), <<>>)

  defp do_reverse_only_letters(<<f, rest::bytes>>, <<rev_f, rev_rest::bytes>>, res) do
    case {alphabet?(f), alphabet?(rev_f)} do
      {true, true} -> do_reverse_only_letters(rest, rev_rest, <<res::bytes, rev_f>>)
      {true, false} -> do_reverse_only_letters(<<f, rest::bytes>>, rev_rest, res)
      {false, _} -> do_reverse_only_letters(rest, <<rev_f, rev_rest::bytes>>, <<res::bytes, f>>)
    end
  end
  defp do_reverse_only_letters(<<>>, _s, res), do: res
  defp do_reverse_only_letters(s, <<>>, res), do: <<res::bytes, s::bytes>>

  defp alphabet?(cp), do: (cp >= ?a and cp <= ?z) or (cp >= ?A and cp <= ?Z)
end
```