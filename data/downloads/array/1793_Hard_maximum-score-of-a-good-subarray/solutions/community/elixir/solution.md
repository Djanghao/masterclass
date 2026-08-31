# Elixir with two pointers

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4789007/](https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4789007/)

---

Append `[0]` when reversing `left` is just for reducing the amount of code.
# Code
```
defmodule Solution do
  @spec maximum_score(nums :: [integer], k :: integer) :: integer
  def maximum_score(nums, k) do
    {left, [x | right]} = Enum.split(nums, k)
    solve(x, x, 1, Enum.reverse(left, [0]), right)
  end
  
  defp solve(ans, _, _, [0], []), do: ans
  defp solve(ans, lo, n, [a | left], [b | right]) when b > a do
    lo = min(lo, b)
    ans = max(ans, lo * (n + 1))
    solve(ans, lo, n + 1, [a | left], right)
  end
  defp solve(ans, lo, n, [a | left], right) do
    lo = min(lo, a)
    ans = max(ans, lo * (n + 1))
    solve(ans, lo, n + 1, left, right)
  end
end
```