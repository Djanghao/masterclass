# Simple Elixir Solution with Tail Recursion

**Author:** stephcrown
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4394050/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4394050/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_product(nums :: [integer]) :: integer
  def max_product(nums) do
    {max_1, max_2} = get_maxes(nums)
    (max_1 - 1) * (max_2 - 1)
  end

  def get_maxes([], max_1, max_2), do: {max_1, max_2}

  def get_maxes([h | t], max_1 \\\\ 0, max_2 \\\\ 0) do    
    cond do
      h > min(max_1, max_2) -> get_maxes(t, h, max(max_1, max_2))
      true -> get_maxes(t, max_1, max_2)
    end
  end
end
```