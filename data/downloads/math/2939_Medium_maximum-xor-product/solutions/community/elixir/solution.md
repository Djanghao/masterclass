# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4882630/](https://leetcode.com/problems/maximum-xor-product/solutions/4882630/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 398ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.55MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec maximum_xor_product(a :: integer, b :: integer, n :: integer) :: integer
  def maximum_xor_product(a, b, n) when n == 0 do
    rem(a*b, 1_000_000_007)
  end

  def maximum_xor_product(a, b, n) do
    {a, b} = Enum.reduce(0..n-1, {a, b}, fn i, {a, b} ->
      x = Bitwise.<<<(1, i)
      {t1, t2} = {Bitwise.bxor(a, x), Bitwise.bxor(b, x)}
      if t1*t2 > a*b do
        {t1, t2}
      else
        {a, b}
      end
    end)
    rem(a*b, 1_000_000_007)
  end
end

```