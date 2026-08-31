# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/4622497/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/4622497/)

---

# Approach
Uses for comprehension to iterate evey number, check if the prev number is the key, keep track of possible results and their counts to return highest occuring result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec most_frequent(nums :: [integer], key :: integer) :: integer
  def most_frequent(nums, key) do
    for x <- nums, reduce: {nil, %{}, 0, 0} do
      {prev, count, max, max_count} -> cond do
        prev != key -> {x, count, max, max_count} 
        true -> new_count = Map.get(count, x, 0) + 1
                max = if new_count > max_count, do: x, else: max
                {x, Map.put(count, x, new_count), max, max(max_count, new_count)}
      end                
    end |> elem(2)
  end
end
```