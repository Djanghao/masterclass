# Ruby | 200%

**Author:** queeniepeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3329424/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3329424/)

---


```
# @param {Integer} n
# @param {Integer[][]} roads
# @return {Integer}
def min_score(n, roads)
  neighbors = Hash.new { |hash, key| hash[key] = [] }
  roads.each do |a, b, distance|
    neighbors[a] << [distance, b]
    neighbors[b] << [distance, a]
  end
  min_road = 10**5
  connected = [1, n]
  visited = Set.new

  while c = connected.shift
    next if visited.include?(c)

    neighbors[c].each do |distance, neighbor|
      connected << neighbor
      min_road = [min_road, distance].min
      visited.add(c)
    end
  end
  min_road
end
```