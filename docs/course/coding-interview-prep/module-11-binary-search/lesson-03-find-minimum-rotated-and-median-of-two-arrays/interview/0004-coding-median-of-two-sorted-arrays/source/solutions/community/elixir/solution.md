# Elixir solution

**Author:** async-devil
**Votes:** 1
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2828302/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2828302/)

---

# Code
```
defmodule Solution do
  @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
  def find_median_sorted_arrays(nums1, nums2) do
    list = Enum.sort(nums1 ++ nums2)

    cond do
        length(list) === 1 -> 
            Enum.at(list, 0)

        rem(length(list), 2) === 0 -> 
            start_index = trunc(length(list) / 2 - 1)
            (Enum.at(list, start_index) + Enum.at(list, start_index + 1)) / 2

        true -> 
            start_index = div(length(list), 2)
            Enum.at(list, start_index)
    end
  end
end
```