# Elixir, uses :array

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/4637814/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/4637814/)

---

# Approach
Iterate the numbers and increase its count in the array. Iterate the count array and accumulate the indexes whose count is equal to the number of lists in nums.

# Complexity
- Time complexity:
O(n * m) where n is the number of lists, and m is the average length of each list

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec intersection(nums :: [[integer]]) :: [integer]
  def intersection(nums) do
    {arr, len} = for list <- nums, reduce: {:array.new([size: 1001, default: 0, fixed: true]), 0} do
      {arr, len} -> arr = for x <- list, reduce: arr do
                           arr -> :array.set(x, :array.get(x, arr) + 1, arr)
                          end
                    {arr, len + 1}
    end
    for i <- 1000..0, :array.get(i, arr) == len, reduce: [] do
      acc -> [i | acc]
    end
  end
end
```