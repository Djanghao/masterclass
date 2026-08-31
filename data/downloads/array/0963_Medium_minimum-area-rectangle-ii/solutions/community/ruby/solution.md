# Ruby - T: O(n2) S: O(n2) 100% 100% Vector

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2686177/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2686177/)

---

Base of vector theory

- 2 lines are possibly in the same rectangle if they are parallel and have the same length => their vectors are either the same or the reverse.
- 2 lines are perpendicular only if their dot product equals to 0

With that, we can come up with a 3-step solution:
- First, group all lines that forming the same vector
- Second, for each group, find the groups of 2 that their vectors form a dot product of 0, those 4 will form a rectangle
- The area of the rectangle will be product of their vector lengths, loop and update the min

```
# @param {Integer[][]} points
# @return {Float}
def min_area_free_rect(points)
  vectors = {}

  points.combination(2).each do |(x1, y1), (x2, y2)|
    if x1 < x2 || y1 < y2
      x1, y1, x2, y2 = x2, y2, x1, y1
    end
    vector = [x1 - x2, y1 - y2]

    vectors[vector] ||= []
    vectors[vector] << [x1, y1]
  end

  min = nil
  
  vectors.each do |vector, grp|
    next if grp.size < 2
    v0x, v0y = vector
    l1 = Math.sqrt(v0x * v0x + v0y * v0y)

    grp.combination(2).each do |(x01, y01), (x11, y11)|
      v1x = x11 - x01
      v1y = y11 - y01

      if v0x * v1x + v0y * v1y == 0
        l2 = Math.sqrt(v1x * v1x + v1y * v1y)
        min = [min, l1 * l2].compact.min
      end
    end
  end

  min || 0
end
