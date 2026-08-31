# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/ransom-note/solutions/4188373/](https://leetcode.com/problems/ransom-note/solutions/4188373/)

---

# Approach
Iterate the ransom note and create a frequency map of the characters. Iterate the magazine and check if all the characters exist in the frequency map.

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of ransom note and magazine

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec can_construct(ransom_note :: String.t, magazine :: String.t) :: boolean
  def can_construct(ransom_note, magazine) do
    ransom_freq = for <<x <- ransom_note>>, reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end
    ransom_freq = for <<x <- magazine>>, reduce: ransom_freq do
      acc -> case acc[x] do
        nil -> acc
        1 -> Map.delete(acc, x)
        n -> Map.put(acc, x, n - 1)
      end
    end
    map_size(ransom_freq) == 0
  end 
end
```