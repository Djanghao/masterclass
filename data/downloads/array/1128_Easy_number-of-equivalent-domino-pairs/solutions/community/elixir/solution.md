# Elixir, uses map and combinations

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4319802/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4319802/)

---

# Approach
Uses a map to store the frequencies of dominoes. Use one key for storing both types of equivalent dominoes. 

[a, b] as key for both [a, b] and [b, a]

Once you have the counts of each dominoes, iterate the counts and compute the result. For each count, compute the number of 2 element combinations you can make from that count and add it to the accumulator.

E.g. If the count of a domino of type [a, b] and [b, a] is 4. The total number of pairs that can be formed is equal to (n *(n - 1))/2 => (4(4-1))/2 = 6

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec num_equiv_domino_pairs(dominoes :: [[integer]]) :: integer
  def num_equiv_domino_pairs(dominoes), do: domino_frequencies(dominoes, %{}) |> Map.values |> compute_combinations(0)

  defp domino_frequencies([hd | tl], map), do: domino_frequencies(tl, Map.update(map, get_uniq_key(hd), 1, &(&1 + 1)))
  defp domino_frequencies([], map), do: map

  defp get_uniq_key([a, b] = key), do: if a > b, do: [b, a], else: key

  defp compute_combinations([1 | tl], count), do: compute_combinations(tl, count)
  defp compute_combinations([hd | tl], count), do: compute_combinations(tl, count + div(hd * (hd - 1), 2))
  defp compute_combinations([], count), do: count
end
```