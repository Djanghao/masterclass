# Simple solution with intersections

**Author:** 490R1x9LSo
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/5856464/](https://leetcode.com/problems/rectangle-area/solutions/5856464/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer} ax1
# @param {Integer} ay1
# @param {Integer} ax2
# @param {Integer} ay2
# @param {Integer} bx1
# @param {Integer} by1
# @param {Integer} bx2
# @param {Integer} by2
# @return {Integer}
def compute_area(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
  total_area = area(ax1, ay1, ax2, ay2) + area(bx1, by1, bx2, by2)
  intersection_x = intersection_coords([ax1, ax2], [bx1, bx2])
  intersection_y = intersection_coords([ay1, ay2], [by1, by2])
  if intersection_x && intersection_y
    intersection = area(intersection_x[0], intersection_y[0], intersection_x[1], intersection_y[1])
    total_area -= intersection
  end
  total_area
end

def area(x1, y1, x2, y2)
  (x2 - x1) * (y2 - y1)
end

def intersection_coords(*coords)
  sorted = coords.sort_by{ |c| c.first }
  if sorted[0][1] < sorted[1][0]
    return nil
  else
    return [[sorted[0][0], sorted[1][0]].max, [sorted[0][1], sorted[1][1]].min]
  end
end
```