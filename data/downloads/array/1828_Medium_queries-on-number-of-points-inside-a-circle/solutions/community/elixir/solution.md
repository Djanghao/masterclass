# Executing queries to check if point inside circle

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3182550/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3182550/)

---

# Intuition
Check Eucledean distance.

# Approach
- `check` - checking if point inside circle;
- `number_of_hits` - sum up the quantity of hits;
- finally traverse through list of queries.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
defmodule Solution do
  @spec count_points(points :: [[integer]], queries :: [[integer]]) :: [integer]
  def count_points(points, queries) do
    for q <- queries, do: number_of_hits(q, points)
  end
  def sq(x) do 
    x * x
  end 
  def check(circle, point) do
    [xr, yr, r] = circle
    [x, y] = point
    sq(x - xr) + sq(y - yr) <= sq(r)
  end
  def number_of_hits(query, points) do
    Enum.sum(for point <- points, check(query, point), do: 1)
  end
end
```