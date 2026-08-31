# ✅ Swift | Official solution (beats 100%)

**Author:** vologirov
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3937078/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3937078/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func sortItems(_ n: Int, _ m: Int, _ group: [Int], _ beforeItems: [[Int]]) -> [Int] {
        // If an item belongs to zero group, assign it a unique group id.
        var group = group
        var groupId = m
        for index in group.indices {
            if group[index] == -1 {
                group[index] = groupId
                groupId += 1
            }
        }

        // Sort all item regardless of group dependencies.
        var itemGraph = (0..<n).reduce(into: [Int: [Int]]()) { $0[$1] = [] }
        var itemIndegree = Array(repeating: 0, count: n)

        // Sort all item regardless of group dependencies.
        var groupGraph = (0..<groupId).reduce(into: [Int: [Int]]()) { $0[$1] = [] }
        var groupIndegree = Array(repeating: 0, count: groupId)

        for curr in 0..<n {
            for prev in beforeItems[curr] {
                // Each (prev -> curr) represents an edge in the item graph.
                itemGraph[prev]!.append(curr)
                itemIndegree[curr] += 1

                // If they belong to different groups, add an edge in the group graph.
                if group[curr] != group[prev] {
                    groupGraph[group[prev]]!.append(group[curr])
                    groupIndegree[group[curr]] += 1
                }
            }
        }

        // Topological sort nodes in the graph, return an empty array if a cycle exists.
        var itemOrder = topologicalSort(itemGraph, itemIndegree)
        var groupOrder = topologicalSort(groupGraph, groupIndegree)
        if itemOrder.isEmpty || groupOrder.isEmpty {
            return []
        }

        // Items are sorted regardless of groups, we need to differentiate them by the groups they belong to.
        var orderedGroups = [Int: [Int]]()
        for item in itemOrder {
            orderedGroups[group[item], default: []].append(item)
        }

        // Concatenate sorted items in all sorted groups.
        // [group 1, group 2, ... ] -> [(item 1, item 2, ...), (item 1, item 2, ...), ...]
        var answerList = [Int]()
        for groupIndex in groupOrder {
            answerList.append(contentsOf: orderedGroups[groupIndex, default: []])
        }

        return answerList
    }

    private func topologicalSort(_ graph: [Int: [Int]], _ indegree: [Int]) -> [Int] {
        var visited = [Int]()
        var stack = [Int]()
        var indegree = indegree

        for key in graph.keys {
            if indegree[key] == 0 {
                stack.append(key)
            }
        }
        
        while !stack.isEmpty {
            let curr = stack.removeLast()
            visited.append(curr)

            for prev in graph[curr, default: []] {
                indegree[prev] -= 1
                if indegree[prev] == 0 {
                    stack.append(prev)
                }
            }
        }
        
        return visited.count == graph.count ? visited : []
    }
}
```

> ***Please upvote if you like it***