# Elixir, O(n), single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4789174/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4789174/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_triplet_value(nums :: [integer]) :: integer
  def maximum_triplet_value(nums) do
    for el <- nums, reduce: {0, 0, 0} do
      {res, max_ab, max_a} ->
        res = max(res, max_ab * el)
        max_ab = max(max_ab, max_a - el)
        max_a = max(max_a, el)
        {res, max_ab, max_a} 
    end |> elem(0)
  end
end
```