# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5845048/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5845048/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.03MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec min_element(nums :: [integer]) :: integer
  def min_element(nums) do
    Enum.reduce(nums, get_digit_sum(nums |> hd, 0), fn num, ans ->
      min(ans, get_digit_sum(num, 0))
    end)
  end

  @spec get_digit_sum(num :: integer, sum :: integer) :: integer
  def get_digit_sum(num, sum) when num == 0 do
    sum
  end

  def get_digit_sum(num, sum) do
    get_digit_sum(div(num, 10), sum + rem(num, 10))    
  end
end

```