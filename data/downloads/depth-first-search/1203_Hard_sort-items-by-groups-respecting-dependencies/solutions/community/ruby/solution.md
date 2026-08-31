# Topological Sort and Cycle Detection with DFS

**Author:** gilbertsheng
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4087730/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4087730/)

---


# Code
```
# @param {Integer} n
# @param {Integer} m
# @param {Integer[]} group
# @param {Integer[][]} before_items
# @return {Integer[]}
def sort_items(n, m, group, before_items)
  group.map! do |gid|
    if gid == -1 
      gid = m
      m += 1
    end
    gid
  end

  default_empty = lambda { |h, k| h[k] = [] }
  group_adj = Hash.new(&default_empty)
  item_adj = Hash.new(&default_empty)
  before_items.each_with_index do |befores, id|
    gid = group[id]
    befores.each do |bi|
      item_adj[bi] << id
      bg = group[bi]
      group_adj[bg] << gid unless bg == gid
    end
  end

  sorted_groups = dfs(group_adj, m - 1)
  return [] if sorted_groups.empty?
  
  sorted_items = dfs(item_adj, n - 1)
  return [] if sorted_items.empty?

  group_item_map = Hash.new(&default_empty)
  sorted_items.each do |id|
    gid = group[id]
    group_item_map[gid] << id
  end
  sorted_groups.flat_map(&group_item_map)
end

def dfs(graph, max)
  sorted = []
  visited = Set.new
  visiting = Set.new
  search = proc do |u|
    unless visited.include?(u)
      return [] if visiting.include?(u)

      visiting << u
      graph[u].each(&search)
      visiting.delete(u)
      visited << u
      sorted << u
    end
  end
  0.upto(max, &search)
  sorted.reverse
end

```