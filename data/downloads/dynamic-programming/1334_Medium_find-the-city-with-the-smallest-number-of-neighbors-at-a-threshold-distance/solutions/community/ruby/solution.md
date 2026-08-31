# Ruby beats 100%

**Author:** caovanbi235
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536558/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536558/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Integer} distance_threshold
# @return {Integer}
def find_the_city(n, edges, distance_threshold)
  dist = Array.new(n) { Array.new(n, Float::INFINITY) }
  n.times { |i| dist[i][i] = 0 }
  edges.each do |u, v, w|
    dist[u][v] = dist[v][u] = w
  end
  n.times do |k|
    n.times do |i|
      n.times do |j|
        dist[i][j] = [dist[i][j], dist[i][k] + dist[k][j]].min
      end
    end
  end
  dist.each_with_index
      .min_by { |row, i| [row.count { |d| d <= distance_threshold }, -i] }
      .last
end
```