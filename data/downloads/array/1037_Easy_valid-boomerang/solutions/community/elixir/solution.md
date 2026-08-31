# Elixir, uses slope

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/4312296/](https://leetcode.com/problems/valid-boomerang/solutions/4312296/)

---

# Approach
Three points are said to be in a straight line if the slope of point 1 and point 2 is equal to the slope of point 1 and point 3

Slope of point1 (x1, y1) and point2 (x2, y2) = (y2 - y1)/(x2- x1)
Slope of point1 (x1, y1) and point3 (x3, y3) = (y3 - y1)/(x3- x1)

Hence if (y2 - y1)/(x2- x1) == (y3 - y1)/(x3- x1), then the three points are in staight line and are not boomerang.

To avoid divide by zero error you can modify the above equation to
(y2 - y1) * (x3 - x1) == (y3 - y1) * (x2 - x1)

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_boomerang(points :: [[integer]]) :: boolean
  def is_boomerang([[x1, y1], [x2, y2], [x3, y3]]), do: (y2 - y1) * (x3 - x1) != (y3 - y1) * (x2 - x1)  
end
```