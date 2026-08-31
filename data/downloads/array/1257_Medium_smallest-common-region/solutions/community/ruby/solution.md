# Ruby, Iterative

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/5796982/](https://leetcode.com/problems/smallest-common-region/solutions/5796982/)

---

# Code
```ruby []
def find_smallest_region(regions, region1, region2)
  relationships = {}
  regions.each { |region| relationships[region[0]] = region[1..] }

  bfs = lambda do |region, target|
    queue = [[region, [region]]]
    until queue.empty?
      current, path = queue.shift

      next unless relationships.include?(current)

      relationships[current].each do |region|
        return path + [region] if region == target

        queue.append([region, path + [region]])
      end
    end
  end

  path1 = bfs.call(regions[0][0], region1)
  path2 = bfs.call(regions[0][0], region2)

  i = 0
  i += 1 while i < [path1.length, path2.length].min && path1[i] == path2[i]
  path1[i - 1]
end
```