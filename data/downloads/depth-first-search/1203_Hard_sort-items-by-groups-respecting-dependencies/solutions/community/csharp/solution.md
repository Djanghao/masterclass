# C# Solution for Sort Items by Groups Respecting Dependencies Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3938864/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3938864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to sort items based on certain dependencies and group constraints. The key challenge is to handle both intra-group and inter-group dependencies while sorting. To address this, the solution breaks down the problem into two steps: first, sort items within each group, and second, sort groups based on their dependencies.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Group Assignment: Assign unique group IDs to items that belong to no group (-1). This allows us to differentiate between items within different groups.

1. Graph Creation: Build two dependency graphs:

- itemGraph: Represents the item dependencies within each group.
- groupGraph: Represents the group dependencies.
3. Indegree Calculation: Compute the indegree of each item and group. The indegree indicates the number of incoming dependencies.

1. Topological Sorting: Perform topological sorting for both graphs:

- itemGraph: Sort items within each group based on their dependencies.
- groupGraph: Sort groups based on their dependencies.
5. Construct Answer: After obtaining sorted items within groups and sorted groups, concatenate the items within each sorted group to construct the final answer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- The creation of itemGraph and groupGraph takes O(n) time.
- Calculating indegrees for items and groups takes O(n) time.
- Topological sorting for itemGraph and groupGraph takes O(n) time.
- Constructing the answer takes O(n) time.
- The overall time complexity is O(n), where n is the number of items.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The itemGraph and groupGraph dictionaries use O(n) space.
- The arrays to store indegrees use O(n) space.
- The orderedGroups dictionary uses O(n) space.
- The stack and visited list used in the topological sorting use O(n) space.
- The overall space complexity is O(n).

# Code
```
public class Solution {
    public int[] SortItems(int n, int m, int[] group, IList<IList<int>> beforeItems) {
        int groupId = m;
        for (int i = 0; i < n; i++) {
            if (group[i] == -1) {
                group[i] = groupId;
                groupId++;
            }
        }

        Dictionary<int, List<int>> itemGraph = new Dictionary<int, List<int>>();
        int[] itemIndegree = new int[n];
        for (int i = 0; i < n; ++i) {
            itemGraph[i] = new List<int>();
        }

        Dictionary<int, List<int>> groupGraph = new Dictionary<int, List<int>>();
        int[] groupIndegree = new int[groupId];
        for (int i = 0; i < groupId; ++i) {
            groupGraph[i] = new List<int>();
        }

        for (int curr = 0; curr < n; curr++) {
            foreach (int prev in beforeItems[curr]) {
                itemGraph[prev].Add(curr);
                itemIndegree[curr]++;

                if (group[curr] != group[prev]) {
                    groupGraph[group[prev]].Add(group[curr]);
                    groupIndegree[group[curr]]++;
                }
            }
        }

        List<int> itemOrder = TopologicalSort(itemGraph, itemIndegree);
        List<int> groupOrder = TopologicalSort(groupGraph, groupIndegree);

        if (itemOrder.Count == 0 || groupOrder.Count == 0) {
            return new int[0];
        }

        Dictionary<int, List<int>> orderedGroups = new Dictionary<int, List<int>>();
        foreach (int item in itemOrder) {
            orderedGroups.TryAdd(group[item], new List<int>());
            orderedGroups[group[item]].Add(item);
        }

        List<int> answerList = new List<int>();
        foreach (int groupIndex in groupOrder) {
            if (orderedGroups.ContainsKey(groupIndex)) {
                answerList.AddRange(orderedGroups[groupIndex]);
            }
        }

        return answerList.ToArray();
    }

    private List<int> TopologicalSort(Dictionary<int, List<int>> graph, int[] indegree) {
        List<int> visited = new List<int>();
        Stack<int> stack = new Stack<int>();

        for (int key = 0; key < graph.Count; key++) {
            if (indegree[key] == 0) {
                stack.Push(key);
            }
        }

        while (stack.Count > 0) {
            int curr = stack.Pop();
            visited.Add(curr);

            foreach (int prev in graph[curr]) {
                indegree[prev]--;
                if (indegree[prev] == 0) {
                    stack.Push(prev);
                }
            }
        }

        return visited.Count == graph.Count ? visited : new List<int>();
    }
}
```