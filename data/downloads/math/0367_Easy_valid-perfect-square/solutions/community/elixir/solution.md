# Simple Elixir solution using binary search.

**Author:** syeo66
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/4699168/](https://leetcode.com/problems/valid-perfect-square/solutions/4699168/)

---


# Code
```
defmodule Solution do
  @spec is_perfect_square(num :: integer) :: boolean
  def is_perfect_square(num) do
    is_perfect_square(num, 1, num)
  end

  def is_perfect_square(num, l, r) do
    p = div(l+r, 2)
    p2 = p*p

    cond do
        p2 == num -> true
        l == p -> false
        p2 < num -> is_perfect_square(num, p, r)
        p2 > num -> is_perfect_square(num, l, p)
    end
  end
end
```