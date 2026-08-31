# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/4627645/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/4627645/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec divide_array(nums :: [integer]) :: boolean
  def divide_array(nums) do
    for x <- nums, reduce: MapSet.new() do
      acc -> if MapSet.member?(acc, x),
             do: MapSet.delete(acc, x),
             else: MapSet.put(acc, x)
    end |> MapSet.size |> Kernel.==(0)
  end
end
```