# Ruby 100% Easy

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/4938273/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/4938273/)

---

# Code
```
def adjacent(i, j)
  [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]
end

def trap_rain_water(height_map)
  m, n = height_map.length, height_map[0].length
  return 0 if m < 3 || n < 3

  volume, area, h_lower = 0, 0, height_map[0][0]
  level = Array.new(m) { Array.new(n, 1) }

  heights = Hash.new { |h, k| h[k] = [] }
  height_map.each_with_index do |row, i|
    row.each_with_index { |height, j| heights[height] << [i, j] }
  end
  heights = heights.sort

  heights.each do |h, positions|
    volume += area * (h - h_lower)
    h_lower = h
    leak = []

    positions.each do |i, j|
      level[i][j] = 0
      area += 1
      if [0, m - 1].include?(i) || [0, n - 1].include?(j) ||
         adjacent(i, j).any? { |a, b| level[a][b] == -1 }
        leak << [i, j]
        level[i][j] = -1
        area -= 1
      end
    end

    while !leak.empty?
      i, j = leak.pop
      adjacent(i, j).each do |a, b|
        if (0...m).include?(a) && (0...n).include?(b) && level[a][b] == 0
          leak << [a, b]
          level[a][b] = -1
          area -= 1
        end
      end
    end
  end
  volume
end

```