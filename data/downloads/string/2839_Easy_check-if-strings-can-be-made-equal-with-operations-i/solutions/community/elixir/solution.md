# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5118768/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5118768/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec can_be_equal(s1 :: String.t, s2 :: String.t) :: boolean
  def can_be_equal(<<a1, a2, a3, a4>>, <<b1, b2, b3, b4>>) do
    Enum.sort([a1, a3]) == Enum.sort([b1, b3]) &&
    Enum.sort([a2, a4]) == Enum.sort([b2, b4])
  end
end
```