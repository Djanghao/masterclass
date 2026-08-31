# Elixir

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/4274776/](https://leetcode.com/problems/rectangle-overlap/solutions/4274776/)

---

# Approach
The top right corner of second rectangle must fall greater than bottom left corner of first rectangle and the bottom left corner of second rectangle must fall lesser than the top right corner of first rectangle.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_rectangle_overlap(rec1 :: [integer], rec2 :: [integer]) :: boolean
  def is_rectangle_overlap([x1, y1, x2, y2], [x3, y3, x4, y4]) do
    x4 > x1 and y4 > y1 and x3 < x2 and y3 < y2
  end
end
```