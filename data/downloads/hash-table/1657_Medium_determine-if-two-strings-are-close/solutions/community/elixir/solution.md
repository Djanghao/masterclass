# Elixir solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2868080/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2868080/)

---

# Complexity
- Time complexity (worst case):
$$O(n \\log(n))$$

- Space complexity (worst case):
$$O(n)$$

# Code
```
defmodule Solution do
  @spec close_strings(word1 :: String.t, word2 :: String.t) :: boolean
  def close_strings(word1, word2) do
    word1 = :binary.bin_to_list(word1)
    word2 = :binary.bin_to_list(word2)

    chars(word1) == chars(word2) and freqs(word1) == freqs(word2)
  end

  defp chars(word) do
    word
    |> Enum.uniq()
    |> Enum.sort()
  end

  defp freqs(word) do
    word
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.sort()
  end
end
```