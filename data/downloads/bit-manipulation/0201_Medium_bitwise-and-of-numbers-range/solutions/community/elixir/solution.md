# Elixir - recursion

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4760491/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4760491/)

---

# Code
```
import Bitwise
defmodule Solution do
  @spec range_bitwise_and(left :: integer, right :: integer) :: integer
  def range_bitwise_and(left, right) do
    find(right, left)
  end

  defp find(max, min) when max > min, do: find(max &&& (max - 1), min)
  defp find(max, min), do: max &&& min
end
```