# Простое решение при помощи DFS | Dart

**Author:** Tyukmaev5
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/3541742/](https://leetcode.com/problems/is-graph-bipartite/solutions/3541742/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
\u0412 \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435 \u043D\u0430\u0441 \u043F\u0440\u043E\u0441\u044F\u0442 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u043E\u0433\u043E, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438 \u0433\u0440\u0430\u0444 \u0434\u0432\u0443\u0434\u043E\u043B\u044C\u043D\u044B\u043C (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D \u043D\u0430 \u0434\u0432\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0432\u0435\u0440\u0448\u0438\u043D \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u0440\u0435\u0431\u0440\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u043B\u0438 \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u043C\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043C\u044F \u0433\u0440\u0443\u043F\u043F\u0430\u043C\u0438).

# Approach
<!-- Describe your approach to solving the problem. -->
\u042D\u0442\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 DFS \u0438\u043B\u0438 BFS. \u042F \u0432\u043D\u0435\u0434\u0440\u0438\u043B \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043F\u043E\u0438\u0441\u043A\u0430 \u0433\u043B\u0443\u0431\u0438\u043D\u044B (DFS).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    List<int> coloring = [];

    bool isBipartite(List<List<int>> graph) {
    coloring = List.filled(graph.length, 0);
    for (int i = 0; i < graph.length; i++) {
        if (coloring[i] == 0) { 
            if (!findBipartition(graph, i, 1)) {
                return false;
            }
        }
    }
    return true;
    }

    bool findBipartition(List<List<int>> graph, int vertex, int color) {
    coloring[vertex] = color;

    List<int> neighbors = graph[vertex];
    int nextColor = color == 1 ? 2 : 1;
    for (int n in neighbors) {
        if (coloring[n] == 0) {
            if (!findBipartition(graph, n, nextColor)) {
                return false;
            }
            } else {
                if (coloring[n] == color) {
                    return false;
                }
            }
        }
    return true;
    }
}
```