# Simple Distance

**Author:** Jared_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/4090358/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/4090358/)

---

# Approach
Make sure you call #uniq on circles, or it will trigger a TLE error.


# Code
```
def count_lattice_points(circles)
  lattice_points = Set.new
  circles.uniq.each do |x,y,rad|
    row_range = x-rad .. x+rad+1
    col_range = y-rad .. y+rad+1

    row_range.each do |row|
      col_range.each do |col|
        coords = [row, col]

        if (x-row)**2 + (y-col)**2 <= rad**2
          lattice_points << coords
        end
      end
    end
  end
  lattice_points.size
end

```