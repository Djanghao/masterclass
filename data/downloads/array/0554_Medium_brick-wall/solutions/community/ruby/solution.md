# [Ruby] O(mn)

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1172289/](https://leetcode.com/problems/brick-wall/solutions/1172289/)

---

```
# @param {Integer[][]} wall
# @return {Integer}
def least_bricks(wall)
  boundary_occ_h = Hash.new(0)
  
  wall.each do |brick_row|
    boundary = 0
    
    brick_row[0..-2].each do |brick_length|
      boundary += brick_length
      boundary_occ_h[boundary] += 1
    end
  end
  
  boundary_occurrence = boundary_occ_h.values
  
  if boundary_occurrence.empty?
    wall.count
  else
    wall.count - boundary_occurrence.max
  end
end
```