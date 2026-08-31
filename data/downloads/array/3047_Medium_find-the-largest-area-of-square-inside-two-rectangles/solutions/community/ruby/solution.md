# Ruby Solution

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5958496/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5958496/)

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
# @param {Integer[][]} bottom_left
# @param {Integer[][]} top_right
# @return {Integer}
def largest_square_area(bottom_left, top_right)
  max_area = 0
  (0...bottom_left.length).each do |i|
    (i + 1...bottom_left.length).each do |j|
      x1 = [bottom_left[i][0], bottom_left[j][0]].max
      y1 = [bottom_left[i][1], bottom_left[j][1]].max
      x2 = [top_right[i][0], top_right[j][0]].min
      y2 = [top_right[i][1], top_right[j][1]].min
      side = [x2 - x1, y2 - y1].min
      if side > 0
        max_area = [max_area, side * side].max
      end
    end
  end
  max_area
end
```