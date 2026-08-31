# [Ruby] First Ruby submission?

**Author:** Kache
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/982431/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/982431/)

---

Runtime: 68ms
Memory: 210.7MB

```
def frog_position(n, edges, t, target)
  graph = (edges + edges.map(&:reverse)).group_by(&:first).transform_values { _1.map(&:last) }
  tree = {}
  path = dfs_path(graph, 1, target) { |n, neighbors| tree[n] = neighbors }
  
  not_enough_time, too_much_time = t + 1 < path.size, t + 1 > path.size && !tree[path.last].empty?
  return 0 if not_enough_time || too_much_time
  
  path_neighbors = (0...t).map { |i| tree.fetch(path[i], []) }
  path_neighbors.inject(1.0) { |p, n| n.empty? ? p : p / n.size }
end

def dfs_path(tree, origin, target)
  stack = [[origin, 1]]
  path = []
  visited = Set.new
  
  until path.last == target
    node, lvl = stack.pop
    visited << node
    path.pop until path.size < lvl
    path << node
    neighbors = tree.fetch(path.last, []).reject { |n| visited.include?(n) }
    yield node, neighbors
    neighbors.each { |n| stack << [n, lvl + 1] }
  end
  
  path
end
```