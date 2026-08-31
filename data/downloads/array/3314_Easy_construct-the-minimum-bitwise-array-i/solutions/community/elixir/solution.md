# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5904553/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5904553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.86MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec min_bitwise_array(nums :: [integer]) :: [integer]
  def min_bitwise_array(nums) do
    Enum.reduce(nums, [], fn num, ans ->
      if rem(num, 2) == 0 do
        [-1] ++ ans
      else
        [num - div(Bitwise.band(num + 1, -num - 1), 2)] ++ ans
      end
    end)
    |> Enum.reverse()
  end
end

```