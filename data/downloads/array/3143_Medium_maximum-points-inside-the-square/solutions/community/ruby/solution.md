# Ruby | TC: O(n) | SC: O(26)

**Author:** sparlaimor
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5145057/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5145057/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(26)$$

# Code
```
# @param {Integer[][]} points
# @param {String} s
# @return {Integer}
def max_points_inside_square(points, s)
  shift = 'a'.ord
  max = Float::INFINITY
  min = Array.new(26, Float::INFINITY)

  s.each_byte.zip(points) do |byte, (x, y)|
    size = [x.abs, y.abs].max
    letter = byte - shift

    if size < min[letter]
      max = [max, min[letter]].min
      min[letter] = size
    else
      max = [max, size].min
    end
  end

  min.count { |val| val < max }
end
```