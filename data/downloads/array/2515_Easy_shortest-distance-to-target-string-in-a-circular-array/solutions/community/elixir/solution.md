# Elixir,  for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4711621/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4711621/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec closet_target(words :: [String.t], target :: String.t, start_index :: integer) :: integer
  def closet_target(words, target, start_index) do
    {len, tgt_indexes} = for x <- words, reduce: {0, []} do
      {i, tgt_indexes} -> if x == target, do: {i + 1, [i | tgt_indexes]},
                          else: {i + 1, tgt_indexes} 
    end
    for x <- tgt_indexes, reduce: nil do
      res -> dist = abs(start_index - x)
             min(dist, len - dist) |> min(res)
    end || -1
  end
end
```