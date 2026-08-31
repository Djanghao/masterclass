# [Ruby] O(nlogn) time & O(1) space

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/888156/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/888156/)

---

```
# @param {Integer[][]} points
# @return {Integer}
def find_min_arrow_shots(points)
  return 0 if points.empty?

  points.sort!
  count = 1
  current_x_end = points.shift[1]
  
  points.each do |x_start, x_end|
    if current_x_end >= x_start
      current_x_end = [current_x_end, x_end].min
      next
    end
    
    count += 1
    current_x_end = x_end
  end

  count
end
```