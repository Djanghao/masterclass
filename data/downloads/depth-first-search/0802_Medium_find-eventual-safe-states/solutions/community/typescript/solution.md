# dfs solution in typescript.

**Author:** AnaySharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3753604/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3753604/)

---

not the best approach, but is relatively easy.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
function eventualSafeNodes(graph: number[][]): number[] {
    const N = graph.length;
    const visited: (0 | 1)[] = Array(N).fill(0);
    const pathVis: (0 | 1)[] = Array(N).fill(0);
    const checked: (0 | 1)[] = Array(N).fill(0);
    const safeNodes: number[] = [];

    const DFS = (node: number): boolean => {
        visited[node] = 1;
        pathVis[node] = 1;
        checked[node] = 0;

        for (let edge of graph[node]) {
            if (!visited[edge]) {
                if (DFS(edge) === false) continue;
                checked[node] = 0;
                return true;
            }
            else if (pathVis[edge]) {
                checked[node] = 0;
                return true;
            }
        }

        checked[node] = 1;
        pathVis[node] = 0;
        return false;
    }

    for (let i = 0; i < N; i++) if (visited[i] === 0) DFS(i);
    for (let i = 0; i < N; i++) if (checked[i] === 1) safeNodes.push(i);

    return safeNodes;
}
```