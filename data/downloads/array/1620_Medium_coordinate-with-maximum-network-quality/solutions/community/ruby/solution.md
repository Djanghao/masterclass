# [Ruby] O(n^2)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/899201/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/899201/)

---

```
# @param {Integer[][]} towers
# @param {Integer} radius
# @return {Integer[]}
def best_coordinate(towers, radius)
  x_sorted_towers = towers.sort
  x_min = x_sorted_towers[0][0]
  x_max = x_sorted_towers.last[0]

  y_sorted_towers = towers.sort_by{|tower| tower[1]}
  y_min = y_sorted_towers[0][1]
  y_max = y_sorted_towers.last[1]

  max_quality = 0
  max_quality_coordinate = [x_min, y_min]
  
  (x_min..x_max).each do |x|
    (y_min..y_max).each do |y|
      quality = 0
      
      towers.each do |tower|
        distance = Math::sqrt((x - tower[0])**2 + (y - tower[1])**2)
        quality += radius >= distance ? (tower[2]/(1 + distance)).floor : 0
      end

      if quality > max_quality
        max_quality = quality
        max_quality_coordinate = [x, y]
      end
    end
  end
  
  max_quality_coordinate
end
```