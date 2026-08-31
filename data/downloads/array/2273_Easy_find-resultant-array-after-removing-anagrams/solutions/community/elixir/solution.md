# Elixir, uses char count map comparison

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4646773/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4646773/)

---

# Approach
Create character counts for the words and compare them to create the result.

# Complexity
- Time complexity:
O(n * m) where n is the number of words and m is the average length of the words
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec remove_anagrams(words :: [String.t]) :: [String.t]
  def remove_anagrams(words), do: do_remove_anagrams(words, char_count(hd(words)), [])

  defp do_remove_anagrams([wd1, wd2 | tl], w1_ch_count, acc) do
    w2_ch_count = char_count(wd2)
    if w1_ch_count == w2_ch_count,
    do: do_remove_anagrams([wd1 | tl], w1_ch_count, acc),
    else: do_remove_anagrams([wd2 | tl], w2_ch_count, [wd1 | acc])
  end
  defp do_remove_anagrams([wd], _, acc), do: [wd | acc] |> Enum.reverse()

  defp char_count(str) do
    for <<x <- str>>, reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end
  end
end
```