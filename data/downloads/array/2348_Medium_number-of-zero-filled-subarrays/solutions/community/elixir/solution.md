# Simple Elixir solution

**Author:** kkhaniffff
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3323555/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3323555/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each zero in the list, the number of zero-filled subarrays that end at that index is equal to the number of consecutive zeros up to and **including** that index.

# Approach
<!-- Describe your approach to solving the problem. -->
Traverse the list keeping track of how many consecutive zeros we've seen so far. If current element is zero, add that number to a counter. Else set it to zero and loop further.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - traversing the list

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - tail-call optimization is applied for recursive calls

# Code
```
defmodule Solution do
    @spec zero_filled_subarray(nums :: [integer]) :: integer
    def zero_filled_subarray(nums) do
        count(nums, 0, 0)
    end

    defp count([], _zeros, acc), do: acc
    defp count([0 | tail], zeros, acc), do: count(tail, zeros + 1, acc + zeros + 1)
    defp count([_head | tail], _zeros, acc), do: count(tail, 0, acc)
end
```
Please consider upwoting, if you found my solution helpful.