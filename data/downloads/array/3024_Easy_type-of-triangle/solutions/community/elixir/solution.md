# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/4693394/](https://leetcode.com/problems/type-of-triangle/solutions/4693394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 313ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.34MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec triangle_type(nums :: [integer]) :: String.t
  def triangle_type(nums) do
    [l1 | [l2 | [l3]]] = Enum.sort(nums)
    cond do
      l1 + l2 <= l3 ->
        "none"
      l1 == l2 and l2 == l3 ->
        "equilateral"
      l1 == l2 or l2 == l3 ->
        "isosceles"
      true ->
        "scalene"
    end
  end
end

```