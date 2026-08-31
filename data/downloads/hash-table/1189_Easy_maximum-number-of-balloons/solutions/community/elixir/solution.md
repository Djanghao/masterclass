# Elixir, binary pattern matching, maps

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/4326826/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/4326826/)

---

# Approach
Creates a character count map from the text string. Checks the number of all the letters from the word 'balloon' in the character count map and returns how many words can be formed from them.

# Complexity
- Time complexity:
O(n) where n is the length of text

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @chars [?b, ?a, ?l, ?o, ?n]

  @spec max_number_of_balloons(text :: String.t) :: integer
  def max_number_of_balloons(text) do
    text_char_count = get_char_count(text, Map.new(@chars, &{&1, 0}))
    per_word_count = %{?b => 1, ?a => 1, ?l => 2, ?o => 2, ?n => 1}
    do_max_number_of_balloons(@chars, text_char_count, per_word_count, nil)
  end

  defp get_char_count(<<f, rest::bytes>>, map) do
    map = if f in @chars, do: Map.update(map, f, 1, &(&1 + 1)), else: map
    get_char_count(rest, map)
  end
  defp get_char_count(<<>>, map), do: map

  defp do_max_number_of_balloons([ch | tl], total_count, per_word_count, max_count) do
    count = div(total_count[ch], per_word_count[ch])
    do_max_number_of_balloons(tl, total_count, per_word_count, min(count, max_count))
  end
  defp do_max_number_of_balloons([], _, _, max_count), do: max_count
end
```