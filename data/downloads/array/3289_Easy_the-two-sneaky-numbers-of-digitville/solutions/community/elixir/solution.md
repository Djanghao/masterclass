# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5798696/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5798696/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 3ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.76MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec get_sneaky_numbers(nums :: [integer]) :: [integer]
  def get_sneaky_numbers(nums) do
    cnts = Enum.reduce(nums, %{}, fn x, acc -> Map.update(acc, x, 1, &(&1 + 1)) end)
    Enum.filter(Map.keys(cnts), fn k -> cnts[k] > 1 end)  
  end
end

```