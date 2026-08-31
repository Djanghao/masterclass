# Ruby solution O(mn)

**Author:** hicks185
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1965221/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1965221/)

---

```
def max_points(points)
  result = 0
  
  # start in 2nd row
  # replace each cell with the max value that can be passed down
  i = 1
  while i < points.length
    points[i].each_with_index do |num, j|
      points[i][j] = points[i-1].each_with_index.map{ |n, k| n + points[i][j] - (j-k).abs }.max
      
      if i == points.length - 1
        result = [result, points[i][j]].max
      end
    end
    
    i += 1
  end
  
  result
end
```