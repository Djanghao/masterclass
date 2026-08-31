# [Ruby] O(n)

**Author:** mistersky
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1097727/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1097727/)

---

```
# @param {Integer} x
# @param {Integer} y
# @param {Integer[][]} points
# @return {Integer}
def nearest_valid_point(x, y, points)
  distances = []
  
  points.each_with_index do |point, index|
    a, b = point
    distances << [(x - a).abs + (y - b).abs, index] if a == x || b == y
  end
  
  return -1 if distances.empty?
  
  distances.sort.first.last
end
```