# Should we Randomly find the solution?

**Author:** ineedmoneynow
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/4390405/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/4390405/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Randomly take a number from `a = 1..n` and check if both `a` and `n-a` are No-Zero-Numbers.

# Complexity
- Time complexity: probably very high
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: high as well
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec get_no_zero_integers(n :: integer) :: [integer]
  def get_no_zero_integers(n) do
    a = Enum.random(1..n)
    b = n-a
    if no_zero?(a) and no_zero?(b) do
        [a,b]
    else
        get_no_zero_integers(n)
    end
  end

  defp no_zero?(0), do: false
  defp no_zero?(n) when n < 10, do: true
  defp no_zero?(n) when rem(n,10) == 0, do: false
  defp no_zero?(n), do: no_zero?(div(n, 10))
end
```