# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/4326878/](https://leetcode.com/problems/minimum-absolute-difference/solutions/4326878/)

---

# Approach
Sort the numbers using Enum.sort. Iterate each number, keep track of the minimum absolute difference between adjacent numbers and accumulate the resulting pairs in one pass.

# Complexity
- Time complexity:
O(n.log(n))
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec minimum_abs_difference(arr :: [integer]) :: [[integer]]
  def minimum_abs_difference(arr), do: do_minimum_abs_difference(Enum.sort(arr), nil, [])

  defp do_minimum_abs_difference([el1 | [el2 | _] = tl], min_diff, res) do
    case el2 - el1 do
      x when x > min_diff -> do_minimum_abs_difference(tl, min_diff, res)
      x when x < min_diff -> do_minimum_abs_difference(tl, x, [[el1, el2]])
      _ -> do_minimum_abs_difference(tl, min_diff, [[el1, el2] | res])
    end
  end
  defp do_minimum_abs_difference(_, _, res), do: Enum.reverse(res)
end
```