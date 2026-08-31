# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4737535/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4737535/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_number(nums1 :: [integer], nums2 :: [integer]) :: integer
  def min_number(nums1, nums2) do
    set1 = MapSet.new(nums1)
    set2 = MapSet.new(nums2)
    for x <- 1..9, reduce: {nil, nil} do
      {n1_min, n2_min} -> 
        n1_present? = MapSet.member?(set1, x)
        n2_present? = MapSet.member?(set2, x)
        cond do
            n1_present? && n2_present? -> throw x
            n1_present? -> {min(n1_min, x), n2_min}
            n2_present? -> {n1_min, min(n2_min, x)}
            true -> {n1_min, n2_min}
        end
    end |> then(fn {n1_min, n2_min} -> min(n1_min, n2_min) * 10 + max(n1_min, n2_min) end)
  catch
    x -> x
  end
end
```