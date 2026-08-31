# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4464570/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4464570/)

---

# Approach
Uses binary pattern matching to check for the second contiguous one segment("01").

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check_ones_segment(s :: String.t) :: boolean
  def check_ones_segment(s), do: do_check_ones_segment(s)

  defp do_check_ones_segment(<<"01", rest::bytes>>), do: false
  defp do_check_ones_segment(<<_, rest::bytes>>), do: do_check_ones_segment(rest)
  defp do_check_ones_segment(_), do: true
end
```