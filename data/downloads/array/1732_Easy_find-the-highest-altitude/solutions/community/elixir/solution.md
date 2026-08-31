# [Elixir] Accumulating Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/5506986/](https://leetcode.com/problems/find-the-highest-altitude/solutions/5506986/)

---

# Approach
I solved this problem by looping each element and accumulate it each iteration. I also compare the last accumulated value to the result of the next iteration to obtain the highest result.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
defmodule Solution do
  @spec largest_altitude(gain :: [integer], last :: integer) :: integer
  defp largest_altitude([h], last), do: max_int(last, h + last)
  defp largest_altitude([h | t], last), do: max_int(last, largest_altitude(t, h + last))

  @spec max_int(a :: integer, b :: integer) :: integer
  defp max_int(a, b) when a > b, do: a
  defp max_int(_, b), do: b

  @spec largest_altitude(gain :: [integer]) :: integer
  def largest_altitude(gain), do: largest_altitude(gain, 0)
end
```