# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/4532749/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/4532749/)

---

# Approach
Uses binary pattern matching to iterate and calculate the numerical value of words.

# Complexity
- Time complexity:
O(n + m + k) where n, m and k are lengths of first_word, second_word and target_word
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_sum_equal(first_word :: String.t, second_word :: String.t, target_word :: String.t) :: boolean
  def is_sum_equal(first_word, second_word, target_word) do
    get_num_value(first_word, 0) +  get_num_value(second_word, 0) ==  get_num_value(target_word, 0)
  end

  defp get_num_value(<<ch, rest::bytes>>, acc) do
    get_num_value(rest, (acc * 10) + get_val(ch))
  end
  defp get_num_value(_, acc), do: acc

  defp get_val(ch), do: ch - ?a
end
```