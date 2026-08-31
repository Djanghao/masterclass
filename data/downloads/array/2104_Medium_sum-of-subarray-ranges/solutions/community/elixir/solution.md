# Elixir my solution use Enum.reduce().

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3475260/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3475260/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 545ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 65MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec sub_array_ranges(nums :: [integer]) :: integer
  def sub_array_ranges(nums) do
    sub_array_ranges(nums, 0)
  end

  @spec sub_array_ranges(nums :: [integer], res :: integer) :: integer
  def sub_array_ranges([head | tail], res) do
    {res, _, _} =
      tail |>
        Enum.reduce({res, head, head}, fn num, {res, l, r} ->
          l = min(l, num)
          r = max(r, num)
          {res + (r - l), l, r}
        end)
    sub_array_ranges(tail, res)
  end

  def sub_array_ranges([], res) do
    res
  end
end

```