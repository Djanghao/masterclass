# Elixir, uses binary pattern matching, map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4322980/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4322980/)

---

# Approach
Uses binary pattern matching to create a character count map from chars. Iterate the words one by one to check if the word can be made from the character count map and add the length of the word to the accumulator.

# Complexity
- Time complexity:
O(max(n,m)) where n is the total characters in all the words and m is the length of chars

- Space complexity:
O(max(n,m))

# Code
```
defmodule Solution do
  @spec count_characters(words :: [String.t], chars :: String.t) :: integer
  def count_characters(words, chars) do
    chars_count = frequencies(chars, %{})
    do_count_characters(words, chars_count, 0)
  end

  defp do_count_characters([hd | tl], chars_count, acc) do 
    acc = if formable?(hd, chars_count), do: acc + byte_size(hd), else: acc
    do_count_characters(tl, chars_count, acc)
  end
  defp do_count_characters([], _, acc), do: acc

  defp formable?(<<f, rest::bytes>>, chars_count) do
    case chars_count[f] do
      nil -> false
      1 -> formable?(rest, Map.delete(chars_count, f))
      x -> formable?(rest, Map.put(chars_count, f, x - 1))
    end
  end
  defp formable?(<<>>, _), do: true

  defp frequencies(<<f, rest::bytes>>, map), do: frequencies(rest, Map.update(map, f, 1, &(&1 +1 )))
  defp frequencies(<<>>, map), do: map
end
```