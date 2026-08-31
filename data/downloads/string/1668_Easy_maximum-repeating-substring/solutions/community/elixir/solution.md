# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/4407111/](https://leetcode.com/problems/maximum-repeating-substring/solutions/4407111/)

---

# Approach
Uses binary pattern matching to check if the word is present in the sequence. Keeps track of current continous count and max continous count. 

# Complexity
- Time complexity:
O(m * n) where m and n are the lengths of sequence and word

- Space complexity:
O(m * n)

# Code
```
defmodule Solution do
  @spec max_repeating(sequence :: String.t, word :: String.t) :: integer
  def max_repeating(sequence, word), do: do_max_repeating(sequence, word, byte_size(word), 0, 0)

  defp do_max_repeating(sequence, word, word_len, cur_count, max_count) do
    case sequence do
      <<^word::bytes-size(word_len), rest::bytes>> -> do_max_repeating(rest, word, word_len, cur_count + 1, max_count)
      <<_, rest::bytes>> when cur_count == 0 -> do_max_repeating(rest, word, word_len, 0, max_count)
      <<_, _::bytes>> ->  prev_word = binary_part(word, 1, word_len - 1)
                          do_max_repeating(<<prev_word::bytes, sequence::bytes>>, word, word_len, 0, max(max_count, cur_count))
      _ ->max(max_count, cur_count)
    end
  end
end
```