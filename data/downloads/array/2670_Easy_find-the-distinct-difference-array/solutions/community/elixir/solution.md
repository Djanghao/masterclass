# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/4750316/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/4750316/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec distinct_difference_array(nums :: [integer]) :: [integer]
  def distinct_difference_array(nums) do
    for x <- nums, reduce: {MapSet.new(), Enum.frequencies(nums), []} do
      {prefix_set, suffix_freq, acc} -> 
        prefix_set = MapSet.put(prefix_set, x)
        suffix_freq = case suffix_freq[x] do
          nil -> suffix_freq
          1 -> Map.delete(suffix_freq, x)
          n -> Map.put(suffix_freq, x, n - 1)
        end
        {prefix_set, suffix_freq, [MapSet.size(prefix_set) - map_size(suffix_freq) | acc]}
    end |> elem(2) |> Enum.reverse
  end
end
```