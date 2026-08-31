# Create maps and use them as reference

**Author:** grantzukowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5841354/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5841354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
0(n) could be improved

# Code
```elixir []
defmodule Solution do
  @spec find_intersection_values(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def find_intersection_values(nums1, nums2) do
    nums_1_map = Enum.reduce(nums1, %{}, fn v, acc ->
        if Map.get(acc, to_string(v)) do
            Map.put(acc, to_string(v), Map.get(acc, to_string(v)) + 1)
        else
            Map.put(acc, to_string(v), 1)
        end
    end)

    nums_2_map = Enum.reduce(nums2, %{}, fn v, acc ->
        if Map.get(acc, to_string(v)) do
            Map.put(acc, to_string(v), Map.get(acc, to_string(v)) + 1)
        else
            Map.put(acc, to_string(v), 1)
        end
    end)

    first_total = Enum.reduce(nums1, 0, fn num, acc -> 
        if Map.get(nums_2_map, to_string(num)) do
            acc + 1
        else
            acc
        end
    end)

    second_total = Enum.reduce(nums2, 0, fn num, acc -> 
        if Map.get(nums_1_map, to_string(num)) do
            acc + 1
        else
            acc
        end
    end)

    [first_total, second_total]
  end
end
```