# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5746557/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5746557/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 286ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.62MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec generate_key(num1 :: integer, num2 :: integer, num3 :: integer) :: integer
  def generate_key(num1, num2, num3) do
    generate_key(num1, num2, num3, 10, 0)
  end

  @spec generate_key(num1 :: integer, num2 :: integer, num3 :: integer, dv :: integer, ans :: integer) :: integer
  def generate_key(num1, num2, num3, dv, ans) when dv < 100000 do
    d1 = rem(num1, dv)
    d2 = rem(num2, dv)
    d3 = rem(num3, dv)
    generate_key(num1 - d1, num2 - d2, num3 - d3, dv*10, ans + Enum.min([d1, d2, d3]))
  end

  def generate_key(_num1, _num2, _num3, _dv, ans) do
    ans
  end
end

```