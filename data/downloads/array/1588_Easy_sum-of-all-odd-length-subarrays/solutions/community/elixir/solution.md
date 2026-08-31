# sum the array in multiples

**Author:** hanaBa
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/4960051/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/4960051/)

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

# Code
```
defmodule Solution do
  @spec sum_odd_length_subarrays(arr :: [integer]) :: integer
  def sum_odd_length_subarrays(arr) do
    sum_array(0, arr, 1)
  end

  def sum_array(sum, arr, length_sub_arr) when length_sub_arr <= length(arr) do
    x = [length_sub_arr - 1, length(arr) - length_sub_arr]
    min = Enum.min(x)
    max = Enum.max(x)
    sum_sub_array = arr |> Enum.slice(min, max - min + 1) |> Enum.sum() |> Kernel.*(min + 1)
    sum_details_array = add_details(0, arr, min-1)
    sum_array(sum + sum_sub_array + sum_details_array, arr, length_sub_arr + 2)
  end
  def sum_array(sum, arr, length_sub_arr), do: sum

  def add_details(sum, arr, index) when index >= 0 do
    sum_index = (Enum.at(arr, index) + Enum.at(arr, length(arr) - index - 1)) |> Kernel.*(index + 1)
    add_details(sum + sum_index, arr, index - 1)
  end
  def add_details(sum, arr, index), do: sum

end
```