# Typescript: bidirectional graph + DFS (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4313698/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4313698/)

---

# Complexity
- Time complexity:
O(V + E) - we should traverse all vertices and edges

- Space complexity:
O(V + E) 

# Code
```
function checkContradictions(equations: string[][], values: number[]): boolean {
    const graph = new Map<string, [string, number][]>();
    const visited = new Map<string, number>();
    const diffMax: number = 10 ** -5;
    
    for (let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i];
        const w = values[i];

        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.set(u, graph.get(u).concat([[v, w]]));
        graph.set(v, graph.get(v).concat([[u, 1.0 / w]]));
    }

    const dfs = (key: string, val: number = 1): boolean => {
        if (! visited.has(key)) {
            visited.set(key, val);

            for (const [v, w] of graph.get(key)) {
                if (dfs(v, val / w)) {
                    return true;
                }
            }
        }
        
        return Math.abs(visited.get(key) - val) >= diffMax;
    };

    for (const key of graph.keys()) {
        if (! visited.has(key) && dfs(key)) {
            return true;
        }
    }

    return false;
}
```