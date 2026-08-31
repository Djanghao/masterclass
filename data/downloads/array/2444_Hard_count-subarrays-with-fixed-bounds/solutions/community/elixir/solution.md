# Elixir solution with sliding window

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3255421/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3255421/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each index `i` we count number of valid subarrays until this index.
Subarray is said to be valid if it contais elements equal to `min_k` and `max_k`, so to count all such subarrays until some index, we need to start from the leftmost index containing valid value (between `min_k` and `max_k`) and count all subarrays until the position of `min_k` **OR** `max_k` closest to the given index `i`.

# Approach
<!-- Describe your approach to solving the problem. -->
For each index `i` we:
- update `left_bound` if the value at that index is smaller than `min_k` or greater than `max_k`
- update `min_position` and `max_position` if the value is equal to `min_k` and `max_k` respectively
- calculate number of valid subarrays and add it to the result (aka accumulator)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - we just traverse a list once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - since tail-call optimization will be applied for recursive calls

# Code
```
defmodule Solution do
    defstruct [:min_k, :max_k, min_position: -1, max_position: -1, left_bound: -1]

    @spec count_subarrays(nums :: [integer], min_k :: integer, max_k :: integer) :: integer
    def count_subarrays(nums, min_k, max_k) do
        count(nums, %Solution{min_k: min_k, max_k: max_k}, 0, 0)
    end

    defp count([], _, _, acc), do: acc

    defp count([head | tail], values, index, acc) when head < values.min_k 
                                                  when head > values.max_k do
        count(tail, %{values | left_bound: index}, index + 1, acc)
    end

    defp count([head | tail], values, index, acc) do
        values = if head == values.min_k, do: %{values | min_position: index}, else: values
        values = if head == values.max_k, do: %{values | max_position: index}, else: values

        new_subarrays = max(0, min(values.min_position, values.max_position) - values.left_bound)
        count(tail, values, index + 1, acc + new_subarrays)
    end
end
```