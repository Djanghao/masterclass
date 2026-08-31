# Elixir, divide and conquer

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/4454535/](https://leetcode.com/problems/longest-nice-substring/solutions/4454535/)

---

# Approach
Creates a mapset of characters in the string, iterates the string, checks if the counter part character is present for each character. Divides the string into two at the character that does not have it's equal counterpart in the mapset and recurses on the two substrings until a nice string is found.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec longest_nice_substring(s :: String.t) :: String.t
  def longest_nice_substring(s) when byte_size(s) < 2, do: ""
  def longest_nice_substring(s) do
    ch_set = get_ch_set(s)
    case nice?(s, 0, ch_set) do
      true -> s
      {false, i} -> res1 = longest_nice_substring(binary_part(s, 0, i))
                    res2 = longest_nice_substring(binary_part(s, i + 1, byte_size(s) - (i + 1)))
                    if byte_size(res2) > byte_size(res1), do: res2, else: res1 
    end
  end

  defp nice?(<<f, rest::bytes>>, i, ch_set) do
    if MapSet.member?(ch_set, get_op_case(f)), do: nice?(rest, i + 1, ch_set), else: {false, i}
  end
  defp nice?(_, _, _), do: true

  defp get_ch_set(s), do: for <<x <- s>>, into: MapSet.new(), do: x

  defp get_op_case(ch) when ch >= ?a and ch <= ?z, do: ch - (?a - ?A)
  defp get_op_case(ch), do: ch + (?a - ?A)
end
```