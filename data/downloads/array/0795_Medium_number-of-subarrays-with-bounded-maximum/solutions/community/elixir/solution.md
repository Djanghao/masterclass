# Elixir Solution

**Author:** martosaur
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/3498667/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/3498667/)

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
  @spec num_subarray_bounded_max(nums :: [integer], left :: integer, right :: integer) :: integer
  def num_subarray_bounded_max(nums, left, right) do
    nums
    |> Stream.map(fn
      i when i > right -> :X
      i when i >= left and i <= right -> 1
      i when i < left -> 0
    end)
    |> Stream.chunk_by(& &1 == :X)
    |> Stream.reject(& :X in &1)
    |> Stream.map(fn just_0_and_1_array ->
      {subarrays, _} =
        just_0_and_1_array
        |> Stream.with_index()
        |> Enum.reduce({0, nil}, fn
          {0, _i}, {total, nil} -> {total, nil}
          {0, _i}, {total, last_i} -> {total + last_i + 1, last_i}
          {1, i}, {total, _last_i} -> {total + i + 1, i}
        end)

      subarrays
    end)
    |> Enum.sum()
  end
end
```