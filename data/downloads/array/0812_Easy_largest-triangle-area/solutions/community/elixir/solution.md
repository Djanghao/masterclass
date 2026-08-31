# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/4267475/](https://leetcode.com/problems/largest-triangle-area/solutions/4267475/)

---

# Approach
Uses for comprehension to calculate area for all three points combination and returns the largest area.

# Complexity
- Time complexity:
O(n\xB3)

- Space complexity:
O(n\xB3)

# Code
```
defmodule Solution do
  @spec largest_triangle_area(points :: [[integer]]) :: float
  def largest_triangle_area([_hd | tl] = points) do 
    for p1 <- points, p2 <- tl, p3 <- tl(tl), reduce: 0 do 
      acc -> max(acc, find_triangle_area(p1, p2, p3))
    end
  end

  defp find_triangle_area([x1, y1], [x2, y2], [x3, y3]), do: abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))/2 
end
```