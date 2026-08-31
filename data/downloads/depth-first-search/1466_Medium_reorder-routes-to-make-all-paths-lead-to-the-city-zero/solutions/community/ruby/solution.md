# Ruby Simple

**Author:** queeniepeng
**Votes:** 2
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3065702/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3065702/)

---



```
# start at city 0
# check 0's neighbors
# traverse their neighbors

def min_reorder(n, connections)
  @connects = connections.to_set
  @neighbors = Hash.new { |hash, key| hash[key] = [] }
  @ans = 0

  connections.each do |i, o|
    @neighbors[i] << o
    @neighbors[o] << i
  end

  @visited = Set.new.add(0)
  traverse(0)
  @ans
end

def traverse(city)
  @neighbors[city].each do |n|
    next if @visited.include?(n)

    @ans += 1 unless @connects.include?([n, city])
    @visited.add(n)
    traverse(n)
  end
end
```