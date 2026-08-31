# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/4728397/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/4728397/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    Map<int, List<int>> graph = {};
    int countCompleteComponents(int n, List<List<int>> edges) {
        for (final edge in edges) {
            final u = edge.first;
            final v = edge.last;
            graph[u] ??= [];
            graph[v] ??= [];
            graph[u]?.add(v);
            graph[v]?.add(u);
        }

        var count = 0;
        final Set<int> visited = {};

        for (int i = 0; i < n; i++) {
            if (!visited.contains(i)) {
                visited.add(i);
                final Set<int> component = {};
                dfs(i, component, visited);
                if (component.every((node) => (graph[node]?.length ?? 0) == component.length - 1)) {
                    count += 1;
                }
            }
        }

        return count;
    }

    void dfs(int i, Set<int> component, Set<int> visited) {
        component.add(i);
        for (final neighbor in (graph[i] ?? [])) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                dfs(neighbor, component, visited);
            }
        }
    }
}
```