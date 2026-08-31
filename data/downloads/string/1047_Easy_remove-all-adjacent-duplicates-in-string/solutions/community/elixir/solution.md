# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/4315728/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/4315728/)

---

# Approach
Uses binary pattern matching to iterate each character in the string and accumulating the result by checking every character with the previous and next characters.

# Complexity
- Time complexity:
O(n) where n is the length of the string s 

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec remove_duplicates(s :: String.t) :: String.t
  def remove_duplicates(s), do: do_remove_duplicates(s, <<>>, nil)

  defp do_remove_duplicates(<<f, rest::bytes>>, res, prev_ch) when f == prev_ch do
    res = remove_last_ch(res)
    prev_ch = get_last_ch(res)
    do_remove_duplicates(rest, res, prev_ch)
  end
  defp do_remove_duplicates(<<f, s, rest::bytes>>, res, prev_ch) when f == s, do: do_remove_duplicates(rest, res, prev_ch)
  defp do_remove_duplicates(<<f, rest::bytes>>, res, _), do: do_remove_duplicates(rest, <<res::bytes, f>>, f)
  defp do_remove_duplicates(<<>>, res, _), do: res


  defp remove_last_ch(<<>>), do: <<>>
  defp remove_last_ch(s), do: binary_part(s, 0, byte_size(s) - 1)

  defp get_last_ch(<<>>), do: nil
  defp get_last_ch(s) do
    size = byte_size(s) - 1
    <<_::bytes-size(size), last_ch>> = s
    last_ch
  end
end
```