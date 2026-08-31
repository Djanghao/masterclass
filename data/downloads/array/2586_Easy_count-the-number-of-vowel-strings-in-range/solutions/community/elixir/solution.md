# Elixir, linear

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/4730843/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/4730843/)

---

# Complexity
- Time complexity:
O(right)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec vowel_strings(words :: [String.t], left :: integer, right :: integer) :: integer
  def vowel_strings(words, left, right), do: do_vowel_strings(words, 0, left, right, 0)

  defp do_vowel_strings([_ | tl], i, l, r, acc) when i < l, do: do_vowel_strings(tl, i + 1, l, r, acc)
  defp do_vowel_strings(_, i, _, r, acc) when i > r, do: acc
  defp do_vowel_strings([hd | tl], i, l, r, acc) do
    acc = if vowel_str?(hd), do: acc + 1, else: acc
    do_vowel_strings(tl, i + 1, l , r, acc)
  end

  defp vowel_str?(word) do 
    (:binary.at(word, 0) |> vowel?) && (:binary.at(word, byte_size(word) - 1) |> vowel?)
  end
  defp vowel?(cp), do: cp in [?a, ?e, ?i, ?o, ?u]
end
```