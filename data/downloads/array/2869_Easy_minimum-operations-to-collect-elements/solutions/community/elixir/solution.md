# Elixir, O(n) uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4788840/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4788840/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(k)

# Code
```
defmodule Solution do
  @spec min_operations(nums :: [integer], k :: integer) :: integer
  def min_operations(nums, k) do
    {k_ind_map, len} = for x <- nums, reduce: {%{}, 0} do
      {acc, i} -> 
        acc = if x <= k, do: Map.put(acc, x, i), else: acc
        {acc, i + 1}
    end
    smallest_ind = k_ind_map |> Map.values |> Enum.min()
    len - smallest_ind
  end
end
```