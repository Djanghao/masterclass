# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/4398180/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/4398180/)

---

# Approach
Sort the array using Enum.sort, get the sum of only the 90% elements in the middle of the sorted array and return their mean.

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec trim_mean(arr :: [integer]) :: float
  def trim_mean(arr) do
    arr = Enum.sort(arr)
    length = length(arr)
    five_percent_count = div(length * 5, 100)
    sum = get_remaining_sum(arr, 0, five_percent_count, length - five_percent_count - 1, 0)
    sum/(length - (2 *  five_percent_count))
  end

  defp get_remaining_sum([hd | tl], i, min_i, max_i, sum) when i >= min_i and i <= max_i do
    get_remaining_sum(tl, i + 1, min_i, max_i, sum + hd)
  end
  defp get_remaining_sum([_ | tl], i, min_i, max_i, sum) do
    cond do
      i < min_i -> get_remaining_sum(tl, i + 1, min_i, max_i, sum)
      true -> sum
    end
  end
end
```