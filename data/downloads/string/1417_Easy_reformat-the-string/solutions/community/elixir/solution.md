# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/4360311/](https://leetcode.com/problems/reformat-the-string/solutions/4360311/)

---

# Approach
Iterate the characters one by one from the string. Keep count of letters and digits. Use two lists to accumulate the letters and digits separately. If the letter count or the digit count goes past the maximum allowed count, return empty string. Else use the letters and digits list to create the resulting string by alternating the characters.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec reformat(s :: String.t) :: String.t
  def reformat(s) do
    size = byte_size(s)
    max_count = div(size, 2) + rem(size, 2)
    case get_letter_digit_list(s, max_count, [], 0, [], 0) do
      {:ok, list1, list2} -> shuffle(list1, list2, <<>>)
      _ -> ""
    end
  end

  defp shuffle([ch | rest], [ch1 | rest1], res), do: shuffle(rest, rest1, <<res::bytes, ch, ch1>>)
  defp shuffle([ch | rest], [], res), do: <<res::bytes, ch>>
  defp shuffle([], [], res), do: res

  defp get_letter_digit_list(<<f, rest::bytes>>, max_count, letters, letters_count, digits, digits_count) do
    cond do
      letters_count > max_count || digits_count > max_count -> false
      f >= ?0 and f <= ?9 -> get_letter_digit_list(rest, max_count, letters, letters_count, [f | digits], digits_count + 1)
      true -> get_letter_digit_list(rest, max_count, [f | letters], letters_count + 1, digits, digits_count)
    end
  end
  defp get_letter_digit_list(_, max_count, letters, letters_count, digits, digits_count) do
    cond do
      letters_count > max_count || digits_count > max_count -> false
      letters_count > digits_count -> {:ok, letters, digits}
      true -> {:ok, digits, letters}
    end
  end
end
```