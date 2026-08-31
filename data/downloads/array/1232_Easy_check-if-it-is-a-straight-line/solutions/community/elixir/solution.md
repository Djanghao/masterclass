# Elixir, uses slope

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/4330563/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/4330563/)

---

# Approach
Calculate the slope of first two points (x1, y1), (x2, y2) by the formula (y2 - y1)/(x2 - x1). If the slope p1 and all the other points are the same, then the points lie in a straight line.

[p1, p2, p3, p4]
If slope(p1, p2) == slope(p1, p3) == slope(p1, p4), then the points lie in a straight line.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec check_straight_line(coordinates :: [[integer]]) :: boolean
  def check_straight_line([p1, p2 | tl]) do 
    p1_p2_slope = get_slope(p1, p2)
    Enum.all?(tl, &get_slope(p1, &1) == p1_p2_slope)
  end

  defp get_slope([x1, y1], [x2, y2]) when x1 != x2, do: (y2 - y1)/(x2 - x1)
  defp get_slope(_, _), do: :undefined
end
```