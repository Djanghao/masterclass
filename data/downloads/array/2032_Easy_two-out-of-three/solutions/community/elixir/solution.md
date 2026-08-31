# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/4579807/](https://leetcode.com/problems/two-out-of-three/solutions/4579807/)

---

# Approach
Create MapSets for nums1 and nums2, iterate nums2 and num3 to check if any number is present in nums1_set. Iterate num3 and check if any number is present in nums2_set. Keep track of the result in a MapSet to avoid duplicates.

# Complexity
- Time complexity:
O(n + m + k) where n, m and k are the lengths of the lists nums1, nums2 and nums3 

- Space complexity:
O(n + m + k)

# Code
```
defmodule Solution do
  @spec two_out_of_three(nums1 :: [integer], nums2 :: [integer], nums3 :: [integer]) :: [integer]
  def two_out_of_three(nums1, nums2, nums3) do
    n1_set = MapSet.new(nums1)
    {res, n2_set} = for x <- nums2, reduce: {MapSet.new(), MapSet.new()} do
      {res, n2_set} -> res = if MapSet.member?(n1_set, x), do: MapSet.put(res, x), else: res
                       {res, MapSet.put(n2_set, x)}
    end
    for x <- nums3, MapSet.member?(n1_set, x) ||  MapSet.member?(n2_set, x), reduce: res do
      res -> MapSet.put(res, x)
    end |> MapSet.to_list
  end
end
```