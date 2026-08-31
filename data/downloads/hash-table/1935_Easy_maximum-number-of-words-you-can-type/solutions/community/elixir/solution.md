# Elixir, uses binary pattern matching and MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/4555764/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/4555764/)

---

# Approach
Create a MapSet from the characters in broken letters. Iterate the chracters in the text string and check if any of the characters are present in the broken letters map. If so use a boolean flag to indicate that this word cannot be typed. When you encounter a space character update the result based on the boolean flag that indicates if the previous word can be typed.

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of strings text and broken_letters

- Space complexity:
O(m)

# Code
```
defmodule Solution do
  @spec can_be_typed_words(text :: String.t, broken_letters :: String.t) :: integer
  def can_be_typed_words(text, broken_letters) do
    do_can_be_typed_words(text, get_broken_letters_set(broken_letters), true, 0)
  end

  defp do_can_be_typed_words(<<" ", rest::bytes>>, broken_letters, word_typable?, acc) do
    acc = if word_typable?, do: acc + 1, else: acc
    do_can_be_typed_words(rest, broken_letters, true, acc)
  end
  defp do_can_be_typed_words(<<ch, rest::bytes>>, broken_letters, word_typable?, acc) do
    cond do
      word_typable? -> do_can_be_typed_words(rest, broken_letters, !MapSet.member?(broken_letters, ch), acc)
      true -> do_can_be_typed_words(rest, broken_letters, false, acc)
    end
  end
  defp do_can_be_typed_words(_, _, word_typable?, acc), do: (if word_typable?, do: acc + 1, else: acc) 

  defp get_broken_letters_set(str) do
    for <<x <- str>>, reduce: MapSet.new() do
      set -> MapSet.put(set, x)
    end
  end
end
```