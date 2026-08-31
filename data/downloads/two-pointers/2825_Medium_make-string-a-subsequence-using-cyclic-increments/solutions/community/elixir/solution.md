# Elixir - Greedy

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6110850/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6110850/)

---

# Complexity
- Time complexity: $$O(|str1|)$$
- Space complexity: $$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec can_make_subsequence(str1 :: String.t, str2 :: String.t) :: boolean
  def can_make_subsequence(str1, str2) when byte_size(str1) < byte_size(str2) do
    false
  end

  def can_make_subsequence(_str1, "") do
    true
  end

  def can_make_subsequence(<<a, t1::binary>>, <<b, t2::binary>>) when rem(b - a + 26, 26) in [0, 1] do
    can_make_subsequence(t1, t2)
  end

  def can_make_subsequence(<<_, t1::binary>>, str2) do
    can_make_subsequence(t1, str2)
  end
end
```