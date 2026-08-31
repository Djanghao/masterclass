# Elixir, :binary.at

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4756053/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4756053/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec make_smallest_palindrome(s :: String.t) :: String.t
  def make_smallest_palindrome(s), do: do_smallest_palindrome(s, 0, byte_size(s) - 1, <<>>, [])

  defp do_smallest_palindrome(s, i, j, first_half, second_half) when i < j do
    ch = min(:binary.at(s, i), :binary.at(s, j))
    do_smallest_palindrome(s, i + 1, j - 1, <<first_half::bytes, ch>>, [ch | second_half])
  end
  defp do_smallest_palindrome(s, i, i, first_half, second_half) do
    <<first_half::bytes, :binary.at(s, i)>> <> List.to_string(second_half)
  end
  defp do_smallest_palindrome(_, _, _, first_half, second_half) do
    first_half <> List.to_string(second_half)
  end
end
```