# Elixir, frequency of frequencies

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/4685417/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/4685417/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec equal_frequency(word :: String.t) :: boolean
  def equal_frequency(word) do
    freq = for <<x <- word>>, reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end 
    freq_count = Map.values(freq) |> Enum.frequencies()
    cond do
      map_size(freq_count) > 2 -> false
      map_size(freq_count) == 1 -> [{k, v}] = Map.to_list(freq_count)
                                   k == 1 || v == 1
      true -> [{k1, v1}, {k2, v2}] = Map.to_list(freq_count) |> Enum.sort_by(&(elem(&1, 0)))
              cond do
                v1 != 1 && v2 != 1 -> false
                (k1 == 1 && v1 == 1) || (k2 == 1 && v2 == 1) -> true
                true -> abs(k1 - k2) == 1 && v2 == 1
              end 
    end    
  end
end
```