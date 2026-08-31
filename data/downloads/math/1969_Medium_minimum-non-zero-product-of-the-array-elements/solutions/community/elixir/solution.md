# Elixir math solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/3971023/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/3971023/)

---

# Intuition
Let `a >= b > c`. It is always true that `a * b > (a + c) * (b - c)`.
So the swapping operations should be done to make as many small integers as possible.

# Approach
~~By observation~~, the swapping always result in:
one integer `2^p - 1`,
and `n` pairs of `1` and `2^p - 2`, where `n = (2^p - 2) / 2`.

Multiplying these integers give the answer. We will need to write an $$O(log(n))$$ function to calculate $$x^n$$ mod $$10^9 + 7$$. 

# Code
```
defmodule Solution do
  @large 1_000_000_007
  @spec min_non_zero_product(p :: integer) :: integer
  def min_non_zero_product(p) do
    max = 2**p - 1
    max2 = max - 1
    max2_count = div(max2, 2)
    pow(max, max2, max2_count)
  end
  
  defp pow(acc, _, 0), do: acc
  defp pow(acc, x, n) do
    if rem(n, 2) == 1 do
      rem(acc * x, @large)
    else
      acc
    end
    |> pow(rem(x * x, @large), div(n, 2))
  end
end
```