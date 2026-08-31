# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4393189/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4393189/)

---

# Approach
Iterate the text read characters one by one in the string using binary pattern matching. Keep track of number of spaces, number of words and a list containing all the words. Build the result using the above data.

# Complexity
- Time complexity:
O(n) where n is the length of text
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec reorder_spaces(text :: String.t) :: String.t
  def reorder_spaces(text) do
    {space_count, words, words_count} = get_space_count(text, <<>>, 0, [], 0)
    cond do
      space_count == 0 -> text
      words_count == 1 -> hd(words) <> String.duplicate(" ", space_count)
      true -> space_between_words = div(space_count, words_count - 1)
              extra_space = rem(space_count, words_count - 1)
              result = Enum.join(words, String.duplicate(" ", space_between_words)) <> String.duplicate(" ", extra_space)
    end
  end

  defp get_space_count(<<ch, rest::bytes>>, cur_word, space_count, words, words_count) do
    cond do
      ch == ?\\s and byte_size(cur_word) > 0 -> get_space_count(rest, <<>>, space_count + 1, [cur_word | words], words_count + 1)
      ch == ?\\s -> get_space_count(rest, cur_word, space_count + 1, words, words_count)
      true -> get_space_count(rest, <<cur_word::bytes, ch>>, space_count, words, words_count)
    end
  end
  defp get_space_count(_, cur_word, space_count, words, words_count) do 
    cond do
      byte_size(cur_word) == 0 -> {space_count, Enum.reverse(words), words_count}
      true -> {space_count, Enum.reverse([cur_word | words]), words_count + 1}
    end
  end
end
```