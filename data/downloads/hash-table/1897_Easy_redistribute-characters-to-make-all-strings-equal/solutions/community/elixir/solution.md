# Elixir, uses map and binary comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4550508/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4550508/)

---

# Approach
Iterate all the words, keep track of word count and use binary comprehension to get character count of all the words. Return true if the character count of all the characters are divisible by the word count.

# Complexity
- Time complexity:
O(n) where n is the length of all the characters of all the words

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec make_equal(words :: [String.t]) :: boolean
  def make_equal(words), do: do_make_equal(words, %{}, 0)

  defp do_make_equal([word | tl], char_count_map, word_count) do
    do_make_equal(tl, update_char_count(word, char_count_map), word_count + 1)
  end
  defp do_make_equal(_, char_count_map, word_count) do
    Enum.all?(char_count_map, fn {_, n} -> rem(n, word_count) == 0 end)
  end
  
  defp update_char_count(word, map) do
    for <<ch <- word>>, reduce: map do
      map -> Map.update(map, ch, 1, &(&1 + 1))
    end
  end
end
```