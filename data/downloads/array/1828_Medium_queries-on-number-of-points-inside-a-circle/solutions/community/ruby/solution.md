# Ruby 100%

**Author:** TeamNINJA
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3925909/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3925909/)

---

BEATS 100% of other Ruby Solutions

# Code
```
# @param {Integer[][]} points
# @param {Integer[][]} queries
# @return {Integer[]}
def count_points(points, queries)
  answer = []
  
  queries.each do |query|
    xj, yj, rj = query
    count = 0
    
    points.each do |point|
      xi, yi = point
      distance_squared = (xj - xi) ** 2 + (yj - yi) ** 2
      
      count += 1 if distance_squared <= rj ** 2
    end
    
    answer << count
  end
  
  answer
end
```