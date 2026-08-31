# Elixir, brute force, O(n²)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/4592130/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/4592130/)

---

# Approach
Iterate all the possible substrings and check if they are valid vowel substrings.

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @vowel_map  %{?a => 0, ?e => 0, ?i => 0, ?o => 0, ?u => 0}

  @spec count_vowel_substrings(word :: String.t) :: integer
  def count_vowel_substrings(word), do: do_count_vowel_substrings(word, 0, 0, @vowel_map, 0)

  defp do_count_vowel_substrings(word, i, _, _, acc) when i >= byte_size(word), do: acc
  defp do_count_vowel_substrings(word, i, j, vwl_map, acc) when i == j do
    ch = :binary.at(word, i)
    cond do
      vowel?(ch) -> do_count_vowel_substrings(word, i, j + 1, Map.update(vwl_map, ch, 1, &(&1 + 1)), acc)
      true -> do_count_vowel_substrings(word, i + 1, j + 1, @vowel_map, acc)
    end
  end
  defp do_count_vowel_substrings(word, i, j, vwl_map, acc) do
    cond do
      j < byte_size(word) && vowel?(:binary.at(word, j)) -> vwl_map = Map.update(vwl_map, :binary.at(word, j), 1, &(&1 + 1))
                    do_count_vowel_substrings(word, i, j + 1, vwl_map, (if valid?(vwl_map), do: acc + 1, else: acc))
      true -> acc = cond do
                j - i > 5 && valid?(vwl_map) -> sub_str = binary_part(word, i + 1, j - (i + 1))
                                                acc + do_count_vowel_substrings(sub_str, 0, 0, @vowel_map, 0)
                true -> acc
              end
              do_count_vowel_substrings(word, j, j, @vowel_map, acc)
    end
  end

  defp vowel?(ch), do: ch in [?a, ?e, ?i, ?o, ?u]

  defp valid?(map), do: Enum.all?([?a, ?e, ?i, ?o, ?u], &(map[&1] > 0))
end
```