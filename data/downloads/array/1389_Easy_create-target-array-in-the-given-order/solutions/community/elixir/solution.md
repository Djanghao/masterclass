# Elixir, uses Tuple

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4355790/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4355790/)

---

# Approach
Iterate the indexes and nums, use a tuple and insert the elements using Tuple.insert_at/3. Convert the resulting tuple into a list.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec create_target_array(nums :: [integer], index :: [integer]) :: [integer]
  def create_target_array(nums, index), do: do_create_target_array(index, nums, {})
  
  defp do_create_target_array([i_hd | i_tl], [n_hd | n_tl], res) do 
    do_create_target_array(i_tl, n_tl, Tuple.insert_at(res, i_hd, n_hd))
  end
  defp do_create_target_array([], _, res), do: Tuple.to_list(res)
end
```